import React, { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ICardListProps = {
  children: ReactNode;
  className?: ComponentProps<"div">["className"];
};

const CardList = ({ children, className }: ICardListProps) => {
  return (
    <div
      className={`${twMerge(
        `grid gap-6 grid-cols-auto-fill w-full ${className}`
      )}`}
    >
      {children}
    </div>
  );
};

export default CardList;
