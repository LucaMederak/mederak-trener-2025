"use client";
import React, { ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { sizeStyles, variantStyles } from "@/components/button/Button";
import { usePathname } from "next/navigation";

//assets
import Logo from "@/assets/logo.svg";
// import Logo from "@/assets/hero/łm.svg";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { title: "Współpraca", href: "cooperation" },
  { title: "O mnie", href: "about" },
  {
    title: "Blog",
    href: "blog",
  },
  {
    title: "Kontakt",
    href: "contact",
    // isAnotherWebsite: true,
  },
];

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <Navigation
        logoURL={Logo}
        logoLink="/"
        links={navLinks}
        className="border-b border-slate-200/60"
        options={
          <>
            {pathname === "/" ? (
              <Link
                to={"contact"}
                smooth={true}
                spy={true}
                duration={400}
                className={twMerge(
                  ` ${variantStyles["primary"]} ${sizeStyles["xl"]} text-white flex items-center justify-center w-full lg:w-auto cursor-pointer transition ease-out  rounded-xl relative overflow-hidden`
                )}
              >
                <span className="absolute top-0 left-[-200%] w-[300%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rotate-22 animate-slide"></span>
                Umów konsultację
              </Link>
            ) : (
              <NextLink
                href={"/#contact"}
                className={twMerge(
                  `${variantStyles["primary"]} ${sizeStyles["xl"]} flex items-center justify-center w-full lg:w-auto cursor-pointer transition ease-out`
                )}
              >
                Umów konsultację
              </NextLink>
            )}
          </>
        }
        // navBannerText="Webinar już w sprzedaży! Zamów teraz"
      />
      {children}
      <Footer
        footerText="Copyright © 2025 Łukasz Męderak"
        links={[
          // { name: "Regulamin", href: "/regulations" },
          { name: "Polityka prywatności", href: "/privacy-policy" },
        ]}
      />
    </>
  );
};

export default HomeLayout;
