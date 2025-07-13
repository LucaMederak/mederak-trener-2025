"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const themes = [
  { name: "rose", color: "bg-rose-500" },
  { name: "lime", color: "bg-lime-500" },
  { name: "yellow", color: "bg-yellow-400" },
  { name: "blue", color: "bg-blue-500" },
  { name: "indigo", color: "bg-indigo-500" },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    const htmlTheme =
      document.documentElement.getAttribute("data-theme") || "blue";
    setCurrentTheme(htmlTheme);
  }, []);

  const handleThemeChange = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="flex gap-2 p-2 items-center">
      {themes.map(({ name, color }) => (
        <button
          key={name}
          onClick={() => handleThemeChange(name)}
          className={cn(
            "w-6 h-6 rounded-full border-2 transition-all duration-200",
            color,
            currentTheme === name
              ? "ring-2 ring-offset-2 ring-black dark:ring-white"
              : "opacity-80 hover:opacity-100"
          )}
          aria-label={`Switch to ${name} theme`}
        />
      ))}
    </div>
  );
}
