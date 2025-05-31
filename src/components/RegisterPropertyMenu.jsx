"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import UniversalButton from "@/components/UniversalButton";

const RegisterPropertyMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (path) => {
    router.push(path);
    setShowMenu(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <UniversalButton
        text="REGISTRAR NUEVA PROPIEDAD"
        iconPosition="left"
        color="primary"
        iconClassName="text-[#1290CB]"
        iconBackgroundStyle="bg-white px-1 py-1 rounded-md"
        onClick={() => setShowMenu(!showMenu)}
      />

      {showMenu && (
        <div className="absolute top-14 left-0 bg-white border border-gray-300 rounded-lg shadow-md w-48 z-50">
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick("/rent")}
          >
            Rentar
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => handleOptionClick("/sell")}
          >
            Vender
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterPropertyMenu;
