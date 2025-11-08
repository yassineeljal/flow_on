"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

type Mode = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("flowon-theme");
    if (saved === "light" || saved === "dark" || saved === "system") setMode(saved);
  }, []);

  const apply = (next: Mode) => {
    const root = document.documentElement;
    root.classList.remove("dark", "theme-system");
    if (next === "dark") root.classList.add("dark");
    if (next === "system") root.classList.add("theme-system");
    localStorage.setItem("flowon-theme", next);
    setMode(next);
  };

  const cycle = () => {
    const order: Mode[] = ["light", "dark", "system"];
    const idx = order.indexOf(mode);
    apply(order[(idx + 1) % order.length]);
  };

  if (!mounted) return null;
  const icon = mode === "light" ? <Sun className="h-5 w-5" /> : mode === "dark" ? <Moon className="h-5 w-5" /> : <Monitor className="h-5 w-5" />;
  const title = mode === "light" ? "Thème clair (cliquer pour sombre)" : mode === "dark" ? "Thème sombre (cliquer pour système)" : "Thème système (cliquer pour clair)";
  return (
    <Button variant="ghost" size="icon" aria-label="Changer le thème (clair/sombre/système)" onClick={cycle} className="rounded-full" title={title}>
      {icon}
    </Button>
  );
}
