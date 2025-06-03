import Image from "next/image";
import CardComponent from "@/components/cardComponent";
import TeamSection from "@/components/dashboard/TeamSection";
import UniversalButton from "@/components/buttons/UniversalButton";

const HomeGuest = () => {
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
            Conoce tu nuevo hogar
          </h1>
          <p className="text-xl mb-6 text-[#7c7c7c]">
            La forma más sencilla de encontrar donde perteneces
          </p>
        </div>
      </div>
      <div className="text-center mb-14">
        <p className="text-lg text-[#373737] mb-4">
          Encuentra de apartamento de tus sueños
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
            text={"CREA UNA CUENTA AHORA"}
            type="primary"
            href={"/register"}
          />
        </div>
      </div>
      <TeamSection />
    </div>
  );
};

export default HomeGuest;
