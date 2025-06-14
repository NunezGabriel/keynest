"use client";

import { useState, useEffect } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";
import CardComponent from "@/components/cardComponent";
import Navbar from "@/components/Navbar";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";

const MyProperties = () => {
  const { getMyProperties } = useProperty();
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [estado, setEstado] = useState("disponible");

  // Obtener propiedades del backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getMyProperties();
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error("Error obteniendo propiedades:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [getMyProperties]);

  // Filtrar propiedades según el estado seleccionado
  useEffect(() => {
    if (properties.length > 0) {
      const filtered = properties.filter((property) => {
        if (estado === "disponible") {
          return property.status === "disponible";
        } else if (estado === "cerradas") {
          return property.status !== "disponible"; // O puedes usar property.status === "vendido" || property.status === "alquilado"
        }
        return true;
      });
      setFilteredProperties(filtered);
    }
  }, [estado, properties]);

  if (loading) {
    return (
      <div>
        <Navbar type={"landlordLog"} />
        <div className="mt-16 mx-auto max-w-[1227px] text-center">
          Cargando propiedades...
        </div>
      </div>
    );
  }

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
                estado === "disponible"
                  ? "text-[#1290CB] border-b-2 border-[#1290CB]"
                  : "text-gray-400  border-b-2 border-gray-400"
              }`}
              onClick={() => setEstado("disponible")}
            >
              DISPONIBLE
            </button>
            <button
              className={`px-4 py-2 font-bold ${
                estado === "cerradas"
                  ? "text-[#1290CB] border-b-2 border-[#1290CB]"
                  : "text-gray-400  border-b-2 border-gray-400"
              }`}
              onClick={() => setEstado("cerradas")}
            >
              CERRADAS
            </button>
            <span className="ml-auto text-gray-500">
              {filteredProperties.length} Propiedades encontradas
            </span>
          </div>
        </div>

        <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24 mt-16">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <CardComponent
                key={property.property_id}
                type={"landlord"} // Pasamos los datos reales de la propiedad
              />
            ))
          ) : (
            <div className="w-full text-center text-gray-500">
              No hay propiedades{" "}
              {estado === "disponible" ? "disponibles" : "cerradas"}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MyProperties;
