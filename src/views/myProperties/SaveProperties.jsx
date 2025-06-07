"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CardComponent from "@/components/cardComponent";

const SaveProperties = () => {
  const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [estado, setEstado] = useState("FAVORITAS");
  return (
    <div>
      <Navbar type={"seekerLog"} />
      <div className="mt-16 mx-auto max-w-[1227px]">
        <div className="mt-8">
          <div className="flex gap-4 mb-6 pb-2">
            <button
              className={`px-4 py-2 font-bold ${
                estado === "FAVORITAS"
                  ? "text-[#1290CB] border-b-2 border-[#1290CB]"
                  : "text-gray-400  border-b-2 border-gray-400"
              }`}
              onClick={() => setEstado("FAVORITAS")}
            >
              FAVORITAS
            </button>
            <button
              className={`px-4 py-2 font-bold ${
                estado === "CONTACTADAS"
                  ? "text-[#1290CB] border-b-2 border-[#1290CB]"
                  : "text-gray-400  border-b-2 border-gray-400"
              }`}
              onClick={() => setEstado("CONTACTADAS")}
            >
              CONTACTADAS
            </button>
            <span className="ml-auto text-gray-500">
              {2} Propiedades encontradas
            </span>
          </div>
        </div>

        <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24 mt-16">
          {properties.map((item, index) => (
            <CardComponent key={index} type={"liked"} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SaveProperties;
