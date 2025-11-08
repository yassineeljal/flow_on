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
  message: z.string().min(10, "Dis m'en un peu plus (10+ caractères)"),
});
type FormData = z.infer<typeof schema>;

export default function ContactForm(){
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data: FormData) => {
    setDone(false);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { 
        setDone(true); 
        reset();
        // Hide success message after 5 seconds
        setTimeout(() => setDone(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 animate-fade-in">
          <Label className="flex items-center gap-2 text-sm font-semibold">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Nom complet
          </Label>
          <Input 
            placeholder="Jean Dupont" 
            className="h-11 glass border-primary/20 focus:border-primary transition-all"
            {...register("name")} 
          />
          {errors.name && (
            <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2 animate-fade-in" style={{ animationDelay: '50ms' }}>
          <Label className="flex items-center gap-2 text-sm font-semibold">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Adresse email
          </Label>
          <Input 
            type="email"
            placeholder="jean@exemple.com" 
            className="h-11 glass border-primary/20 focus:border-primary transition-all"
            {...register("email")} 
          />
          {errors.email && (
            <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Budget & Delay Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <Label className="flex items-center gap-2 text-sm font-semibold">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Budget estimé
          </Label>
          <select 
            className="h-11 w-full rounded-lg border border-primary/20 glass px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer" 
            defaultValue="" 
            {...register("budget")}
          >
            <option value="" disabled>Sélectionner un budget…</option>
            <option value="<1000">💰 Moins de 1000 $</option>
            <option value="1000-3000">💵 1000 – 3000 $</option>
            <option value="3000-6000">💸 3000 – 6000 $</option>
            <option value=">6000">🤑 Plus de 6000 $</option>
          </select>
          {errors.budget && (
            <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.budget.message}
            </p>
          )}
        </div>

        <div className="space-y-2 animate-fade-in" style={{ animationDelay: '150ms' }}>
          <Label className="flex items-center gap-2 text-sm font-semibold">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Délai souhaité
          </Label>
          <select 
            className="h-11 w-full rounded-lg border border-primary/20 glass px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer" 
            defaultValue="" 
            {...register("delay")}
          >
            <option value="" disabled>Sélectionner un délai…</option>
            <option value="urgent">🔥 Urgent (cette semaine)</option>
            <option value="2-3 semaines">⚡ 2–3 semaines</option>
            <option value="1-2 mois">📅 1–2 mois</option>
            <option value="je ne sais pas">🤔 Je ne sais pas encore</option>
          </select>
          {errors.delay && (
            <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.delay.message}
            </p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <Label className="flex items-center gap-2 text-sm font-semibold">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          Décris ton projet
        </Label>
        <Textarea 
          placeholder="Exemple : Je voudrais un site vitrine moderne pour mon restaurant. J'aime le style de restaurantxyz.com. J'ai besoin d'un menu, galerie photos, formulaire de réservation..."
          className="min-h-[140px] glass border-primary/20 focus:border-primary transition-all resize-none"
          {...register("message")} 
        />
        <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
          <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Conseil :</span> Mentionne 2-3 sites que tu aimes, 
            ton objectif principal (vitrine, e-commerce, génération de leads), et les fonctionnalités essentielles.
          </p>
        </div>
        {errors.message && (
          <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button & Status */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 animate-fade-in" style={{ animationDelay: '250ms' }}>
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="h-12 px-8 btn-gradient shadow-glow hover-lift font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Envoyer ma demande
            </>
          )}
        </Button>

        {/* Success Message */}
        {done && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 animate-scale-in">
            <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              Message envoyé ! Je te réponds sous 24h ⚡
            </span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 animate-scale-in">
            <svg className="w-5 h-5 text-destructive shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-destructive">
              Oups, erreur. Réessaye ou contacte-moi par email.
            </span>
          </div>
        )}
      </div>

      {/* Privacy Notice */}
      <div className="pt-4 border-t border-border/40 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <p className="text-xs text-muted-foreground leading-relaxed">
          <svg className="w-3.5 h-3.5 inline mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Tes données sont protégées et utilisées uniquement pour te répondre. 
          Consulte notre <a href="/legal/privacy" className="text-primary hover:underline">politique de confidentialité</a>.
        </p>
      </div>
    </form>
  );
}
