"use client";

import { FaBath, FaBed, FaDog, FaRulerCombined } from "react-icons/fa";

export default function PropertySpecs({
  bedrooms = 0,
  bathrooms = 0,
  squareMeters = 0,
  petsAllowed = false,
}) {
  return (
    <div
      className="flex flex-wrap gap-4 text-sm py-4 border-t border-b mt-4 mb-2 font-montserrat"
      style={{ borderColor: "#1290CB" }}
    >
      <div className="flex items-center gap-2">
        <FaBed /> {bedrooms} Habitación{bedrooms !== 1 ? "es" : ""}
      </div>
      <div className="flex items-center gap-2">
        <FaBath /> {bathrooms} Baño{bathrooms !== 1 ? "s" : ""}
      </div>
      <div className="flex items-center gap-2">
        <FaRulerCombined /> {squareMeters} m²
      </div>
      <div className="flex items-center gap-2">
        <FaDog /> Mascotas {petsAllowed ? "Permitidas" : "No permitidas"}
      </div>
    </div>
  );
}
