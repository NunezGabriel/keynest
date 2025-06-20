"use client";

import { useState, useEffect } from "react";
import FillterComponent from "@/components/mainBoard/fillterComponent";
import Navbar from "@/components/Navbar";
import CardComponent from "@/components/cardComponent";
import Footer from "@/components/footer";
import { useProperty } from "@/context/PropertyContext";

const MainBoardNoLogged = () => {
  const { getProperties } = useProperty();
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

  const applyFilters = (filters) => {
    const filtered = properties.filter((property) => {
      // Filtro de búsqueda por ubicación
      if (
        filters.search &&
        !property.location.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Filtro por precio
      if (filters.minPrice && property.price < parseFloat(filters.minPrice)) {
        return false;
      }
      if (filters.maxPrice && property.price > parseFloat(filters.maxPrice)) {
        return false;
      }

      // Filtro por tipo de propiedad
      if (
        filters.propertyType.length > 0 &&
        !filters.propertyType.includes(property.property_type)
      ) {
        return false;
      }

      // Filtro por cuartos
      if (filters.bedrooms) {
        const bedsNeeded =
          filters.bedrooms === "+4" ? 5 : parseInt(filters.bedrooms);
        if (property.bedrooms < bedsNeeded) {
          return false;
        }
      }

      // Filtro por baños
      if (filters.bathrooms) {
        const bathsNeeded =
          filters.bathrooms === "+4" ? 5 : parseInt(filters.bathrooms);
        if (property.bathrooms < bathsNeeded) {
          return false;
        }
      }

      // Filtro por mascotas
      if (filters.petsAllowed && !property.pets_allowed) {
        return false;
      }

      // Filtro por área
      if (
        filters.minArea &&
        property.square_meters < parseFloat(filters.minArea)
      ) {
        return false;
      }
      if (
        filters.maxArea &&
        property.square_meters > parseFloat(filters.maxArea)
      ) {
        return false;
      }

      // Filtro por tipo de transacción
      if (filters.transactionType.length > 0) {
        if (filters.transactionType.includes("ambos")) {
          // No filtrar si seleccionó ambos
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
      if (filters.bedrooms) {
        const bedsNeeded =
          filters.bedrooms === "+6" ? 6 : parseInt(filters.bedrooms);
        if (property.bedrooms < bedsNeeded) {
          return false;
        }
      }

      return true;
    });

    setFilteredProperties(filtered);
  };

  if (loading) {
    return (
      <div>
        <Navbar type={"noLogged"} />
        <div className="mt-16 mx-auto max-w-[1227px] text-center">
          Cargando propiedades...
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar type={"noLogged"} />
      <FillterComponent onFilter={applyFilters} />

      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <CardComponent key={property.property_id} property={property} />
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

export default MainBoardNoLogged;
