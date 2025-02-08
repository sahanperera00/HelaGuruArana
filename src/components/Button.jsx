import React from "react";
import { cn } from "../utils/classNames";

export default function Button({
  variant = "primary",
  text,
  onClick,
  className = "",
  disabled = false,
}) {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-[#374836] text-white hover:bg-[#71946f]",
    secondary: "bg-white text-black hover:bg-[#374836] hover:text-white",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
    transparent: "bg-transparent text-black hover:bg-gray-100",
    outlined: "border border-gray-600 text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
