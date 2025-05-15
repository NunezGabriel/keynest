// CORRECTO (así debe quedar tu Navbar.jsx)
import Link from "next/link";  // Importar Link de next/link

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-900">KEYNEST</span>
          </div>
          
          {/* Menú principal */}
          <div className="hidden md:flex space-x-8">
            <Link href="/buscar-casa" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
              BUSCAR CASA
            </Link>
            <Link href="/unirse" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
              UNIRSE
            </Link>
            <Link href="/iniciar-sesion" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
              INICIAR SESION
            </Link>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button type="button">
              {/* Icono hamburguesa */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}