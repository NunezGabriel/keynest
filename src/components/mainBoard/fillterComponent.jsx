import DropdownButton from "../buttons/DropdownButton";
import { IoSearchOutline } from "react-icons/io5";

const FillterComponent = () => {
  return (
    <div className="bg-white rounded-lg p-7 mx-auto max-w-[1136px] flex justify-between flex-wrap gap-4 md:gap-0 mt-10 mb-32">
      <div className="flex justify-center items-center border border-gray-400 rounded-lg px-2 py-1">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="Buscar por ubicación"
          className="w-full p-2 rounded-md focus:outline-none focus:border-[#16b4ff] text-sm"
        />
      </div>
      <div className="flex gap-4 flex-wrap">
        <DropdownButton type="precio" text="PRECIO" />
        <DropdownButton type="tipo" text="TIPO DE PROPIEDAD" />
        <DropdownButton type="cuartos" text="CUARTOS Y BAÑOS" />
        <DropdownButton type="mas" />
      </div>
      <DropdownButton type="compra" text="COMPRA y RENTA" />
    </div>
  );
};

export default FillterComponent;
