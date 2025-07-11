import React, { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type IHeaderProps = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  headerClassName?: ComponentProps<IHeaderProps["type"]>["className"];
};

type IHeaderStyles = {
  [key in IHeaderProps["type"]]: ComponentProps<
    IHeaderProps["type"]
  >["className"];
};

const Header = ({ type, text, headerClassName }: IHeaderProps) => {
  const HeaderComponent = type;

  const headerDefaultClassName =
    "text-shop-sectionHeading-text-heading font-bold text-blue-950";

  const className: IHeaderStyles = {
    h1: `${headerDefaultClassName} text-4xl lg:text-6xl lg:leading-tight`,
    h2: `${headerDefaultClassName} text-[36px] font-semibold`,
    h3: `${headerDefaultClassName} text-xl`,
    h4: `${headerDefaultClassName} text-lg`,
    h5: `${headerDefaultClassName} text-md`,
    h6: `${headerDefaultClassName} text-normal`,
  };

  return (
    <HeaderComponent
      className={`${twMerge(`${className[type]} ${headerClassName}`)}`}
    >
      {text}
    </HeaderComponent>
  );
};

type ISectionHeadingProps = {
  title: string;
  subtitle?: string;
  headerType: IHeaderProps["type"];
  badgeType?: "default" | "new";
  badgeText?: string;
  position?: "center" | "left" | "right";
  icon?: ReactNode;
  description?: string;
  className?: ComponentProps<"div">["className"];
  headerClassName?: ComponentProps<IHeaderProps["type"]>["className"];
  iconClassName?: ComponentProps<"span">["className"];
  actionComponent?: ReactNode;
};

const PageHeading = ({
  icon,
  className,
  headerClassName,
  iconClassName,
  title,
  description,
  subtitle,
  headerType = "h1",
  position = "center",
  actionComponent,
  badgeText,
  badgeType,
}: ISectionHeadingProps) => {
  const headingPosition = {
    left: "items-start justify-start mx-0 text-left",
    right: "items-start justify-start mx-0 text-right",
    center: "items-center justify-center text-center mx-auto",
  };

  return (
    <div
      className={twMerge(
        ` w-full flex flex-col gap-3 mb-16 max-w-5xl  ${headingPosition[position]} ${className}`
      )}
    >
      {badgeType === "new" && (
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-slate-100 rounded-full hover:bg-slate-200 transition ease-out"
          role="alert"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
            Nowość
          </span>{" "}
          <span className="text-sm font-medium">{badgeText}</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
          </svg>
        </a>
      )}

      <div
        className={twMerge(
          `flex flex-col items-center justify-start gap-3 ${
            position === "left" && "items-start"
          }`
        )}
      >
        {badgeType === "default" && (
          <span className="bg-slate-50 text-slate-600 border border-dashed border-slate-200 text-sm font-semibold me-2 px-3 py-1 rounded-xl ">
            {badgeText}
          </span>
        )}

        <Header
          type={headerType}
          text={title}
          headerClassName={headerClassName}
        />
      </div>

      {subtitle && (
        <text className=" text-md lg:text-md text-slate-500 font-medium">
          {subtitle}
        </text>
      )}

      {description && (
        <p className=" text-base lg:text-lg text-blue-950 font-medium">
          {description}
        </p>
      )}
      {actionComponent}
    </div>
  );
};

export default PageHeading;
