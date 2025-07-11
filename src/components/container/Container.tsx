import React, { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type IContainerProps = {
  className?: ComponentProps<"div">["className"];
  children?: ReactNode;
};

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div
      className={`${twMerge(
        `max-w-screen-xl mx-auto px-4 xl:px-0 ${className}`
      )}`}
    >
      {children}
    </div>
  );
};

export default Container;
