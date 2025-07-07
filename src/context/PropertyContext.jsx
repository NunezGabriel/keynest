"use client";
import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const { fetchWithToken, user } = useAuth();

  // Obtener todas las propiedades
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

  // Obtener una propiedad por ID
  const getProperty = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/properties/details/${id}`
      );
      if (!res.ok) throw new Error("Propiedad no encontrada");
      return await res.json();
    } catch (error) {
      console.error("Error fetching property:", error);
      return { error: error.message };
    }
  };

  // Crear propiedad (solo para landlords)
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

  // Actualizar propiedad
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

  // Eliminar propiedad
  const deleteProperty = async (id) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/properties/${id}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
  };

  // Cerrar propiedad
  const closeProperty = async (id) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/properties/${id}/close`,
      {
        method: "PATCH",
      }
    );
    return await res.json();
  };

  // Reabrir propiedad
  const reopenProperty = async (id) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/properties/${id}/reopen`,
      {
        method: "PATCH",
      }
    );
    return await res.json();
  };

  // Nueva función para admins  - todas las favoritas
  const getAllFavorites = async () => {
    const res = await fetchWithToken("http://localhost:8000/api/favorites/all");
    return await res.json();
  };

  // Obtener propiedades favoritas por usuario
  const getFavoriteProperties = async () => {
    const res = await fetchWithToken("http://localhost:8000/api/favorites");
    return await res.json();
  };

  // Dar like a una propiedad
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

  // Quitar like a una propiedad
  const removeFavorite = async (favoriteId) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/favorites/${favoriteId}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
  };

  // Verificar si una propiedad es favorita
  const isPropertyFavorite = async (propertyId) => {
    if (!user) return { isFavorite: false, id: null };

    try {
      const favorites = await getFavoriteProperties();
      console.log("Favoritos recibidos:", favorites);

      const favorite = favorites.find(
        (fav) =>
          fav.property_id === propertyId ||
          (fav.property && fav.property.property_id === propertyId)
      );

      return {
        isFavorite: !!favorite,
        id: favorite?.favorite_id || null,
      };
    } catch (error) {
      console.error("Error verificando favorito:", error);
      return { isFavorite: false, id: null };
    }
  };

  const sendMessage = async (propertyId, content) => {
    const res = await fetchWithToken("http://localhost:8000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ property_id: propertyId, content }),
    });
    return await res.json();
  };

  const getMessages = async (propertyId) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/messages/${propertyId}`
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || "Error al obtener mensajes");
    }

    const data = await res.json();
    console.log("Mensajes recibidos:", data);
    return data;
  };

  const deleteMessage = async (messageId) => {
    const res = await fetchWithToken(
      `http://localhost:8000/api/messages/${messageId}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
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
        closeProperty,
        reopenProperty,
        getFavoriteProperties,
        addFavorite,
        removeFavorite,
        isPropertyFavorite,
        getAllFavorites,
        sendMessage,
        getMessages,
        deleteMessage,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
