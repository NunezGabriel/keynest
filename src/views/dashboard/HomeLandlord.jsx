"use client";
import Image from "next/image";
import CardComponent from "@/components/cardComponent";
import TeamSection from "@/components/dashboard/TeamSection";
import UniversalButton from "@/components/buttons/UniversalButton";
import { useAuth } from "@/context/AuthContext";

const HomeLandlord = () => {
  const { user } = useAuth();
  return (
    <div className="">
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
            Vende tu primer hogar {user?.name || "Comprador"}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#7c7c7c]">
            La forma más sencilla de encontrar compradores
          </p>
        </div>
      </div>
      <div className="text-center mb-14">
        <p className="text-lg text-[#373737] mb-4">
          mira y compara con la competencia
        </p>
        <h1 className="text-4xl text-[#1290CB] font-light tracking-[0.25px]">
          Casas en alquiler a los mejores precios
        </h1>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-24 mb-24">
        {[0, 1, 0].map((estado, i) => (
          <CardComponent key={i} estado={estado} />
        ))}
      </div>

      <div className="w-full bg-[#bad8e7]">
        <div className="text-center flex flex-col justify-center items-center p-16 gap-8 max-w-[1000px] mx-auto">
          <h1 className="text-4xl text-[#373737] font-light tracking-[0.25px]">
            Conseguir que alguien alquile tu apartamento nunca ha sido tan fácil
          </h1>
          <UniversalButton
            text={"REVISA TUS PROPIEDADES"}
            type="primary"
            href={"/register"}
          />
        </div>
      </div>
      <TeamSection />
    </div>
  );
};

export default HomeLandlord;
