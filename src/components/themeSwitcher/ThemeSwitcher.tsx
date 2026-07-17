"use client";
import { CheckIcon, PaletteIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const themes = [
  {
    name: "blue",
    label: "Niebieski",
    swatch: "bg-blue-500",
    active: "bg-blue-50 border-blue-200 text-blue-700",
    hover: "hover:bg-blue-50",
  },
  {
    name: "beige",
    label: "Firmowy",
    swatch: "bg-[#F5A119]",
    active: "bg-[#F9F7F0] border-[#F5A119] text-[#17110B]",
    hover: "hover:bg-[#F9F7F0]",
  },
] as const;

type ThemeName = (typeof themes)[number]["name"];

const isThemeName = (value: string | null): value is ThemeName =>
  themes.some((theme) => theme.name === value);

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("blue");
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("mederak-theme");
    const htmlTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = isThemeName(savedTheme)
      ? savedTheme
      : isThemeName(htmlTheme)
      ? htmlTheme
      : "blue";

    document.documentElement.setAttribute("data-theme", nextTheme);
    setCurrentTheme(nextTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleThemeChange = (theme: ThemeName) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mederak-theme", theme);
    setCurrentTheme(theme);
    setOpen(false);
  };

  return (
    <div ref={switcherRef} className="relative">
      <button
        type="button"
        aria-label="Zmień motyw"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-nav-link-default transition hover:bg-slate-50"
      >
        <PaletteIcon className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 rounded-lg border border-slate-100 bg-white p-1.5 shadow-lg">
          {themes.map((theme) => (
            <button
              key={theme.name}
              type="button"
              className={cn(
                "flex w-full items-center justify-between gap-2 rounded-md border border-transparent px-3 py-2 text-sm font-medium text-blue-950 transition",
                theme.hover,
                currentTheme === theme.name && theme.active
              )}
              onClick={() => handleThemeChange(theme.name)}
            >
              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "h-4 w-4 rounded-full border border-black/10 shadow-sm",
                    theme.swatch
                  )}
                />
                {theme.label}
              </span>
              {currentTheme === theme.name && <CheckIcon className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
