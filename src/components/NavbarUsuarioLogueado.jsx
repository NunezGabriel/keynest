import Link from "next/link";
import { PiHouseFill } from "react-icons/pi";
import { FaSearch, FaUser, FaSignOutAlt, FaHeart } from "react-icons/fa";

export default function NavbarUsuarioLogueado() {
  return (
    <nav className="bg-white shadow-md w-full z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <PiHouseFill className="text-[#1290CB] w-6 h-6" />
            <span className="text-xl font-bold text-[#1290CB]">KEYNEST</span>
          </div>

          {/* Menú */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/buscar-casa" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
              <FaSearch />
              BUSCAR CASA
            </Link>

            <Link href="/guardados" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
              <FaHeart />
              GUARDADOS
            </Link>

            <Link href="/perfil" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
              <FaUser />
              PERFIL
            </Link>

            <Link href="/cerrar-sesion" className="flex items-center gap-2 text-gray-700 hover:text-red-600 text-sm font-medium">
              <FaSignOutAlt />
              CERRAR SESIÓN
            </Link>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <FaBars className="text-[#1290CB] w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}