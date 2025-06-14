"use client";
import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const { fetchWithToken, user } = useAuth(); // Usamos tu función fetchWithToken del AuthContext

  // 🏠 Obtener todas las propiedades
  const getProperties = async () => {
    const res = await fetchWithToken("http://localhost:8000/api/properties");
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

  return (
    <PropertyContext.Provider
      value={{
        getProperties,
        getProperty,
        createProperty,
        updateProperty,
        deleteProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
