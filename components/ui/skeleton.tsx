import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

// Skeleton pour les cartes
function CardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <Skeleton className="h-12 w-12 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

// Skeleton pour le formulaire de contact
function ContactFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
      <Skeleton className="h-12 w-48 rounded-lg" />
    </div>
  );
}

// Skeleton pour le pricing
function PricingCardSkeleton() {
  return (
    <div className="rounded-2xl border bg-card p-8 space-y-6">
      <div className="space-y-3">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-12 w-40" />
      </div>
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 flex-1" />
          </div>
        ))}
      </div>
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  );
}

// Skeleton pour les services
function ServiceCardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <Skeleton className="h-32 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <Skeleton className="h-10 w-32 rounded-lg" />
    </div>
  );
}

// Skeleton pour le hero section
function HeroSkeleton() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Skeleton className="h-8 w-64 mx-auto rounded-full" />
        <div className="space-y-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-5/6 mx-auto" />
        </div>
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-48 rounded-lg" />
          <Skeleton className="h-12 w-48 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// Skeleton pour la page complète
function PageSkeleton() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <div className="container mx-auto px-4 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
}

export {
  Skeleton,
  CardSkeleton,
  ContactFormSkeleton,
  PricingCardSkeleton,
  ServiceCardSkeleton,
  HeroSkeleton,
  PageSkeleton,
};
