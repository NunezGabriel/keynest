"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CardComponent from "@/components/cardComponent";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";
import { HashLoader } from "react-spinners";

const SaveProperties = () => {
  const { getFavoriteProperties } = useProperty();
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [estado, setEstado] = useState("FAVORITAS");

  // Obtener propiedades favoritas del backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getFavoriteProperties();

        // Asegurarnos de que data es un array y tiene propiedades
        if (Array.isArray(data)) {
          // Si el endpoint devuelve objetos con {favorite_id, property}
          const propertiesData = data.map((item) => item.property || item);
          setProperties(propertiesData.filter(Boolean)); // Filtrar posibles null/undefined
        } else {
          console.error("La respuesta de favoritos no es un array:", data);
          setProperties([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error obteniendo propiedades favoritas:", error);
        setProperties([]);
        setLoading(false);
      }
    };

    if (user?.user_type === "seeker") {
      fetchProperties();
    }
  }, [getFavoriteProperties, user]);

  // Filtrar propiedades según el estado seleccionado
  useEffect(() => {
    if (properties.length > 0) {
      const filtered = properties.filter((property) => {
        if (estado === "FAVORITAS") {
          return true; // Mostrar todas las favoritas
        } else if (estado === "CONTACTADAS") {
          // Lógica para propiedades contactadas (puedes implementarla después)
          return false; // Temporalmente no mostramos nada
        }
        return false;
      });
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties([]);
    }
  }, [estado, properties]);

  if (!user || user.user_type !== "seeker") {
    return (
      <div>
        <Navbar type={"seekerLog"} />
        <div className="mt-16 mx-auto max-w-[1227px] text-center text-red-500 p-8">
          Esta sección es exclusiva para usuarios seeker
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center mt-40">
        <HashLoader color="#1290CB" size={50} />
        <div className="text-center mt-20 text-[#1290CB]">
          Cargando Propiedades
        </div>
      </div>
    );
  }

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
                  : "text-gray-400 border-b-2 border-gray-400"
              }`}
              onClick={() => setEstado("FAVORITAS")}
            >
              FAVORITAS
            </button>
            {/* <button
              className={`px-4 py-2 font-bold ${
                estado === "CONTACTADAS"
                  ? "text-[#1290CB] border-b-2 border-[#1290CB]"
                  : "text-gray-400 border-b-2 border-gray-400"
              }`}
              onClick={() => setEstado("CONTACTADAS")}
            >
              CONTACTADAS
            </button> */}
            <span className="ml-auto text-gray-500">
              {estado === "FAVORITAS"
                ? `${filteredProperties.length} Propiedades favoritas`
                : `${filteredProperties.length} Propiedades contactadas`}
            </span>
          </div>
        </div>

        <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24 mt-16">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <CardComponent
                key={property.property_id}
                type={"liked"}
                property={property}
              />
            ))
          ) : (
            <div className="w-full text-center text-gray-500 py-12">
              {estado === "FAVORITAS"
                ? "No tienes propiedades favoritas aún"
                : "No tienes propiedades contactadas"}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default SaveProperties;
