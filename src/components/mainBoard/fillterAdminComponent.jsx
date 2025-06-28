"use client";
import UniversalButton from "../buttons/UniversalButton";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

const FillterAdminComponent = ({ type, onAdd, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch?.(e.target.value); // si existe
  };

  return (
    <div className="bg-white rounded-lg p-7 mx-auto max-w-[1136px] flex justify-between flex-wrap gap-4 md:gap-0 mt-10 mb-10">
      <div
        className={`flex justify-center items-center border border-gray-400 rounded-lg px-2 py-1 ${
          type === "propertyFillter" ? "w-full" : "w-[70%]"
        }`}
      >
        <IoSearchOutline />
        <input
          type="text"
          placeholder={
            type === "userFillter"
              ? "Buscar por nombre o correo"
              : "Buscar por ubicación"
          }
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 rounded-md focus:outline-none focus:border-[#16b4ff] text-sm"
        />
      </div>

      {type === "userFillter" && (
        <UniversalButton text="AGREGAR" onClick={onAdd} />
      )}
    </div>
  );
};

export default FillterAdminComponent;
