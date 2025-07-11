"use client";
import { useAlert } from "@/context/Alert.context";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Alert from "./Alert";

const AlertDisplay = () => {
  const { alert } = useAlert();

  return (
    <AnimatePresence>
      {alert.display && <Alert type={alert.type} title={alert.message} />}
    </AnimatePresence>
  );
};

export default AlertDisplay;
