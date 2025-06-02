"use client";
import Link from "next/link";
import { ImSpinner2 } from "react-icons/im";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";

const iconMap = {
  "CERRAR SESION": IoLogOutOutline,
  "AGREGAR PROPIEDAD": IoMdAdd,
  "EDITAR PROPIEDAD": LuPencil,
  "BUSCAR PROPIEDAD": IoSearchOutline,
  "REGISTRAR NUEVA PROPIEDAD": FiPlusCircle,
  "MIS PROPIEDADES": FaHouse,
  PERFIL: FaUserAlt,
  UNIRSE: FaUserAlt,
  "INICIAR SESION": FaUserAlt,
  GUARDADOS: FaHeart,
};

const UniversalButton = ({
  text,
  iconPosition = "left",
  className = "",
  color = "primary",
  size = "base",
  rounded = "rounded-2xl",
  full = false,
  onClick,
  href,
  type = "button",
  disabled = false,
  loading = false,
  responsive = "",
  iconClassName = "",
  iconBackgroundStyle = "",
}) => {
  const Icon = iconMap[text];

  const baseColors = {
    primary:
      "bg-[#1290CB] hover:bg-[#16b4ff] text-white focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2",
    secondary:
      "bg-white text-[#1290CB] border border-[#1290CB] hover:bg-[#f0f8ff]  focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2",
    ghost:
      "bg-transparent text-[#1290CB] hover:text-[#16b4ff] focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2",
  };

  const sizes = {
    sm: "text-sm py-1 px-2",
    base: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  };

  const flexDirection =
    iconPosition === "right" ? "flex-row-reverse" : "flex-row";

  const content = (
    <div
      className={`flex items-center gap-2 justify-center ${flexDirection} transition-all duration-200`}
    >
      {loading ? (
        <ImSpinner2 className="animate-spin" size={20} />
      ) : (
        Icon && (
          <div
            className={`${iconBackgroundStyle}  transition-colors duration-200`}
          >
            <Icon
              size={20}
              className={`${iconClassName} ${
                color === "primary"
                  ? "group-hover:text-white "
                  : "group-hover:text-[#16b4ff] "
              }   transition-colors duration-200`}
            />
          </div>
        )
      )}
      <span className="group-hover:scale-105 transition-transform duration-200">
        {text}
      </span>
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
      transition-all
      duration-200
      transform
      group
      hover:scale-105
      focus:outline-none
      ${className}
    `.trim(),
    onClick,
    disabled,
  };

  return href ? (
    <Link href={href} className="group">
      <span {...commonProps}>{content}</span>
    </Link>
  ) : (
    <button type={type} {...commonProps}>
      {content}
    </button>
  );
};

export default UniversalButton;
