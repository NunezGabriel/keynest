"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const ContactBoxSeeker = ({ propertyId }) => {
  const { user } = useAuth();
  const {
    isPropertyFavorite,
    addFavorite,
    removeFavorite,
    sendMessage,
    getProperty,
  } = useProperty();
  const [message, setMessage] = useState("");
  const [favoriteState, setFavoriteState] = useState({
    isFavorite: false,
    favoriteId: null,
    loading: true,
  });
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obtener información de la propiedad y el landlord
  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const data = await getProperty(propertyId);
        setPropertyData(data);

        // Verificar si la propiedad es favorita
        if (user) {
          const result = await isPropertyFavorite(propertyId);
          setFavoriteState({
            isFavorite: result.isFavorite,
            favoriteId: result.id,
            loading: false,
          });
        } else {
          setFavoriteState({
            isFavorite: false,
            favoriteId: null,
            loading: false,
          });
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [propertyId, user]);

  const handleFavoriteToggle = async () => {
    if (!user || favoriteState.loading) return;

    setFavoriteState((prev) => ({ ...prev, loading: true }));

    try {
      if (favoriteState.isFavorite) {
        if (favoriteState.favoriteId) {
          await removeFavorite(favoriteState.favoriteId);
          setFavoriteState({
            isFavorite: false,
            favoriteId: null,
            loading: false,
          });
        }
      } else {
        const response = await addFavorite(propertyId);
        setFavoriteState({
          isFavorite: true,
          favoriteId: response.id,
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

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(propertyId, message);
      setMessage("");
      toast.success("Mensaje enviado con éxito");
    } catch (error) {
      console.error("Error enviando mensaje:", error);
      toast.error("Error al enviar el mensaje");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <AiOutlineHeart className="text-gray-400 text-xl" />
        <span className="text-gray-400 ml-2 text-sm">Cargando...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center cursor-pointer bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto text-center">
      {user && (
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
      )}

      <div className="bg-white rounded-lg shadow-md w-full max-w-sm mx-auto text-center">
        <div>
          <div className="text-[#1290CB]">Nombre del Propietario</div>
          <div className="text-black">
            {propertyData?.user?.name ||
              propertyData?.landlord?.name ||
              "No disponible"}
          </div>
        </div>
        <div className="mb-4">
          <div className="text-[#1290CB]">Correo del Propietario</div>
          <div className="text-black">
            {propertyData?.user?.email ||
              propertyData?.landlord?.email ||
              "No disponible"}
          </div>
        </div>
      </div>

      {user && (
        <form onSubmit={handleSendMessage}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Envía un mensaje al propietario"
            required
            rows={4}
            className="w-full border border-[#1290CB] p-2 rounded-lg mb-2"
          />
          <button
            type="submit"
            className="bg-[#1290CB] hover:bg-[#0d7cb0] text-white rounded-lg px-4 py-2 text-sm w-full"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactBoxSeeker;
