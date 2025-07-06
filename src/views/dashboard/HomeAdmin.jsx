"use client";
import { useAuth } from "@/context/AuthContext";
import UniversalButton from "@/components/buttons/UniversalButton";
import TeamSection from "@/components/dashboard/TeamSection";
import Image from "next/image";
import { FaTools } from "react-icons/fa";

const HomeAdmin = () => {
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
            Bienvenido de nuevo {user?.name || "Administrador"}
          </h1>
          <p className="text-xl mb-6 text-[#7c7c7c]">Que haremos hoy?</p>
          <UniversalButton
            text={"EMPEZAR"}
            type="primary"
            href={"/main-board"}
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row py-16">
        <div>
          <FaTools size={90} color="#0093d1" />
        </div>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-3xl font-semibold text-center mb-5">
            Tienes Algun problema con la plataforma?
          </h2>
          <p className="text-center text-lg text-gray-600">
            puedes contactar con el equipo desarrollador mediante sus redes
          </p>
        </div>
      </div>

      <TeamSection />
    </div>
  );
};

export default HomeAdmin;
