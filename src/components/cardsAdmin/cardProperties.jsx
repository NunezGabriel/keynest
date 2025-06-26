"use client";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import UniversalButton from "../buttons/UniversalButton";
import { FaRegBuilding } from "react-icons/fa";
import { BsBoundingBox } from "react-icons/bs";

const CardProperties = () => {
  return (
    <div className="bg-white rounded-md p-6 md:min-w-[520px] gap-6 flex flex-col overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="flex justify-between items-center">
        <h1 className="max-w-[200px] text-2xl">Este es un titulo de prueba</h1>
        <span className="bg-[#C8F8CB] text-[#2A8622] px-3 py-1 rounded-lg">
          disponible
        </span>
        {/* <span className="bg-[#F8CAC8] text-[#DF1B14] px-3 py-1 rounded-lg">
          cerrada
        </span>    este poner cuadno este cerrada*/}
      </div>
      <p>esta es una direccion de prueba xdd</p>
      <div className="flex justify-between">
        <div className="flex justify-between gap-2">
          <BsBoundingBox size={23} />
          <p>120 m2 terreno</p>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex justify-between gap-1">
            <IoBedOutline size={23} />
            <p>3 cuartos</p>
          </div>
          <div className="flex justify-between gap-1">
            <LuBath size={23} />
            <p>2 baños</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between gap-2 ">
          <FaRegBuilding size={23} />
          <p className="text-[#16b4ff]">Departamento</p>
        </div>
        <UniversalButton text={"ELIMINAR"} color="rojito" />
      </div>
    </div>
  );
};

export default CardProperties;
