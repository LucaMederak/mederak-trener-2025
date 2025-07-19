"use client";
import React, { ComponentProps } from "react";
import { Check, Info } from "lucide-react";

import { motion } from "framer-motion";

export type IAlertProps = {
  type: "error" | "warning" | "success";
  title: string;
};

const iconRender = (type: IAlertProps["type"]) => {
  if (type === "error" || type === "warning") {
    return <Info className="w-5 h-5" />;
  }

  return <Check className="w-5 h-5" />;
};

type IAlertTypeStyles = {
  [key in IAlertProps["type"]]: ComponentProps<"div">["className"];
};

const Alert = ({ type, title }: IAlertProps) => {
  const alertTypeStyles: IAlertTypeStyles = {
    error: "bg-red-50 border-red-100 text-red-600",
    warning: "bg-orange-50 border-orange-100 text-orange-600",
    success: "bg-green-50 border-green-100 text-green-600",
  };

  // [&>svg]:text-red-600

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex items-center justify-start fixed p-4 rounded-lg left-1/2 -translate-x-1/2 top-28 gap-4 z-20 border shadow-xl shadow-slate-200 ${alertTypeStyles[type]}`}
    >
      <span className="flex items-center justify-center">
        {iconRender(type)}
      </span>
      <p className=" text-normal text-lg font-medium"> {title}</p>
    </motion.div>
  );
};

export default Alert;
