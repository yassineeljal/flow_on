import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!resend) {
      console.log("[CONTACT] (no RESEND) ->", data);
      return NextResponse.json({ ok: true, note: "logged-only" });
    }
    await resend.emails.send({
      from: "FlowOn <noreply@your-domain.com>",
      to: process.env.LEADS_TO || "jalwach.co@gmail.com",
      subject: `Nouveau devis — ${data.name} (${data.budget}, ${data.delay})`,
      text: `Nom: ${data.name}\nEmail: ${data.email}\nBudget: ${data.budget}\nDélai: ${data.delay}\n\n${data.message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
