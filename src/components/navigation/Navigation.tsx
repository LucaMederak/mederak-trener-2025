"use client";
import React, { ComponentProps, ReactNode, useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Image as ImageIcon, Info, Menu } from "lucide-react";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { AnimatePresence } from "framer-motion";
import Portal from "../portal/Portal";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type INavigationLink = {
  title: string;
  href: string;
  isAnotherWebsite?: boolean;
};

type INavigationProps = {
  className?: ComponentProps<"nav">["className"];
  logoURL?: StaticImageData | string;
  logoLink: string;
  children?: ReactNode;
  links?: INavigationLink[];
  options?: ReactNode;
  navBannerText?: string;
};

export const renderNavLink = (
  pathname: string,
  linkHref: string,
  linkTitle: string,
  onClick: () => void,
  isAnotherWebsite?: boolean
) => {
  if (isAnotherWebsite) {
    return (
      <NextLink
        onClick={onClick}
        href={`${linkHref}`}
        target="_blank"
        className="text-nav-link-default font-medium text-xl lg:text-lg transition ease-out hover:text-nav-link-hover cursor-pointer"
      >
        {linkTitle}
      </NextLink>
    );
  }
  if (pathname === "/")
    return (
      <Link
        className="text-nav-link-default font-medium text-xl lg:text-lg transition ease-out hover:text-nav-link-hover cursor-pointer"
        to={linkHref}
        smooth={true}
        spy={true}
        offset={-100}
        duration={400}
        onClick={onClick}
      >
        {linkTitle}
      </Link>
    );

  return (
    <NextLink
      onClick={onClick}
      href={`/#${linkHref}`}
      className="text-nav-link-default font-medium text-xl lg:text-lg transition ease-out hover:text-nav-link-hover cursor-pointer"
    >
      {linkTitle}
    </NextLink>
  );
};

const Navigation = ({
  className,
  logoURL,
  logoLink,
  links,
  options,
  navBannerText,
}: INavigationProps) => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const changeNavOpen = () => {
    if (navOpen) {
      setNavOpen(!navOpen);
    }
  };

  return (
    <nav
      className={`${twMerge(
        `sticky top-0 left-0 w-full z-40 bg-nav-background ${className}`
      )}`}
    >
      <div className="flex items-center justify-between w-full px-4 xl:px-0 py-4 max-w-screen-xl mx-auto">
        <NextLink href={logoLink} className="w-28">
          {logoURL ? (
            <Image
              width={150}
              height={150}
              alt="Logo"
              src={logoURL}
              className="w-full h-auto aspect-auto object-contain"

              // className="w-10 h-10"
            />
          ) : (
            <span className=" text-3xl text-slate-300 font-bold">LOGO</span>
          )}
        </NextLink>

        {links && (
          <ul className="hidden lg:flex lg:items-center lg:justify-start lg:gap-8">
            {links.map((link, linkIndex) => (
              <li key={linkIndex + 1}>
                {renderNavLink(
                  pathname,
                  link.href,
                  link.title,
                  changeNavOpen,
                  link?.isAnotherWebsite
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="hidden lg:block">{options}</div>
        <button onClick={() => setNavOpen(!navOpen)} className="lg:hidden">
          <Menu className="text-blue-950 w-7 h-7" />
        </button>
      </div>

      {/* nav banner */}
      {navBannerText && (
        <div className="flex w-full py-2.5 bg-nav-banner-background border-y border-nav-banner-border">
          <div className="flex items-center justify-center  max-w-screen-xl mx-auto gap-2">
            <Info className="w-4 h-4 text-nav-banner-icon" />
            <p className="text-sm text-nav-banner-text font-semibold">
              {navBannerText}
            </p>
          </div>
        </div>
      )}

      {/* create mobile portal */}
      <AnimatePresence>
        {navOpen && (
          <Portal
            portalContainerClassName="flex justify-end"
            className=" bg-nav-background flex flex-col gap-4 w-80 min-h-screen"
            onClose={() => setNavOpen(false)}
          >
            <div className="flex items-center justify-between w-full p-6 bg-nav-background dark:bg-slate-800">
              <NextLink href={logoLink}>
                {logoURL ? (
                  <Image
                    width={150}
                    height={150}
                    alt="Logo"
                    src={logoURL}
                    className="w-full h-auto object-contain"
                    // className="w-10 h-10"
                  />
                ) : (
                  <span className=" text-3xl text-slate-300 font-bold">
                    LOGO
                  </span>
                )}
              </NextLink>
              <button onClick={() => setNavOpen(!navOpen)}>
                <Menu className="text-blue-950 w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col px-8 w-full ">
              {links && (
                <ul className="flex items-start justify-start gap-8 flex-col py-8">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex + 1}>
                      {renderNavLink(
                        pathname,
                        link.href,
                        link.title,
                        changeNavOpen
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {options}
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
