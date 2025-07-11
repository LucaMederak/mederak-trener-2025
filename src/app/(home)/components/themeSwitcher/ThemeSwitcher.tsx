"use client";
import Container from "@/components/container/Container";
import React from "react";

const ThemeSwitcher = () => {
  const switchTheme = (
    newTheme: "blue" | "default-pink" | "salmon-pink" | "default-pink-red"
  ) => {
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <section className="w-full py-4">
      <Container className="flex items-center justify-center space-x-3">
        <button
          onClick={() => switchTheme("blue")}
          className="w-6 h-6 rounded-full bg-blue-600 transition hover:opacity-70"
        ></button>
        <button
          onClick={() => switchTheme("default-pink")}
          className="w-6 h-6 rounded-full bg-defaultPink-500 transition hover:opacity-70"
        ></button>
        <button
          onClick={() => switchTheme("salmon-pink")}
          className="w-6 h-6 rounded-full bg-salmonPink-500 transition hover:opacity-70"
        ></button>
        <button
          onClick={() => switchTheme("default-pink-red")}
          className="w-6 h-6 rounded-full bg-defaultRed-500 transition hover:opacity-70"
        ></button>
      </Container>
    </section>
  );
};

export default ThemeSwitcher;
