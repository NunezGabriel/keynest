"use client";
import React from "react";
import Link from "next/link";
import { ImSpinner2 } from "react-icons/im";

const UniversalButton = ({
  text,
  icon: Icon,
  iconPosition = "left",
  className = "",
  color = "primary",
  size = "base",
  rounded = "rounded-2xl", // "rounded-lg" (8px) o "rounded-2xl" (16px)
  full = false,
  onClick,
  href,
  type = "button",
  disabled = false,
  loading = false,
  responsive = "", // Ejemplo: "hidden md:flex"
}) => {
  const baseColors = {
    primary: "bg-[#1290CB] hover:bg-[#16b4ff] text-white",
    secondary:
      "bg-white text-[#1290CB] border border-[#1290CB] hover:border-[#16b4ff] hover:text-[#16b4ff]",
    ghost: "bg-transparent text-[#1290CB]",
  };

  const sizes = {
    sm: "text-sm py-1 px-2",
    base: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  };

  const flexDirection =
    iconPosition === "right" ? "flex-row-reverse" : "flex-row";

  const content = (
    <div className={`flex items-center gap-2 justify-center ${flexDirection}`}>
      {loading ? (
        <ImSpinner2 className="animate-spin" size={20} />
      ) : (
        Icon && <Icon size={20} />
      )}
      <span>{text}</span>
    </div>
  );

  const commonProps = {
    className: `
      inline-flex
      items-center
      justify-center
      gap-2
      ${baseColors[color]}
      ${sizes[size]}
      ${rounded}
      ${full ? "w-full" : ""}
      ${responsive}
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${className}
    `.trim(),
    onClick,
    disabled,
  };

  return href ? (
    <Link href={href}>
      <span {...commonProps}>{content}</span>
    </Link>
  ) : (
    <button type={type} {...commonProps}>
      {content}
    </button>
  );
};

export default UniversalButton;




















/* "use client";
import React from "react";

const UniversalButton = ({
  text,
  icon: Icon,
  iconPosition = "left",
  className = "",
  color = "primary",
  size = "base",
  rounded = "rounded-2xl",
  full = false,
}) => {
  const baseColors = {
    primary: "bg-[#1290CB] hover:bg-[#16b4ff] text-white",
    secondary: "bg-white text-[#1290CB] border border-[#1290CB] hover:border-[#16b4ff] hover:text-[#16b4ff]",
    ghost: "bg-transparent text-[#1290CB]",
  };

  const sizes = {
    sm: "text-sm py-1 px-2",
    base: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  };

  const flexDirection = iconPosition === "right" ? "flex-row-reverse" : "flex-row";

  return (
    <button
      className={`flex items-center gap-2 justify-center ${baseColors[color]} ${sizes[size]} ${rounded} ${flexDirection} ${full ? "w-full" : ""} ${className}`}
    >
      {Icon && <Icon size={20} />}
      <span>{text}</span>
    </button>
  );
};

export default UniversalButton; */
