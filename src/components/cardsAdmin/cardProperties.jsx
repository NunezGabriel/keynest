"use client";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import UniversalButton from "../buttons/UniversalButton";
import { FaRegBuilding } from "react-icons/fa";
import { BsBoundingBox } from "react-icons/bs";

const CardProperties = ({ property, onDelete }) => {
  return (
    <div className="bg-white rounded-md p-6 md:min-w-[520px] gap-6 flex flex-col overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="flex justify-between items-center">
        <h1 className="max-w-[300px] text-2xl truncate">{property.title}</h1>
        <span
          className={`px-3 py-1 rounded-lg ${
            property.status === "closed"
              ? "bg-[#F8CAC8] text-[#DF1B14]"
              : "bg-[#C8F8CB] text-[#2A8622]"
          }`}
        >
          {property.status === "closed" ? "cerrada" : "disponible"}
        </span>
      </div>

      <p className="max-w-[300px] truncate">{property.location}</p>

      <div className="flex justify-between">
        <div className="flex justify-between gap-2">
          <BsBoundingBox size={23} />
          <p>{property.square_meters} m2 terreno</p>
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex justify-between gap-1">
            <IoBedOutline size={23} />
            <p>{property.bedrooms} cuartos</p>
          </div>
          <div className="flex justify-between gap-1">
            <LuBath size={23} />
            <p>{property.bathrooms} baños</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex justify-between gap-2 ">
          <FaRegBuilding size={23} />
          <p className="text-[#16b4ff]">{property.property_type}</p>
        </div>

        <UniversalButton text="ELIMINAR" color="rojito" onClick={onDelete} />
      </div>
    </div>
  );
};

export default CardProperties;
