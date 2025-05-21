import Link from "next/link";
import { PiHouseFill } from "react-icons/pi";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <PiHouseFill className="text-[#1290CB] w-6 h-6" />
            <span className="text-xl font-bold text-[#1290CB]">KEYNEST</span>
          </div>

          {/* Menú principal */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Buscar Casa */}
            <Link
              href="/buscar-casa"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium"
            >
              <FaSearch />
              BUSCAR CASA
            </Link>

            {/* Unirse */}
            <Link
              href="/unirse"
              className="flex items-center gap-2 bg-[#1290CB] hover:bg-sky-600 text-white px-3 py-2 rounded-2xl text-sm font-medium"
            >
              <FaUser />
              UNIRSE
            </Link>

            {/* Iniciar Sesión */}
            <Link
              href="/iniciar-sesion"
              className="flex items-center gap-2 bg-[#1290CB] hover:bg-sky-600 text-white px-3 py-2 rounded-2xl text-sm font-medium"
            >
              <FaUser />
              INICIAR SESIÓN
            </Link>
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
