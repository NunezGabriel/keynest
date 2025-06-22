"use client";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix para iconos en Next.js
const DefaultIcon =
  typeof window !== "undefined"
    ? L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
    : null;

const DEFAULT_LOCATION = {
  lat: -16.3989,
  lng: -71.535,
  address: "Plaza de Armas de Arequipa, Perú",
};

export default function PropertyMap({ address }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // 1. Inicialización segura del mapa
  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // 2. Control principal del mapa
  useEffect(() => {
    if (!isMounted || !mapContainerRef.current) return;

    const initializeMap = () => {
      if (!mapInstanceRef.current) {
        mapInstanceRef.current = L.map(mapContainerRef.current, {
          zoomControl: false,
        }).setView([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], 15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap",
        }).addTo(mapInstanceRef.current);
      }
      return mapInstanceRef.current;
    };

    const updateMap = async () => {
      const map = initializeMap();

      try {
        // Limpiar marcador existente
        if (markerRef.current) {
          map.removeLayer(markerRef.current);
        }

        // Geocodificación solo si hay dirección
        if (address) {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              address
            )}`
          );
          const data = await response.json();

          if (data.length > 0) {
            const { lat, lon } = data[0];
            map.setView([lat, lon], 15);
            markerRef.current = L.marker([lat, lon], { icon: DefaultIcon })
              .addTo(map)
              .bindPopup(address);
            return;
          }
        }

        // Fallback a ubicación por defecto
        map.setView([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], 15);
        markerRef.current = L.marker(
          [DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng],
          { icon: DefaultIcon }
        )
          .addTo(map)
          .bindPopup(
            address
              ? `No se encontró la ubicación exacta. Mostrando: ${DEFAULT_LOCATION.address}`
              : DEFAULT_LOCATION.address
          );
      } catch (error) {
        console.error("Error en geocodificación:", error);
        // Mínimo fallback
        if (map && !map._container) return;
        map.setView([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], 15);
      }
    };

    updateMap();

    return () => {
      if (markerRef.current && mapInstanceRef.current) {
        mapInstanceRef.current.removeLayer(markerRef.current);
      }
    };
  }, [address, isMounted]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-[300px] rounded-lg border border-gray-200"
    />
  );
}
