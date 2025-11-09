import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactRateLimiter } from "@/lib/rate-limit";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Helper to get client IP
function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }
  return "unknown";
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Verify hCaptcha token
    const captchaToken = data.captchaToken;
    if (!captchaToken) {
      return NextResponse.json(
        { ok: false, error: "Captcha token manquant" },
        { status: 400 }
      );
    }

    // Verify captcha with hCaptcha API
    if (process.env.HCAPTCHA_SECRET) {
      const captchaResponse = await fetch("https://hcaptcha.com/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `response=${captchaToken}&secret=${process.env.HCAPTCHA_SECRET}`,
      });

      const captchaData = await captchaResponse.json();
      
      if (!captchaData.success) {
        return NextResponse.json(
          { ok: false, error: "Échec de la vérification Captcha" },
          { status: 400 }
        );
      }
    }
    
    // Rate limiting by IP
    const clientIp = getClientIp(req);
    const rateLimitResult = contactRateLimiter.check(clientIp);
    
    if (!rateLimitResult.success) {
      const resetInMinutes = Math.ceil((rateLimitResult.resetTime - Date.now()) / 60000);
      return NextResponse.json(
        { 
          ok: false, 
          error: `Trop de requêtes. Réessayez dans ${resetInMinutes} minute(s).`,
          resetTime: rateLimitResult.resetTime 
        },
        { 
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": rateLimitResult.resetTime.toString(),
          }
        }
      );
    }

    if (!resend) {
      console.log("[CONTACT] (no RESEND) ->", data);
      return NextResponse.json({ ok: true, note: "logged-only" });
    }

    // En dev, utiliser le domaine de test de Resend
    // En prod, utiliser votre domaine vérifié
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.LEADS_TO || "jalwach.co@gmail.com";
    
    await resend.emails.send({
      from: `FlowOn <${fromEmail}>`,
      to: toEmail,
      subject: `Nouveau devis — ${data.name} (${data.budget}, ${data.delay})`,
      text: `Nom: ${data.name}\nEmail: ${data.email}\nBudget: ${data.budget}\nDélai: ${data.delay}\n\n${data.message}`,
    });
    
    return NextResponse.json(
      { ok: true },
      {
        headers: {
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
          "X-RateLimit-Reset": rateLimitResult.resetTime.toString(),
        }
      }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Erreur serveur" }, { status: 500 });
  }
}
