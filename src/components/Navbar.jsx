import Link from "next/link";
import { PiHouseFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import UniversalButton from "./buttons/UniversalButton";

export default function Navbar({ type }) {
  return (
    <nav className="bg-white shadow-md w-full z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href={"/"} className="flex-shrink-0 flex items-center gap-2">
            <PiHouseFill className="text-[#1290CB] w-6 h-6" />
            <span className="text-xl font-bold text-[#1290CB]">KEYNEST</span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {type === "landlordLog" && (
              <UniversalButton
                text={"BUSCAR PROPIEDAD"}
                color="ghost"
                iconClassName="BUSCAR PROPIEDAD"
                iconBackgroundStyle="text-black"
                className="text-black"
                href={"/main-board"}
              />
            )}

            {type === "seeker" && (
              <UniversalButton
                text={"BUSCAR PROPIEDAD"}
                color="ghost"
                iconClassName="BUSCAR PROPIEDAD"
                iconBackgroundStyle="text-black"
                className="text-black"
                href={"/main-board"}
              />
            )}

            {type === "noLogged" && (
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
              <UniversalButton
                text={"CERRAR SESION"}
                color="secondary"
                iconClassName="CERRAR SESION"
              />
            )}

            {type === "landlordLog" && (
              <UniversalButton
                text={"MIS PROPIEDADES"}
                color="primary"
                iconClassName={"MIS PROPIEDADES"}
              />
            )}

            {type === "landlordLog" && (
              <UniversalButton
                text={"PERFIL"}
                color="primary"
                iconClassName={"PERFIL"}
              />
            )}

            {type === "seekerLog" && (
              <UniversalButton
                text={"CERRAR SESION"}
                color="secondary"
                iconClassName="CERRAR SESION"
              />
            )}

            {type === "seekerLog" && (
              <UniversalButton
                text={"GUARDADOS"}
                color="primary"
                iconClassName={"GUARDADOS"}
              />
            )}

            {type === "seekerLog" && (
              <UniversalButton
                text={"PERFIL"}
                color="primary"
                iconClassName={"PERFIL"}
              />
            )}

            {type === "noLogged" && (
              <UniversalButton
                text={"UNIRSE"}
                color="secondary"
                iconClassName="UNIRSE"
                href={"/register"}
              />
            )}

            {type === "noLogged" && (
              <UniversalButton
                text={"INICIAR SESION"}
                color="primary"
                iconClassName="INICIAR SESION"
                href={"/aunth/login"}
              />
            )}
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button type="button">
              <FaBars className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
