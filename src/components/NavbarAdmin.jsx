import { FaHome } from "react-icons/fa"; // Icono adicional
import Link from "next/link"; // Asegúrate de importar Link

export default function NavbarAdmin() {
  return (
    // ... resto de tu navbar
    <Link 
      href="/mis-propiedades" 
      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium"
    >
      <FaHome />
      MIS PROPIEDADES
    </Link>
    // ... resto de tu navbar
  );
}