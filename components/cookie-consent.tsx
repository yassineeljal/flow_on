"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CookieConsent(){
  const KEY = "flowon-cookies";
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (!saved) {
      // Delay to ensure smooth animation on mount
      setTimeout(() => {
        setShow(true);
        setTimeout(() => setIsVisible(true), 50);
      }, 1000);
    }
  }, []);

  const save = (value: "all" | "necessary") => {
    localStorage.setItem(KEY, value);
    setIsVisible(false);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;
  
  return (
    <div className={`fixed inset-x-0 bottom-0 z-50 p-4 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="mx-auto max-w-6xl rounded-2xl glass-strong border border-primary/20 shadow-premium-lg backdrop-blur-xl p-6 md:p-8 animate-scale-in">
        {/* Header with Icon */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              🍪 Gestion des cookies
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nous utilisons des <span className="text-foreground font-semibold">cookies essentiels</span> pour le fonctionnement du site 
              et, avec votre accord, des <span className="text-foreground font-semibold">cookies de mesure d'audience</span> pour 
              améliorer votre expérience. Vous gardez le contrôle total.
            </p>
          </div>
        </div>

        {/* Cookie Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 p-4 rounded-xl bg-background/50">
          <div className="flex items-start gap-2">
            <div className="mt-0.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Cookies essentiels</p>
              <p className="text-xs text-muted-foreground">Nécessaires au fonctionnement</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="mt-0.5">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Cookies analytics</p>
              <p className="text-xs text-muted-foreground">Mesure d'audience (optionnels)</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button 
            variant="outline" 
            onClick={() => save("necessary")}
            className="flex-1 sm:flex-none hover:border-primary/50 transition-all"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Nécessaires seulement
          </Button>
          <Button 
            onClick={() => save("all")}
            className="flex-1 sm:flex-none btn-gradient shadow-glow hover-lift"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Accepter tout
          </Button>
          <Link 
            href="/legal/cookies"
            className="text-sm text-primary hover:underline self-center sm:ml-auto flex items-center gap-1 transition-colors"
          >
            En savoir plus
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
