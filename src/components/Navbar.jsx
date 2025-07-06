"use client";

import Link from "next/link";
import { PiHouseFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import UniversalButton from "./buttons/UniversalButton";
import { useAuth } from "@/context/AuthContext";

export default function Navbar({ type }) {
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const renderButtons = () => (
    <>
      {["landlordLog", "seekerLog", "noLogged"].includes(type) && (
        <UniversalButton
          text={"BUSCAR PROPIEDAD"}
          color="ghost"
          iconClassName="BUSCAR PROPIEDAD"
          iconBackgroundStyle="text-black"
          className="text-black"
          href={"/main-board"}
        />
      )}

      {type === "landlordLog" && (
        <>
          <UniversalButton
            text={"MIS PROPIEDADES"}
            color="primary"
            iconClassName={"MIS PROPIEDADES"}
            href={"/my-properties"}
          />
          <UniversalButton
            text={"PERFIL"}
            color="primary"
            iconClassName={"PERFIL"}
            href={"/profile"}
          />
          <UniversalButton
            text={"CERRAR SESION"}
            color="secondary"
            iconClassName="CERRAR SESION"
            onClick={logout}
          />
        </>
      )}

      {type === "seekerLog" && (
        <>
          <UniversalButton
            text={"GUARDADOS"}
            color="primary"
            iconClassName={"GUARDADOS"}
            href={"/save-properties"}
          />
          <UniversalButton
            text={"PERFIL"}
            color="primary"
            iconClassName={"PERFIL"}
            href={"/profile"}
          />
          <UniversalButton
            text={"CERRAR SESION"}
            color="secondary"
            iconClassName="CERRAR SESION"
            onClick={logout}
          />
        </>
      )}

      {type === "noLogged" && (
        <>
          <UniversalButton
            text={"UNIRSE"}
            color="secondary"
            iconClassName="UNIRSE"
            href={"/aunth/register"}
          />
          <UniversalButton
            text={"INICIAR SESION"}
            color="primary"
            iconClassName="INICIAR SESION"
            href={"/aunth/login"}
          />
        </>
      )}

      {type === "admin" && (
        <>
          <UniversalButton
            text={"GESTIONAR"}
            color="primary"
            iconClassName={"GESTIONAR"}
            href={"/main-board"}
          />
          <UniversalButton
            text={"PERFIL"}
            color="primary"
            iconClassName={"PERFIL"}
            href={"/profile"}
          />
          <UniversalButton
            text={"CERRAR SESION"}
            color="secondary"
            iconClassName="CERRAR SESION"
            onClick={logout}
          />
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-md w-full z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href={"/"} className="flex-shrink-0 flex items-center gap-2">
            <PiHouseFill className="text-[#1290CB] w-6 h-6" />
            <span className="text-xl font-bold text-[#1290CB]">KEYNEST</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-10">
            {renderButtons()}
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button type="button" onClick={toggleMobileMenu}>
              <FaBars className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-3 flex flex-col gap-4 justify-center items-center">
          {renderButtons()}
        </div>
      )}
    </nav>
  );
}
