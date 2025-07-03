"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";
import UniversalButton from "../buttons/UniversalButton";

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
    <div className="flex flex-col gap-4 items-center justify-center cursor-pointer bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto text-center">
      <div
        className="flex flex-col gap-2 items-center justify-center cursor-pointer bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto text-center"
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
            <span className="text-gray-400 text-sm">Añadir a favoritos</span>
          </>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-md w-full max-w-sm mx-auto text-center">
        <div>
          <div className="text-[#1290CB]">Nombre</div>
          <div className="text-black">gabriel nunez</div>
        </div>
        <div className="mb-4">
          <div className="text-[#1290CB]">Correo</div>
          <div className="text-black">gabriel@mail.com</div>
        </div>
      </div>
      <form action="" className="">
        <textarea
          name="mensaje"
          placeholder="Envia un mensaje al propietario"
          // value={""}
          // onChange={""}
          required
          rows={4}
          className="w-full border border-[#1290CB] p-2 rounded-lg"
        />
        <UniversalButton type="submit" text={"Enviar mensaje"} />
      </form>
    </div>
  );
};

export default ContactBoxSeeker;
