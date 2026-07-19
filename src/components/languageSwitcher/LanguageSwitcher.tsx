"use client";

import { useLanguage, Language } from "@/context/Language.context";
import { twMerge } from "tailwind-merge";

const languages: Language[] = ["pl", "en"];

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
  className?: string;
};

const LanguageSwitcher = ({
  variant = "light",
  className,
}: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();
  const isDark = variant === "dark";

  return (
    <div
      className={twMerge(
        "flex w-full items-center justify-center rounded-full border p-1 lg:w-auto",
        isDark
          ? "border-white/10 bg-black/35"
          : "border-primary-100 bg-primary-50",
        className
      )}
    >
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={twMerge(
            "rounded-full px-3 py-1 text-xs font-bold uppercase transition",
            language === item && isDark && "bg-white text-primary-950",
            language === item && !isDark && "bg-white text-primary-950",
            language !== item &&
              isDark &&
              "text-white/55 hover:text-white",
            language !== item &&
              !isDark &&
              "text-primary-900/60 hover:text-primary-950"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
