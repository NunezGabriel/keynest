"use client";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import UniversalButton from "../buttons/UniversalButton";
import { FaRegBuilding } from "react-icons/fa";
import { BsBoundingBox } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const CardUsers = () => {
  return (
    <div className="bg-white rounded-md p-6 md:min-w-[520px] gap-6 flex flex-col overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="flex justify-between items-center">
        <FaUserAlt size={100} className="text-black" />
        <h1 className="max-w-[200px] text-2xl">Este es un nombre de prueba</h1>
        <span className="bg-[#abe5ff] text-[#0088c7] px-3 py-1 rounded-lg">
          seeker
        </span>
        {/* <span className="bg-[#e4aaff] text-[#ae00ff] px-3 py-1 rounded-lg">
          landlord
        </span> */}
        {/* este poner cuando el usuario sea landlord */}
      </div>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">Correo:</p>
          <p>Este es un correo</p>
        </div>
        <div>
          <p className="font-semibold">Contraseña:</p>
          <p>Esta es una contraseña</p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex justify-between gap-2">
          <UniversalButton text={"EDITAR"} color="amarillito" />
          <UniversalButton text={"ELIMINAR"} color="rojito" />
        </div>
      </div>
    </div>
  );
};

export default CardUsers;
