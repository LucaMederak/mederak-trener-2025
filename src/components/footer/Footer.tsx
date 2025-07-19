import Link from "next/link";
import React, { ReactNode } from "react";
import Container from "../container/Container";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

type IFooterLink = {
  name: string;
  href: string;
};

type IFooterSocialMedia = {
  icon: ReactNode;
  href: string;
};

type IFooterProps = {
  footerText: string;
  socialMedia?: IFooterSocialMedia[];
  links?: IFooterLink[];
};

const Footer = ({ footerText, socialMedia, links }: IFooterProps) => {
  return (
    <div className="w-full px-4 py-5 bg-slate-50 border-t border-slate-200">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-blue-950 text-base font-medium">{footerText}</p>
        {socialMedia && (
          <ul className="flex items-center justify-start gap-4">
            {socialMedia.length > 0 &&
              socialMedia?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-blue-950 text-base font-normal transition ease-out hover:text-primary-500"
                >
                  {item.icon}
                </Link>
              ))}
          </ul>
        )}
        {/* <ThemeSwitcher /> */}
        {links && (
          <ul className="flex flex-col md:flex-row md:items-center md:justify-start gap-1.5 md:gap-4">
            {links.length > 0 &&
              links?.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-950 text-base font-semibold transition ease-out hover:text-primary-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </Container>
    </div>
  );
};

export default Footer;
