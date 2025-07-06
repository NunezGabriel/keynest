"use client";
import Image from "next/image";
import CardComponent from "@/components/cardComponent";
import TeamSection from "@/components/dashboard/TeamSection";
import UniversalButton from "@/components/buttons/UniversalButton";
import { useAuth } from "@/context/AuthContext";
import { useProperty } from "@/context/PropertyContext";
import { useEffect, useState, useCallback } from "react";
import { HashLoader } from "react-spinners";

const HomeSeeker = () => {
  const { user } = useAuth();
  const { getProperties, getFavoriteProperties } = useProperty();
  const [randomProperties, setRandomProperties] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const [propertiesData, favoritesData] = await Promise.all([
        getProperties(),
        user?.user_type === "seeker"
          ? getFavoriteProperties()
          : Promise.resolve([]),
      ]);

      // Filtrar propiedades disponibles
      const disponibles = propertiesData.filter(
        (prop) => prop.status === "disponible"
      );

      // Elegir 3 al azar
      const shuffled = disponibles.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      setRandomProperties(selected);

      // Guardar favoritos
      const extractedIds = favoritesData.map(
        (fav) => fav.property_id || fav?.property?.property_id || fav.id
      );
      setFavoriteIds(extractedIds);
    } catch (error) {
      console.error("Error al obtener propiedades o favoritos:", error);
    }
  }, [getProperties, getFavoriteProperties, user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const isPropertyFavorite = (propertyId) => {
    return favoriteIds.includes(propertyId);
  };

  return (
    <div className="">
      {/* Banner */}
      <div className="relative flex justify-center items-center w-full overflow-hidden bg-white md:mb-14 h-[300px] sm:h-[500px] md:h-[600px]">
        <Image
          src="bigbackground.svg"
          alt="Descripción"
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extralight text-[#484848]">
            Conoce tu nuevo hogar {user?.name || "Comprador"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#7c7c7c]">
            La forma más sencilla de encontrar donde perteneces
          </p>
        </div>
      </div>

      {/* Título */}
      <div className="text-center mb-14">
        <p className="text-lg text-[#373737] mb-4">
          Encuentra el apartamento de tus sueños
        </p>
        <h1 className="text-4xl text-[#1290CB] font-light tracking-[0.25px]">
          Casas en alquiler a los mejores precios
        </h1>
      </div>

      {/* Propiedades aleatorias */}
      <div className="w-full flex justify-center flex-wrap gap-24 mb-24">
        {randomProperties.length > 0 ? (
          randomProperties.map((property) => (
            <CardComponent
              key={property.property_id}
              property={property}
              type={isPropertyFavorite(property.property_id) ? "liked" : ""}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center mt-40">
            <HashLoader color="#1290CB" size={50} />
            <div className="text-center mt-20 text-[#1290CB]">
              Cargando Propiedades
            </div>
          </div>
        )}
      </div>

      {/* Sección de CTA */}
      <div className="w-full bg-[#bad8e7]">
        <div className="text-center flex flex-col justify-center items-center p-16 gap-8 max-w-[1000px] mx-auto">
          <h1 className="text-4xl text-[#373737] font-light tracking-[0.25px]">
            Conseguir tu primer apartamento nunca ha sido tan fácil
          </h1>
          <UniversalButton
            text={"REVISA TUS GUARDADOS"}
            type="primary"
            href={"/register"}
          />
        </div>
      </div>

      <TeamSection />
    </div>
  );
};

export default HomeSeeker;
