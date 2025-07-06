"use client";

import { useState, useEffect, useCallback } from "react";
import FillterComponent from "@/components/mainBoard/fillterComponent";
import Navbar from "@/components/Navbar";
import CardComponent from "@/components/cardComponent";
import Footer from "@/components/footer";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";
import { HashLoader } from "react-spinners";

const MainBoardSeeker = () => {
  const { getProperties, getFavoriteProperties } = useProperty();
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState([]);

  // Obtener todas las propiedades y favoritos en paralelo
  // Modifica la función fetchData:
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [propertiesData, favoritesData] = await Promise.all([
        getProperties(),
        user?.user_type === "seeker"
          ? getFavoriteProperties()
          : Promise.resolve([]),
      ]);

      // Filtra solo propiedades disponibles
      const availableProperties = propertiesData.filter(
        (prop) => prop.status === "disponible"
      );

      const extractedFavoriteIds = favoritesData.map(
        (fav) => fav.property_id || fav?.property?.property_id || fav.id
      );

      setProperties(availableProperties);
      setFilteredProperties(availableProperties);
      setFavoriteIds(extractedFavoriteIds);
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    } finally {
      setLoading(false);
    }
  }, [getProperties, getFavoriteProperties, user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  // Función optimizada para verificar favoritos
  const isPropertyFavorite = (propertyId) => {
    return favoriteIds.includes(propertyId);
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
      <Navbar type={"seekerLog"} />
      <FillterComponent onFilter={applyFilters} />

      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <CardComponent
              key={property.property_id}
              property={property}
              type={isPropertyFavorite(property.property_id) ? "liked" : ""}
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

export default MainBoardSeeker;
