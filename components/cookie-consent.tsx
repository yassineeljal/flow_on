"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent(){
  const KEY = "flowon-cookies";
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (!saved) setShow(true);
  }, []);

  const save = (value: "all" | "necessary") => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-6xl rounded-lg border bg-card/80 backdrop-blur text-card-foreground shadow-sm p-4 flex flex-col md:flex-row items-start md:items-center gap-3">
        <p className="text-sm text-muted-foreground">
          Nous utilisons des cookies nécessaires et, avec votre accord, des cookies de mesure d’audience.
          Vous pouvez choisir “Nécessaires seulement”.
        </p>
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" onClick={() => save("necessary")}>Nécessaires seulement</Button>
          <Button onClick={() => save("all")}>Accepter tout</Button>
        </div>
      </div>
    </div>
  );
}
