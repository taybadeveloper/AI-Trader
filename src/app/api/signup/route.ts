import { NextResponse } from "next/server";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// The PHP lead-capture endpoint the Al-Trader signup form submits to.
// Expects a JSON body with camelCase fields: firstName, lastName, email, phone.
// Phone must be digits only (no "+", spaces or dashes).
// Override per environment with the SIGNUP_ENDPOINT env variable.
const ENDPOINT =
  process.env.SIGNUP_ENDPOINT ?? "https://meridianc-au.com/homeMailAction.php";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const countryCode = String(body.countryCode ?? "").trim();

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all fields." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Compose a digits-only phone string: country code + national number.
  // Handles "0301 2345678" (+92 selected), numbers already containing the
  // country code, and numbers typed without the leading trunk zero.
  const countryDigits = countryCode.replace(/\D/g, "");
  const phoneDigits = phone.replace(/\D/g, "");
  let digitsPhone = phoneDigits;
  if (countryDigits && phoneDigits.startsWith("0")) {
    digitsPhone = countryDigits + phoneDigits.slice(1);
  } else if (countryDigits && !phoneDigits.startsWith(countryDigits)) {
    digitsPhone = countryDigits + phoneDigits;
  }
  if (digitsPhone.length < 7 || digitsPhone.length > 15) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }
  // Strict per-country length validation on the server as well.
  const parsedPhone = parsePhoneNumberFromString(`+${digitsPhone}`);
  if (!parsedPhone || !parsedPhone.isValid()) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "User-Agent": "Al-Trader/1.0",
  };
  // Forward the visitor's real IP so the lead system records it correctly.
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) headers["X-Forwarded-For"] = forwardedFor;

  try {
    const upstream = await fetch(ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify({ firstName, lastName, email, phone: digitsPhone }),
      signal: AbortSignal.timeout(20000),
    });

    const text = await upstream.text().catch(() => "");
    let upstreamJson: { status?: string; message?: string } = {};
    try {
      upstreamJson = JSON.parse(text);
    } catch {
      // Non-JSON response — fall through to HTTP status handling below.
    }

    const ok = upstream.ok && upstreamJson.status === "success";
    return NextResponse.json(
      {
        ok,
        error: ok
          ? null
          : upstreamJson.message ??
            "The registration service is unavailable right now. Please try again later.",
      },
      { status: ok ? 200 : 502 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "The registration service is unavailable right now. Please try again later.",
      },
      { status: 502 }
    );
  }
}
