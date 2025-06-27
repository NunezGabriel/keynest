"use client";
import UniversalButton from "../buttons/UniversalButton";
import { IoSearchOutline } from "react-icons/io5";

const FillterAdminComponent = ({ type }) => {
  return (
    <>
      {type === "propertyFillter" && (
        <div className="bg-white rounded-lg p-7 mx-auto max-w-[1136px] flex justify-between flex-wrap gap-4 md:gap-0 mt-10 mb-10">
          <div className="flex justify-center items-center border border-gray-400 rounded-lg px-2 py-1">
            <IoSearchOutline />
            <input
              type="text"
              placeholder="Buscar por ubicación"
              className="w-full p-2 rounded-md focus:outline-none focus:border-[#16b4ff] text-sm"
            />
          </div>

          <UniversalButton text={"AGREGAR"} />
        </div>
      )}
      {type === "userFillter" && (
        <div className="bg-white rounded-lg p-7 mx-auto max-w-[1136px] flex justify-between flex-wrap gap-4 md:gap-0 mt-10 mb-10">
          <div className="flex justify-center items-center border border-gray-400 rounded-lg px-2 py-1">
            <IoSearchOutline />
            <input
              type="text"
              placeholder="Buscar por ubicación"
              className="w-full p-2 rounded-md focus:outline-none focus:border-[#16b4ff] text-sm"
            />
          </div>

          <UniversalButton text={"AGREGAR"} />
        </div>
      )}
    </>
  );
};

export default FillterAdminComponent;
