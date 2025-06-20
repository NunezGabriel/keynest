"use client";
import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const { fetchWithToken, user } = useAuth();

  // 🏠 Obtener todas las propiedades
  const getProperties = async () => {
    const res = await fetchWithToken("http://localhost:8000/api/properties");
    return await res.json();
  };

  const getMyProperties = async () => {
    const res = await fetchWithToken(
      "http://localhost:8000/api/properties/mine"
    );
    return await res.json();
  };

  // 🔍 Obtener una propiedad por ID
  const getProperty = async (id) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/properties/${id}`
    );
    return await res.json();
  };

  // ➕ Crear propiedad (solo para landlords)
  const createProperty = async (propertyData) => {
    const res = await fetchWithToken("http://localhost:8000/api/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(propertyData),
    });
    return await res.json();
  };

  // ✏️ Actualizar propiedad
  const updateProperty = async (id, propertyData) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/properties/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      }
    );
    return await res.json();
  };

  // 🗑️ Eliminar propiedad
  const deleteProperty = async (id) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/properties/${id}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
  };

  // ❤️ Obtener propiedades favoritas
  const getFavoriteProperties = async () => {
    const res = await fetchWithToken("http://localhost:8000/api/favorites");
    return await res.json();
  };

  // ❤️ Dar like a una propiedad
  const addFavorite = async (propertyId) => {
    const res = await fetchWithToken("http://localhost:8000/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ property_id: propertyId }),
    });
    return await res.json();
  };

  // ❤️ Quitar like a una propiedad
  const removeFavorite = async (favoriteId) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/favorites/${favoriteId}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
  };

  // ❤️ Verificar si una propiedad es favorita
  const isPropertyFavorite = async (propertyId) => {
    if (!user) return false;

    try {
      const favorites = await getFavoriteProperties();
      return favorites.some((fav) => fav.property?.property_id === propertyId);
    } catch (error) {
      console.error("Error verificando favorito:", error);
      return false;
    }
  };

  return (
    <PropertyContext.Provider
      value={{
        getProperties,
        getMyProperties,
        getProperty,
        createProperty,
        updateProperty,
        deleteProperty,
        // Funciones de favoritos
        getFavoriteProperties,
        addFavorite,
        removeFavorite,
        isPropertyFavorite,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
