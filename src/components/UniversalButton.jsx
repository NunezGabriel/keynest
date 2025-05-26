"use client";

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

export default UniversalButton;
