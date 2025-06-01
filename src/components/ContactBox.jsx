import { FaUser } from "react-icons/fa";

export default function ContactBox() {
  return (
    <div className="bg-white shadow-md p-5 rounded-xl w-full md:w-64 self-start text-center border border-gray-100">
      <p className="text-sm mb-4 text-gray-600">Inicia sesión o únete para contactar con el anunciante</p>
      <button className="bg-[#1290CB] hover:bg-[#0d7cb0] text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm mx-auto transition-colors duration-200">
        <FaUser className="text-white" /> 
        <span>INICIAR SESIÓN</span>
      </button>
    </div>
  );
}