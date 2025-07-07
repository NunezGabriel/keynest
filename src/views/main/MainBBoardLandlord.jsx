"use client";

import { useState, useEffect, useCallback } from "react";
import FillterComponent from "@/components/mainBoard/fillterComponent";
import Navbar from "@/components/Navbar";
import CardComponent from "@/components/cardComponent";
import Footer from "@/components/footer";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";
import { HashLoader } from "react-spinners";

const MainBoardLandlord = () => {
  const { getProperties, closeProperty } = useProperty();
  const { user } = useAuth();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Cargar propiedades disponibles
  const fetchProperties = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProperties();
      const availableProperties = data.filter(
        (prop) => prop.status === "disponible"
      );
      setProperties(availableProperties);
      setFilteredProperties(availableProperties);
    } catch (error) {
      console.error("Error obteniendo propiedades:", error);
    } finally {
      setLoading(false);
    }
  }, [getProperties]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  // Filtros
  const applyFilters = (filters) => {
    const filtered = properties.filter((property) => {
      if (
        filters.search &&
        !property.location.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;

      if (filters.minPrice && property.price < parseFloat(filters.minPrice))
        return false;
      if (filters.maxPrice && property.price > parseFloat(filters.maxPrice))
        return false;

      if (
        filters.propertyType.length > 0 &&
        !filters.propertyType.includes(property.property_type)
      )
        return false;

      if (filters.bedrooms) {
        const beds = filters.bedrooms === "+4" ? 5 : parseInt(filters.bedrooms);
        if (property.bedrooms < beds) return false;
      }

      if (filters.bathrooms) {
        const baths =
          filters.bathrooms === "+4" ? 5 : parseInt(filters.bathrooms);
        if (property.bathrooms < baths) return false;
      }

      if (filters.petsAllowed && !property.pets_allowed) return false;

      if (
        filters.minArea &&
        property.square_meters < parseFloat(filters.minArea)
      )
        return false;
      if (
        filters.maxArea &&
        property.square_meters > parseFloat(filters.maxArea)
      )
        return false;

      if (filters.transactionType.length > 0) {
        if (filters.transactionType.includes("ambos")) {
          // no filtrar
        } else if (
          filters.transactionType.includes("compra") &&
          property.is_rent
        ) {
          return false;
        } else if (
          filters.transactionType.includes("renta") &&
          !property.is_rent
        ) {
          return false;
        }
      }

      return true;
    });

    setFilteredProperties(filtered);
  };

  // ✅ Función para editar propiedad en el estado
  const handleEditProperty = (updatedProperty) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.property_id === updatedProperty.property_id ? updatedProperty : p
      )
    );
    setFilteredProperties((prev) =>
      prev.map((p) =>
        p.property_id === updatedProperty.property_id ? updatedProperty : p
      )
    );
  };

  // ✅ Función para cerrar propiedad
  const handleCloseProperty = async (propertyId) => {
    try {
      await closeProperty(propertyId);
      // Quita la propiedad del estado (porque ya no es "disponible")
      setProperties((prev) => prev.filter((p) => p.property_id !== propertyId));
      setFilteredProperties((prev) =>
        prev.filter((p) => p.property_id !== propertyId)
      );
    } catch (error) {
      console.error("Error cerrando propiedad:", error);
    }
  };

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
      <FillterComponent onFilter={applyFilters} />

      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-center md:justify-between gap-24 mb-24">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => {
            const isOwner = property.user_id === user?.id;
            return (
              <CardComponent
                key={property.property_id}
                property={property}
                type={isOwner ? "landlord" : ""}
                onEdit={isOwner ? handleEditProperty : undefined}
                onClose={
                  isOwner
                    ? () => handleCloseProperty(property.property_id)
                    : undefined
                }
              />
            );
          })
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
