"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('notFound');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-background via-background to-primary/5">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-[120px] md:text-[180px] font-bold bg-linear-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent leading-none">
            404
          </h1>
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {t('description')} 🚀
          </p>
        </motion.div>

        {/* Floating Icons Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: "🏠", delay: 0.5 },
            { icon: "🔍", delay: 0.6 },
            { icon: "💻", delay: 0.7 },
            { icon: "✨", delay: 0.8 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                delay: item.delay,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl"
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {t('backHome')}
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {t('contact')}
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-border/40"
        >
          <p className="text-sm text-muted-foreground mb-4">
            {t('popularPages')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/services", label: t('services') },
              { href: "/pricing", label: t('pricing') },
              { href: "/about", label: t('about') },
              { href: "/faq", label: t('faq') },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/80 transition-colors inline-block"
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
