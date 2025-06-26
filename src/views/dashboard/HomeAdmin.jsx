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
      <div className="relative flex justify-center items-center w-full overflow-hidden bg-white md:mb-14">
        <Image
          src="bigbackground.svg"
          alt="Descripción"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto"
          style={{ objectPosition: "center" }}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-5">
          <h1 className="text-6xl mb-4 font-extralight text-[#484848]">
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

      <div className="flex justify-center items-center flex-col md:flex-row">
        <div>
          <FaTools size={90} color="#0093d1" />
        </div>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-3xl font-semibold text-center mb-5">
            Tienes Algun problema con la plataforma?
          </h2>
          <p className="text-center text-lg text-gray-600 mb-6">
            puedes contactar con el equipo desarrollador mediante sus redes
          </p>
        </div>
      </div>

      <TeamSection />
    </div>
  );
};

export default HomeAdmin;
