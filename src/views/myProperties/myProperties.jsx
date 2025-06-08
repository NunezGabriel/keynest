"use client";

import { useState } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";
import CardComponent from "@/components/cardComponent";
import Navbar from "@/components/Navbar";

const MyProperties = () => {
  const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [estado, setEstado] = useState("ACTIVAS");

  return (
    <div>
      <Navbar type={"landlordLog"} />
      <div className="mt-16 mx-auto max-w-[1227px]">
        <UniversalButton
          iconClassName=""
          text={"REGISTRAR NUEVA PROPIEDAD"}
          href={"/my-properties/create-propertie"}
        />

        <div className="mt-8">
          <div className="flex gap-4 mb-6 pb-2">
            <button
              className={`px-4 py-2 font-bold ${
                estado === "ACTIVAS"
                  ? "text-[#1290CB] border-b-2 border-[#1290CB]"
                  : "text-gray-400  border-b-2 border-gray-400"
              }`}
              onClick={() => setEstado("ACTIVAS")}
            >
              ACTIVAS
            </button>
            <button
              className={`px-4 py-2 font-bold ${
                estado === "CERRADAS"
                  ? "text-[#1290CB] border-b-2 border-[#1290CB]"
                  : "text-gray-400  border-b-2 border-gray-400"
              }`}
              onClick={() => setEstado("CERRADAS")}
            >
              CERRADAS
            </button>
            <span className="ml-auto text-gray-500">
              {2} Propiedades encontradas
            </span>
          </div>
        </div>

        <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24 mt-16">
          {properties.map((item, index) => (
            <CardComponent key={index} type={"landlord"} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default MyProperties;
