"use client";

import { useState, useEffect, useCallback } from "react";
import FillterComponent from "@/components/mainBoard/fillterComponent";
import Navbar from "@/components/Navbar";
import CardComponent from "@/components/cardComponent";
import Footer from "@/components/footer";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";

const MainBoardSeeker = () => {
  const { getProperties, getFavoriteProperties } = useProperty();
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState([]);

  // Obtener todas las propiedades y favoritos en paralelo
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      console.log("[DEBUG] Iniciando carga de datos...");

      const [propertiesData, favoritesData] = await Promise.all([
        getProperties(),
        user?.user_type === "seeker"
          ? getFavoriteProperties()
          : Promise.resolve([]),
      ]);

      // Extraer solo los IDs de propiedades favoritas
      const extractedFavoriteIds = favoritesData.map(
        (fav) => fav.property_id || fav?.property?.property_id || fav.id
      );

      console.log(
        "[DEBUG] Todos los IDs de propiedades:",
        propertiesData.map((p) => p.property_id)
      );
      console.log(
        "[DEBUG] IDs de propiedades favoritas:",
        extractedFavoriteIds
      );

      // Calcular IDs no favoritos
      const nonFavoriteIds = propertiesData
        .map((p) => p.property_id)
        .filter((id) => !extractedFavoriteIds.includes(id));
      console.log("[DEBUG] IDs de propiedades NO favoritas:", nonFavoriteIds);

      setProperties(propertiesData);
      setFilteredProperties(propertiesData);
      setFavoriteIds(extractedFavoriteIds);

      // Verificación de consistencia
      if (extractedFavoriteIds.length > 0) {
        console.log(
          "[DEBUG] Ejemplo de propiedad favorita:",
          propertiesData.find((p) => p.property_id === extractedFavoriteIds[0])
        );
      }
      if (nonFavoriteIds.length > 0) {
        console.log(
          "[DEBUG] Ejemplo de propiedad NO favorita:",
          propertiesData.find((p) => p.property_id === nonFavoriteIds[0])
        );
      }
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    } finally {
      setLoading(false);
    }
  }, [getProperties, getFavoriteProperties, user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Función optimizada para verificar favoritos
  const isPropertyFavorite = (propertyId) => {
    return favoriteIds.includes(propertyId);
  };

  // Debug detallado al renderizar
  const renderPropertyCards = () => {
    if (filteredProperties.length === 0) {
      return (
        <div className="w-full text-center text-gray-500 py-12">
          No se encontraron propiedades con los filtros aplicados
        </div>
      );
    }

    return filteredProperties.map((property) => {
      const isFav = isPropertyFavorite(property.property_id);
      console.log(
        `[RENDER] Propiedad ID: ${
          property.property_id
        } | Favorita: ${isFav} | Tipo: ${isFav ? "liked" : "normal"}`
      );

      return (
        <CardComponent
          key={property.property_id}
          property={property}
          type={isFav ? "liked" : ""}
        />
      );
    });
  };

  if (loading) {
    return (
      <div>
        <Navbar type={"seekerLog"} />
        <div className="mt-16 mx-auto max-w-[1227px] text-center">
          Cargando propiedades...
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar type={"seekerLog"} />
      <FillterComponent
        onFilter={(filters) => {
          const filtered = properties.filter((property) => {
            if (
              filters.propertyType &&
              property.property_type !== filters.propertyType
            ) {
              return false;
            }
            if (filters.minPrice && property.price < filters.minPrice) {
              return false;
            }
            if (filters.maxPrice && property.price > filters.maxPrice) {
              return false;
            }
            return true;
          });
          setFilteredProperties(filtered);
        }}
      />

      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24">
        {renderPropertyCards()}
      </section>
      <Footer />
    </div>
  );
};

export default MainBoardSeeker;
