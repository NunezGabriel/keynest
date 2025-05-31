"use client";
import { useState } from "react";
import CardComponent from "@/components/cardComponent";
import FillterComponent from "@/components/fillterComponent";

const GabrielPage = () => {
  const [isComprar, setIsComprar] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsComprar(!isComprar);
        }}
        className={
          isComprar
            ? "bg-green-400 text-white p-2 rounded-xl"
            : "bg-gray-400 text-white p-2 rounded-xl"
        }
      >
        ACTIVAR
      </button>
      <CardComponent estado={isComprar} />

      <FillterComponent />
    </>
  );
};

export default GabrielPage;
