"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownButton = ({ text = "MÁS", options = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#1290CB] hover:bg-[#16b4ff] text-white text-base py-2 px-4 rounded-2xl flex items-center gap-2"
      >
        {text}
        <FaChevronDown size={14} />
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={option.onClick}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
