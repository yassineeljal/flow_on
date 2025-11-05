"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Lire la préférence au 1er rendu client
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("flowon-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefers;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("flowon-theme", next ? "dark" : "light");
  };

  if(!mounted) return null;
  return (
    <button onClick={toggle} className="btn btn-ghost" aria-label="Basculer thème">
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
