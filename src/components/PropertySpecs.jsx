import { FaBath, FaBed, FaDog, FaRulerCombined, FaDollarSign } from "react-icons/fa";

export default function PropertySpecs() {
  return (
    <div
      className="flex flex-wrap gap-4 text-sm py-4 border-t border-b mt-4 mb-2 font-montserrat"
      style={{ borderColor: "#1290CB" }} 
    >
      <div className="flex items-center gap-2">
        <FaBed /> 3 Habitaciones
      </div>
      <div className="flex items-center gap-2">
        <FaBath /> 3 Baños
      </div>
      <div className="flex items-center gap-2">
        <FaRulerCombined /> 180 m²
      </div>
      <div className="flex items-center gap-2">
        <FaDog /> Mascotas Permitidas
      </div>
    </div>
  );
}
