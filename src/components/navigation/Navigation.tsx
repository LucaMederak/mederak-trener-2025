"use client";

import React, { ComponentProps, ReactNode, useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Info, Menu } from "lucide-react";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { AnimatePresence } from "framer-motion";
import Portal from "../portal/Portal";
import { usePathname } from "next/navigation";

type INavigationLink = {
  title: string;
  href: string;
  isAnotherWebsite?: boolean;
};

type INavigationProps = {
  className?: ComponentProps<"nav">["className"];
  logoURL?: StaticImageData | string;
  logoWhiteURL?: StaticImageData | string; // 👈 nowe
  logoLink: string;
  links?: INavigationLink[];
  options?: ReactNode;
  navBannerText?: string;
};

export const renderNavLink = (
  pathname: string,
  linkHref: string,
  linkTitle: string,
  onClick: () => void,
  isScrolled: boolean,
  isAnotherWebsite?: boolean
) => {
  const linkClass = twMerge(
    "font-semibold text-lg lg:text-[0.82rem] transition-colors duration-300 cursor-pointer",
    isScrolled
      ? "text-nav-link-default hover:text-nav-link-hover"
      : "text-white/85 hover:text-white"
  );

  if (isAnotherWebsite) {
    return (
      <NextLink
        onClick={onClick}
        href={linkHref}
        target="_blank"
        className={linkClass}
      >
        {linkTitle}
      </NextLink>
    );
  }

  if (pathname === "/") {
    return (
      <Link
        className={linkClass}
        to={linkHref}
        smooth
        spy
        offset={-100}
        duration={400}
        onClick={onClick}
      >
        {linkTitle}
      </Link>
    );
  }

  return (
    <NextLink onClick={onClick} href={`/#${linkHref}`} className={linkClass}>
      {linkTitle}
    </NextLink>
  );
};

const Navigation = ({
  className,
  logoURL,
  logoLink,
  logoWhiteURL,
  links,
  options,
  navBannerText,
}: INavigationProps) => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeNavOpen = () => {
    if (navOpen) setNavOpen(false);
  };

  return (
    <nav
      className={twMerge(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 px-4 pt-6 pb-4",
        className
      )}
    >
      <div
        className={twMerge(
          "flex items-center justify-between w-full max-w-5xl mx-auto rounded-full border px-3 py-2 transition-all duration-300",
          isScrolled
            ? "border-primary-100 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-white/10 bg-white/5 shadow-xl shadow-black/10 backdrop-blur-md"
        )}
      >
        <NextLink href={logoLink} className="w-20 lg:w-24">
          {logoURL ? (
            <Image
              width={150}
              height={150}
              alt="Logo"
              src={isScrolled ? logoURL! : logoWhiteURL ?? logoURL!}
              className="w-full h-auto object-contain"
            />
          ) : (
            <span
              className={twMerge(
                "text-3xl font-bold transition-colors",
                isScrolled ? "text-nav-link-default" : "text-white"
              )}
            >
              LOGO
            </span>
          )}
        </NextLink>

        {links && (
          <ul
            className={twMerge(
              "hidden lg:flex lg:items-center lg:gap-1 rounded-full border px-2 py-1.5 transition-colors",
              isScrolled
                ? "border-primary-100 bg-primary-50"
                : "border-white/10 bg-black/10"
            )}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className={twMerge(
                  "rounded-full px-3 py-1.5 transition-colors",
                  isScrolled ? "hover:bg-white" : "hover:bg-white/10"
                )}
              >
                {renderNavLink(
                  pathname,
                  link.href,
                  link.title,
                  changeNavOpen,
                  isScrolled,
                  link.isAnotherWebsite
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          {options}
        </div>

        <button
          onClick={() => setNavOpen(!navOpen)}
          className={twMerge(
            "lg:hidden rounded-xl border p-2 transition-colors",
            isScrolled
              ? "border-primary-100 bg-primary-50"
              : "border-white/10 bg-white/5"
          )}
        >
          <Menu
            className={twMerge(
              "w-6 h-6 transition-colors duration-300",
              isScrolled ? "text-nav-link-default" : "text-white"
            )}
          />
        </button>
      </div>

      {navBannerText && (
        <div className="flex w-full py-2.5 bg-nav-banner-background border-y border-nav-banner-border">
          <div className="flex items-center justify-center max-w-screen-xl mx-auto gap-2">
            <Info className="w-4 h-4 text-nav-banner-icon" />
            <p className="text-sm text-nav-banner-text font-semibold">
              {navBannerText}
            </p>
          </div>
        </div>
      )}

      <AnimatePresence>
        {navOpen && (
          <Portal
            portalContainerClassName="flex justify-end"
            className="bg-white flex flex-col gap-4 w-80 min-h-screen"
            onClose={() => setNavOpen(false)}
          >
            <div className="flex items-center justify-between w-full p-6">
              <NextLink href={logoLink}>
                <Image
                  width={150}
                  height={150}
                  alt="Logo"
                  src={logoURL as string}
                  className="object-contain"
                />
              </NextLink>

              <button onClick={() => setNavOpen(false)}>
                <Menu className="text-nav-link-default w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col px-8">
              {links && (
                <ul className="flex flex-col gap-8 py-8">
                  {links.map((link, index) => (
                    <li key={index}>
                      {renderNavLink(
                        pathname,
                        link.href,
                        link.title,
                        changeNavOpen,
                        true
                      )}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center gap-3">
                {options}
              </div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
