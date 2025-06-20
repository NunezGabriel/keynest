"use client";
import DropdownButton from "../buttons/DropdownButton";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

const FillterComponent = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    propertyType: [],
    petsAllowed: false,
    minArea: "",
    maxArea: "",
    transactionType: [],
    bedrooms: null,
  });

  const handleSearchChange = (e) => {
    const newFilters = { ...filters, search: e.target.value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handlePriceChange = (min, max) => {
    const newFilters = { ...filters, minPrice: min, maxPrice: max };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handlePropertyTypeChange = (types) => {
    const newFilters = { ...filters, propertyType: types };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handlePetsChange = (allowed) => {
    const newFilters = { ...filters, petsAllowed: allowed };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleAreaChange = (min, max) => {
    const newFilters = { ...filters, minArea: min, maxArea: max };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleTransactionTypeChange = (types) => {
    const newFilters = { ...filters, transactionType: types };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleBedroomsChange = (bedrooms) => {
    const newFilters = { ...filters, bedrooms };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white rounded-lg p-7 mx-auto max-w-[1136px] flex justify-between flex-wrap gap-4 md:gap-0 mt-10 mb-32">
      <div className="flex justify-center items-center border border-gray-400 rounded-lg px-2 py-1">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="Buscar por ubicación"
          className="w-full p-2 rounded-md focus:outline-none focus:border-[#16b4ff] text-sm"
          value={filters.search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex justify-between gap-4 flex-wrap">
        <DropdownButton
          type="precio"
          text="PRECIO"
          onApply={handlePriceChange}
        />
        <DropdownButton
          type="tipo"
          text="TIPO DE PROPIEDAD"
          onApply={handlePropertyTypeChange}
        />
        <DropdownButton
          type="dormitorios"
          text="DORMITORIOS"
          onApply={handleBedroomsChange}
        />
        <DropdownButton
          type="mas"
          onPetsChange={handlePetsChange}
          onAreaChange={handleAreaChange}
        />
      </div>
      <DropdownButton
        type="compra"
        text="COMPRA y RENTA"
        onApply={handleTransactionTypeChange}
      />
    </div>
  );
};

export default FillterComponent;
