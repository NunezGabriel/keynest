export default function NavbarUsuarioSimple() {
  return (
    <nav className="bg-white shadow-md w-full z-10 relative">
      {/* ... (mismo logo y contenedor) ... */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/perfil" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium">
          <FaUser />
          PERFIL
        </Link>

        <Link href="/cerrar-sesion" className="flex items-center gap-2 text-gray-700 hover:text-red-600 text-sm font-medium">
          <FaSignOutAlt />
          CERRAR SESIÓN
        </Link>
      </div>
    </nav>
  );
}