"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const BUDGET = ["<1000","1000-3000","3000-6000",">6000"] as const;
const DELAY  = ["urgent","2-3 semaines","1-2 mois","je ne sais pas"] as const;

const schema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  budget: z.enum(BUDGET, { message: "Choisis un budget" }),
  delay: z.enum(DELAY,  { message: "Choisis un délai" }),
  message: z.string().min(10, "Dis m’en un peu plus (10+ caractères)"),
});
type FormData = z.infer<typeof schema>;

export default function ContactForm(){
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const [done, setDone] = useState(false);

  const onSubmit = async (data: FormData) => {
    setDone(false);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) { setDone(true); reset(); }
    else alert("Oups, réessaie.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Nom</Label>
          <Input placeholder="Votre nom" {...register("name")} />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label>Email</Label>
          <Input placeholder="you@email.com" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label>Budget</Label>
          <select className="h-10 w-full rounded-md border bg-background px-3 py-2 text-sm" defaultValue="" {...register("budget")}>
            <option value="" disabled>Choisir…</option>
            <option value="<1000">Moins de 1000 $</option>
            <option value="1000-3000">1000 – 3000 $</option>
            <option value="3000-6000">3000 – 6000 $</option>
            <option value=">6000">Plus de 6000 $</option>
          </select>
          {errors.budget && <p className="text-sm text-destructive mt-1">{errors.budget.message}</p>}
        </div>
        <div>
          <Label>Délai</Label>
          <select className="h-10 w-full rounded-md border bg-background px-3 py-2 text-sm" defaultValue="" {...register("delay")}>
            <option value="" disabled>Choisir…</option>
            <option value="urgent">Urgent (cette semaine)</option>
            <option value="2-3 semaines">2–3 semaines</option>
            <option value="1-2 mois">1–2 mois</option>
            <option value="je ne sais pas">Je ne sais pas</option>
          </select>
          {errors.delay && <p className="text-sm text-destructive mt-1">{errors.delay.message}</p>}
        </div>
      </div>

      <div>
        <Label>Message</Label>
        <Textarea placeholder="Décris le projet (pages, style, exemples…)" {...register("message")} />
        <p className="text-xs mt-1 text-muted-foreground">
          Astuce : donne 2–3 sites que tu aimes + ton objectif (vitrine, e-commerce, leads).
        </p>
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-center gap-3">
        <Button disabled={isSubmitting}>
          {isSubmitting ? "Envoi…" : "Envoyer ma demande"}
        </Button>
        {done && <span className="text-sm">✅ Reçu ! Je te réponds rapidement.</span>}
      </div>
    </form>
  );
}
