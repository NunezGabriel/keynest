"use client";
import React, { useState } from "react";
import { FaChevronDown, FaBed } from "react-icons/fa";
import UniversalButton from "./UniversalButton";

const DropdownButton = ({
  text = "MÁS",
  type = "mas",
  onApply,
  onPetsChange,
  onAreaChange,
}) => {
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);

  const handleApply = () => {
    switch (type) {
      case "precio":
        onApply(minPrice, maxPrice);
        break;
      case "tipo":
        onApply(selectedTypes);
        break;
      case "mas":
        onPetsChange(petsAllowed);
        onAreaChange(minArea, maxArea);
        break;
      case "dormitorios":
        onApply(selectedBedrooms);
        break;
      case "compra":
        onApply(selectedTransactions);
        break;
    }
    setOpen(false);
  };

  const togglePropertyType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const toggleTransactionType = (transaction) => {
    if (selectedTransactions.includes(transaction)) {
      setSelectedTransactions(
        selectedTransactions.filter((t) => t !== transaction)
      );
    } else {
      setSelectedTransactions([...selectedTransactions, transaction]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className={`${
          type === "compra"
            ? "bg-white border border-[#1290CB] text-gray-500 "
            : "bg-[#1290CB] hover:bg-[#16b4ff] text-white "
        } text-base py-2 px-4 rounded-2xl flex items-center gap-2`}
      >
        {text}
        {(type === "mas" || type === "compra") && <FaChevronDown size={14} />}
      </button>
      {open && (
        <div className="absolute z-10 mt-2 rounded-md shadow-lg border border-[#16b4ff] bg-white p-2">
          {type === "mas" && (
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center mb-3">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={petsAllowed}
                  onChange={(e) => setPetsAllowed(e.target.checked)}
                />
                <label className="text-sm">Mascotas Permitidas</label>
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
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                  />
                  <span className="text-sm">-</span>
                  <input
                    type="text"
                    className="flex-1 min-w-0 p-1 border border-gray-300 rounded text-sm"
                    placeholder="Max"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} onClick={handleApply} />
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
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <span className="text-sm">-</span>
                  <input
                    type="text"
                    className="flex-1 min-w-0 p-1 border border-gray-300 rounded text-sm"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} onClick={handleApply} />
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
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selectedTypes.includes("casa")}
                    onChange={() => togglePropertyType("casa")}
                  />
                  <label className="text-sm">Casa</label>
                </div>
                <div className="flex gap-2 items-center mb-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selectedTypes.includes("departamento")}
                    onChange={() => togglePropertyType("departamento")}
                  />
                  <label className="text-sm">Departamento</label>
                </div>
              </div>
              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} onClick={handleApply} />
              </div>
            </div>
          )}
          {type === "dormitorios" && (
            <div className="flex flex-col gap-3 w-48">
              <h1 className="text-xs font-light tracking-[1.5px]">
                SELECCIONE DORMITORIOS
              </h1>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, "+6"].map((num) => (
                  <button
                    key={num}
                    className={`p-2 rounded-lg flex flex-col items-center ${
                      selectedBedrooms === num
                        ? "bg-[#1290CB] text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedBedrooms(num)}
                  >
                    <FaBed className="mb-1" />
                    <span>{num}</span>
                  </button>
                ))}
              </div>
              <button
                className="text-sm text-blue-500 mt-2 self-start"
                onClick={() => setSelectedBedrooms(null)}
              >
                Limpiar selección
              </button>
              <div className="flex justify-end mt-2">
                <UniversalButton text={"APLICAR"} onClick={handleApply} />
              </div>
            </div>
          )}

          {type === "compra" && (
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center mb-3">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={selectedTransactions.includes("ambos")}
                  onChange={() => toggleTransactionType("ambos")}
                />
                <label className="text-sm">Ambos</label>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={selectedTransactions.includes("compra")}
                  onChange={() => toggleTransactionType("compra")}
                />
                <label className="text-sm">Compra</label>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={selectedTransactions.includes("renta")}
                  onChange={() => toggleTransactionType("renta")}
                />
                <label className="text-sm">Renta</label>
              </div>
              <div className="flex justify-end">
                <UniversalButton text={"ACEPTAR"} onClick={handleApply} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
