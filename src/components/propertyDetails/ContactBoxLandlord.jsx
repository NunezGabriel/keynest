"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useProperty } from "@/context/PropertyContext";

const ContactBoxLandlord = ({ propertyId }) => {
  const { user } = useAuth();
  const { getMessages, deleteMessage, getProperty } = useProperty();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Verificar si el usuario es dueño de la propiedad
        const property = await getProperty(propertyId);
        setIsOwner(property.user_id === user?.id);

        if (property.user_id !== user?.id) {
          setError(
            "Mensajes no disponibles en esta propiedad porque no es tuya"
          );
          return;
        }

        // 2. Cargar mensajes solo si es el dueño
        const messagesData = await getMessages(propertyId);
        setMessages(messagesData);
      } catch (error) {
        console.error("Error:", error);
        setError(
          error.message.includes(403)
            ? "No tienes permiso para ver estos mensajes"
            : "Error al cargar los mensajes"
        );
      } finally {
        setLoading(false);
      }
    };

    if (user?.user_type === "landlord" && propertyId) {
      loadData();
    }
  }, [propertyId, user]);

  const handleDelete = async (messageId) => {
    try {
      await deleteMessage(messageId);
      setMessages(messages.filter((msg) => msg.id !== messageId));
    } catch (error) {
      console.error("Error eliminando mensaje:", error);
      setError("Error al eliminar el mensaje");
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
        <p>Cargando mensajes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Mensajes recibidos</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Mensajes recibidos</h2>

      {messages.length === 0 ? (
        <p>No hay mensajes para esta propiedad</p>
      ) : (
        <div className="space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className="border p-3 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">
                    {msg.sender?.name || "Usuario desconocido"}
                  </p>
                  <p className="text-sm text-gray-600">{msg.content}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(msg.created_at).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="text-red-500 text-xs hover:text-red-700"
                  title="Eliminar mensaje"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactBoxLandlord;
