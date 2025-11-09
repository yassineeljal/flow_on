"use client";

import { motion } from "framer-motion";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

interface HomeClientProps {
  content: any;
  locale: string;
}

export default function HomeClient({ content, locale }: HomeClientProps) {
  return (
    <>
      {/* Hero Section with Animations */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-success rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <FadeIn delay={0.1}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              {content.hero.badge}
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {content.hero.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <HoverScale>
                <Link
                  href="/pricing"
                  className={buttonVariants({ size: "lg" }) + " btn-gradient shadow-glow"}
                >
                  {content.hero.ctaPricing}
                </Link>
              </HoverScale>
              <HoverScale>
                <Link
                  href="/contact"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  {content.hero.ctaQuote}
                </Link>
              </HoverScale>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
              {content.hero.trustBadges.map((badge: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pillars Section with Stagger Animation */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.pillars.map((pillar: any, i: number) => (
              <StaggerItem key={i}>
                <HoverScale scale={1.03}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className={pillar.color}>
                        {pillar.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{pillar.desc}</p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((stat: any, i: number) => (
              <StaggerItem key={i}>
                <ScaleIn delay={i * 0.1}>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </ScaleIn>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.servicesSection.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.servicesSection.subtitle}
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service: any, i: number) => (
              <StaggerItem key={i}>
                <HoverScale scale={1.02}>
                  <Card
                    className={`h-full hover:shadow-xl transition-shadow ${
                      service.featured ? "border-primary border-2" : ""
                    }`}
                  >
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg bg-linear-to-r ${service.gradient} mb-4`}
                      />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={service.href}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        En savoir plus →
                      </Link>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <Card className="bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {content.cta.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {content.cta.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <HoverScale>
                    <Link
                      href="/contact"
                      className={buttonVariants({ size: "lg" }) + " btn-gradient shadow-glow"}
                    >
                      {content.cta.ctaContact}
                    </Link>
                  </HoverScale>
                  <HoverScale>
                    <Link
                      href="/pricing"
                      className={buttonVariants({ size: "lg", variant: "outline" })}
                    >
                      {content.cta.ctaPricing}
                    </Link>
                  </HoverScale>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
