"use client";

import { useState, useEffect } from "react";
import FillterComponent from "@/components/mainBoard/fillterComponent";
import Navbar from "@/components/Navbar";
import CardComponent from "@/components/cardComponent";
import Footer from "@/components/footer";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";

const MainBoardLandlord = () => {
  const { getProperties } = useProperty();
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Obtener todas las propiedades del backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error("Error obteniendo propiedades:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [getProperties]);

  if (loading) {
    return (
      <div>
        <Navbar type={"landlordLog"} />
        <div className="mt-16 mx-auto max-w-[1227px] text-center">
          Cargando propiedades...
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar type={"landlordLog"} />
      <FillterComponent
        onFilter={(filters) => {
          const filtered = properties.filter((property) => {
            if (
              filters.propertyType &&
              property.property_type !== filters.propertyType
            ) {
              return false;
            }
            return true;
          });
          setFilteredProperties(filtered);
        }}
      />

      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <CardComponent
              key={property.property_id}
              property={property}
              type={property.user_id === user?.id ? "landlord" : ""}
            />
          ))
        ) : (
          <div className="w-full text-center text-gray-500 py-12">
            No se encontraron propiedades con los filtros aplicados
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default MainBoardLandlord;
