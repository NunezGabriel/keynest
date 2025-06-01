"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import UniversalButton from "./UniversalButton";

const DropdownButton = ({ text = "MÁS", type = "mas" }) => {
  const [open, setOpen] = useState(false);
  const [selectedCuartos, setSelectedCuartos] = useState(null);
  const [selectedBanos, setSelectedBanos] = useState(null);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#1290CB] hover:bg-[#16b4ff] text-white text-base py-2 px-4 rounded-2xl flex items-center gap-2"
      >
        {text}
        {type === "mas" && <FaChevronDown size={14} />}
      </button>
      {open && (
        <div className="absolute z-10 mt-2 rounded-md shadow-lg border border-[#16b4ff] bg-white p-2">
          {type === "mas" && (
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center mb-3">
                <input type="checkbox" className="h-4 w-4" />
                <label className="text-sm">Mascotas</label>
              </div>
              <div className="space-y-2">
                <h1 className="text-xs font-light tracking-[1.5px]">
                  AREA EN M2
                </h1>
                <div className="flex items-center gap-2 w-full max-w-60">
                  <input
                    type="text"
                    className="flex-1 min-w-0 p-1 border border-gray-300 rounded text-sm"
                    placeholder="Min"
                  />
                  <span className="text-sm">-</span>
                  <input
                    type="text"
                    className="flex-1 min-w-0 p-1 border border-gray-300 rounded text-sm"
                    placeholder="Max"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} />
              </div>
            </div>
          )}

          {type === "precio" && (
            <div className="flex flex-col gap-3">
              <div className="space-y-2">
                <h1 className="text-xs font-light tracking-[1.5px]">PRECIO</h1>
                <div className="flex items-center gap-2 w-full max-w-60">
                  <input
                    type="text"
                    className="flex-1 min-w-0 p-1 border border-gray-300 rounded text-sm"
                    placeholder="Min"
                  />
                  <span className="text-sm">-</span>
                  <input
                    type="text"
                    className="flex-1 min-w-0 p-1 border border-gray-300 rounded text-sm"
                    placeholder="Max"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} />
              </div>
            </div>
          )}

          {type === "tipo" && (
            <div className="flex flex-col gap-3">
              <h1 className="text-xs font-light tracking-[1.5px]">
                TIPO DE PROPIEDAD
              </h1>
              <div className="flex gap-3">
                <div className="flex gap-2 items-center mb-3">
                  <input type="checkbox" className="h-4 w-4" />
                  <label className="text-sm">Casa</label>
                </div>
                <div className="flex gap-2 items-center mb-3">
                  <input type="checkbox" className="h-4 w-4" />
                  <label className="text-sm">Departamento</label>
                </div>
              </div>

              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} />
              </div>
            </div>
          )}

          {type === "cuartos" && (
            <div className="flex flex-col gap-3">
              <h1 className="text-xs font-light tracking-[1.5px]">CUARTOS</h1>
              <div className="flex">
                {[1, 2, 3, 4, "+4"].map((option) => (
                  <div
                    key={`cuartos-${option}`}
                    className={`border-[1.5px] border-[#a4a4a4] py-2 px-4 cursor-pointer 
            ${selectedCuartos === option ? "bg-[#1290CB] text-white" : ""}
            ${option === 1 ? "rounded-tl-lg rounded-bl-lg" : ""}
            ${option === "+4" ? "rounded-tr-lg rounded-br-lg" : ""}`}
                    onClick={() => {
                      setSelectedCuartos(option);
                      console.log("Cuartos seleccionados:", option);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>

              <h1 className="text-xs font-light tracking-[1.5px]">BAÑOS</h1>
              <div className="flex">
                {[1, 2, 3, 4, "+4"].map((option) => (
                  <div
                    key={`banos-${option}`}
                    className={`border-[1.5px] border-[#a4a4a4] py-2 px-4 cursor-pointer 
            ${selectedBanos === option ? "bg-[#1290CB] text-white" : ""}
            ${option === 1 ? "rounded-tl-lg rounded-bl-lg" : ""}
            ${option === "+4" ? "rounded-tr-lg rounded-br-lg" : ""}`}
                    onClick={() => {
                      setSelectedBanos(option);
                      console.log("Baños seleccionados:", option);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} />
              </div>
            </div>
          )}

          {type === "compra" && (
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center mb-3">
                <input type="checkbox" className="h-4 w-4" />
                <label className="text-sm">Ambos</label>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <input type="checkbox" className="h-4 w-4" />
                <label className="text-sm">Compra</label>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <input type="checkbox" className="h-4 w-4" />
                <label className="text-sm">Renta</label>
              </div>
              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
