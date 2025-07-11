"use client";
import React, { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";

type ICardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: ComponentProps<"div">["className"];
  headingWrapperClassName?: ComponentProps<"div">["className"];
};

const DefaultCard = ({
  title,
  description,
  icon,
  className,
  headingWrapperClassName,
}: ICardProps) => {
  return (
    <motion.div
      variants={fadeItem}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={twMerge(
        `flex items-start justify-start flex-col gap-4 p-7 bg-rose-50 border border-rose-100 bg-opacity-80 rounded-xl ${className}`
      )}
    >
      <div
        className={twMerge(
          `flex items-start justify-start flex-col gap-4 ${headingWrapperClassName}`
        )}
      >
        {icon && (
          <span className="flex items-center justify-center p-2 rounded-lg  bg-white [&>svg]:w-6 [&>svg]:h-6 text-rose-800">
            {icon}
          </span>
        )}

        <h3 className="text-lg font-semibold text-blue-950 ">{title}</h3>
      </div>

      {description && (
        <p className=" font-normal text-blue-950">{description}</p>
      )}
    </motion.div>
  );
};

export default DefaultCard;
