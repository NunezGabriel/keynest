"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";

const ContactBoxSeeker = ({ propertyId }) => {
  const { user } = useAuth();
  const {
    isPropertyFavorite,
    addFavorite,
    removeFavorite,
    getFavoriteProperties,
  } = useProperty();
  const [favoriteState, setFavoriteState] = useState({
    isFavorite: false,
    favoriteId: null,
    loading: true,
  });

  // Verificar estado del favorito
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (user && propertyId) {
        try {
          const result = await isPropertyFavorite(propertyId);
          setFavoriteState({
            isFavorite: result.isFavorite,
            favoriteId: result.id, // Usamos result.id en lugar de result.favoriteId
            loading: false,
          });
        } catch (error) {
          console.error("Error checking favorite:", error);
          setFavoriteState((prev) => ({
            ...prev,
            loading: false,
          }));
        }
      } else {
        setFavoriteState({
          isFavorite: false,
          favoriteId: null,
          loading: false,
        });
      }
    };

    checkFavoriteStatus();
  }, [user, propertyId]);

  const handleFavoriteToggle = async () => {
    if (!user || favoriteState.loading) return;

    setFavoriteState((prev) => ({ ...prev, loading: true }));

    try {
      if (favoriteState.isFavorite) {
        // Eliminar favorito
        if (favoriteState.favoriteId) {
          await removeFavorite(favoriteState.favoriteId);
          setFavoriteState({
            isFavorite: false,
            favoriteId: null,
            loading: false,
          });
        } else {
          console.error("No favoriteId found to remove");
          // Recargar el estado real si falta el ID
          const currentStatus = await isPropertyFavorite(propertyId);
          setFavoriteState({
            isFavorite: currentStatus.isFavorite,
            favoriteId: currentStatus.id,
            loading: false,
          });
        }
      } else {
        // Agregar favorito
        const response = await addFavorite(propertyId);
        setFavoriteState({
          isFavorite: true,
          favoriteId: response.id, // Asume que la API devuelve el ID creado
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      setFavoriteState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  if (favoriteState.loading) {
    return (
      <div className="flex items-center justify-center">
        <AiOutlineHeart className="text-gray-400 text-xl" />
        <span className="text-gray-400 ml-2 text-sm">Cargando...</span>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={handleFavoriteToggle}
    >
      {favoriteState.isFavorite ? (
        <>
          <AiFillHeart className="text-red-500 text-xl" />
          <span className="text-gray-400 ml-2 text-sm">
            Quitar de favoritos
          </span>
        </>
      ) : (
        <>
          <AiOutlineHeart className="text-gray-400 text-xl" />
          <span className="text-gray-400 ml-2 text-sm">Añadir a favoritos</span>
        </>
      )}
    </div>
  );
};

export default ContactBoxSeeker;
