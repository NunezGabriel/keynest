"use client";
import { useState, useEffect } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";
import CardComponent from "@/components/cardComponent";
import Navbar from "@/components/Navbar";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";
import { HashLoader } from "react-spinners";

const MyProperties = () => {
  const { getMyProperties, closeProperty, reopenProperty, deleteProperty } =
    useProperty();
  const { user, token, loading: authLoading, updateProperty } = useAuth(); // 👈 Obtén token y authLoading
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [estado, setEstado] = useState("disponible");

  // Obtener propiedades solo cuando el AuthContext esté listo
  useEffect(() => {
    if (!authLoading && token) {
      // 👈 Espera a que el auth esté cargado
      const fetchProperties = async () => {
        try {
          const data = await getMyProperties();
          setProperties(data);
        } catch (error) {
          console.error("Error obteniendo propiedades:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProperties();
    }
  }, [getMyProperties, authLoading, token]); // 👈 Agrega dependencias

  // Filtrar propiedades según el estado seleccionado
  useEffect(() => {
    if (properties.length > 0) {
      const filtered = properties.filter((property) => {
        if (estado === "disponible") {
          return property.status === "disponible";
        } else if (estado === "cerradas") {
          return property.status === "cerrada"; // 👈 Asegúrate que coincida con tu ENUM
        }
        return true;
      });
      setFilteredProperties(filtered);
    }
  }, [estado, properties]);

  const handleEditProperty = (updatedProperty) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.property_id === updatedProperty.property_id ? updatedProperty : p
      )
    );
  };

  // Pantalla de carga mientras AuthContext se inicializa
  if (authLoading) {
    return (
      <div>
        <Navbar type={"landlordLog"} />
        <div className="mt-16 mx-auto max-w-[1227px] text-center">
          Verificando sesión...
        </div>
      </div>
    );
  }

  // Pantalla de carga mientras se obtienen las propiedades
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
                type={"landlord"}
                property={property}
                onClose={() =>
                  closeProperty(property.property_id).then(() => {
                    // Actualiza el estado local sin recargar la página
                    setProperties((prev) =>
                      prev.map((p) =>
                        p.property_id === property.property_id
                          ? { ...p, status: "cerrada" }
                          : p
                      )
                    );
                  })
                }
                onReopen={() =>
                  reopenProperty(property.property_id).then(() => {
                    setProperties((prev) =>
                      prev.map((p) =>
                        p.property_id === property.property_id
                          ? { ...p, status: "disponible" }
                          : p
                      )
                    );
                  })
                }
                onDelete={() =>
                  deleteProperty(property.property_id).then(() => {
                    setProperties((prev) =>
                      prev.filter((p) => p.property_id !== property.property_id)
                    );
                  })
                }
                onEdit={handleEditProperty}
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
