"use client";
import { useEffect, useState } from "react";

export default function AddressInput({ value, onChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(value || "");

  const searchAddress = async (query) => {
    if (query.length < 3) return;
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}&limit=5`
    );
    const results = await response.json();
    setSuggestions(results.map((item) => item.display_name));
  };

  const handleSelect = (address) => {
    setInputValue(address);
    onChange(address);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          searchAddress(e.target.value);
        }}
        placeholder="Ingresa una dirección real"
        className="w-full pl-10 pr-4 py-2 border border-[#1290CB] rounded-lg"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
