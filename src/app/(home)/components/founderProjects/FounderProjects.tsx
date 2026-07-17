import Container from "@/components/container/Container";
import FitlyLogo from "@/assets/brands/fitly-logo-full.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ZonvioIcon from "@/assets/brands/zonvio-logo-icon-black.svg";
import { ArrowUpRight, LinkIcon } from "lucide-react";

const projects = [
  {
    name: "Zonvio",
    href: "https://zonv.io",
    domain: "zonv.io",
    logo: null,
    icon: ZonvioIcon,
    iconOnly: true,
    description:
      "Strefa cyfrowej sprzedaży dla biznesów online, twórców i marek eksperckich.",
  },
  {
    name: "Fitly by Zonvio",
    href: "https://fitly.zonv.io",
    domain: "fitly.zonv.io",
    logo: FitlyLogo,
    icon: null,
    iconOnly: false,
    description:
      "Platforma dla trenerów, dietetyków i specjalistów pracujących z klientami online.",
  },
];

const FounderProjects = () => {
  return (
    <section className="w-full bg-primary-50 py-8 md:py-10">
      <Container>
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-3 text-center">
          <span className="rounded-xl border border-dashed border-primary-200 bg-white px-3 py-1 text-sm font-semibold text-primary-900/70">
            Projekty
          </span>
          <h2 className="text-3xl font-semibold text-primary-900 md:text-4xl">
            Co-founder Zonvio i Fitly by Zonvio
          </h2>
          <p className="text-base font-medium leading-relaxed text-primary-900/65">
            Poza pracą trenerską współtworzę produkty cyfrowe dla branży
            fitness, dietetyki i biznesów eksperckich.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-44 flex-col justify-between rounded-2xl border border-primary-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 items-center gap-3">
                  {project.icon && (
                    <Image
                      src={project.icon}
                      alt={`${project.name} icon`}
                      className={
                        project.iconOnly
                          ? "h-10 w-10 object-contain"
                          : "h-8 w-8 object-contain"
                      }
                    />
                  )}
                  {project.logo && (
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="max-h-9 w-auto object-contain"
                    />
                  )}
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-100 bg-primary-50 text-primary-900 transition group-hover:bg-primary-500 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-primary-900">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-1.5 text-sm font-semibold text-primary-900/75">
                  <LinkIcon className="h-3.5 w-3.5" />
                  {project.domain}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FounderProjects;
