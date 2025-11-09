"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { toast } from "sonner";

const BUDGET = ["<1000","1000-3000","3000-6000",">6000"] as const;
const DELAY  = ["urgent","2-3 semaines","1-2 mois","je ne sais pas"] as const;

type ContactFormProps = {
  t: any;
};

export default function ContactForm({ t }: ContactFormProps){
  const schema = z.object({
    name: z.string().min(2, t.nameError),
    email: z.string().email(t.emailError),
    budget: z.enum(BUDGET, { message: t.budgetError }),
    delay: z.enum(DELAY,  { message: t.delayError }),
    message: z.string().min(10, t.messageError),
  });
  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const onSubmit = async (data: FormData) => {
    if (!captchaToken) {
      toast.error(t.captchaError);
      return;
    }

    try {
      const loadingToast = toast.loading(t.submitting);
      
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, captchaToken }),
      });
      
      const result = await res.json();
      toast.dismiss(loadingToast);
      
      if (res.ok) { 
        toast.success(t.successTitle, {
          description: t.successDesc
        });
        reset();
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else if (res.status === 429) {
        toast.error(t.errorRateLimit, {
          description: result.error || t.errorRateLimitDesc
        });
      } else {
        toast.error(t.errorGeneral, {
          description: result.error || t.errorGeneralDesc
        });
      }
    } catch (err) {
      toast.error(t.errorNetwork, {
        description: t.errorNetworkDesc
      });
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
            {t.nameLabel}
          </Label>
          <Input 
            placeholder={t.namePlaceholder}
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
            {t.emailLabel}
          </Label>
          <Input 
            type="email"
            placeholder={t.emailPlaceholder}
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
            {t.budgetLabel}
          </Label>
          <select 
            className="h-11 w-full rounded-lg border border-primary/20 glass px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer" 
            defaultValue="" 
            {...register("budget")}
          >
            <option value="" disabled>{t.budgetPlaceholder}</option>
            <option value="<1000">{t.budgetLow}</option>
            <option value="1000-3000">{t.budgetMed}</option>
            <option value="3000-6000">{t.budgetHigh}</option>
            <option value=">6000">{t.budgetVeryHigh}</option>
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
            {t.delayLabel}
          </Label>
          <select 
            className="h-11 w-full rounded-lg border border-primary/20 glass px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer" 
            defaultValue="" 
            {...register("delay")}
          >
            <option value="" disabled>{t.delayPlaceholder}</option>
            <option value="urgent">{t.delayUrgent}</option>
            <option value="2-3 semaines">{t.delay2to3}</option>
            <option value="1-2 mois">{t.delay1to2}</option>
            <option value="je ne sais pas">{t.delayDontKnow}</option>
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
          {t.messageLabel}
        </Label>
        <Textarea 
          placeholder={t.messagePlaceholder}
          className="min-h-[140px] glass border-primary/20 focus:border-primary transition-all resize-none"
          {...register("message")} 
        />
        <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
          <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">{t.adviceTitle}</span> {t.adviceText}
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

      {/* Submit Button & HCaptcha */}
      <div className="space-y-4 pt-2 animate-fade-in" style={{ animationDelay: '250ms' }}>
        <div className="flex justify-center md:justify-start">
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001"}
            onVerify={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken(null)}
            onError={() => setCaptchaToken(null)}
          />
        </div>

        <Button 
          type="submit"
          disabled={isSubmitting || !captchaToken}
          className="h-12 px-8 btn-gradient shadow-glow hover-lift font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t.submitting}
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {t.submitButton}
            </>
          )}
        </Button>
      </div>

      {/* Privacy Notice */}
      <div className="pt-4 border-t border-border/40 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <p className="text-xs text-muted-foreground leading-relaxed">
          <svg className="w-3.5 h-3.5 inline mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          {t.privacyNotice} <a href="/legal/privacy" className="text-primary hover:underline">{t.privacyLink}</a>.
        </p>
      </div>
    </form>
  );
}
