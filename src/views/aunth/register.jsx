import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div className="relative">
      <div className="w-full h-[352px] bg-[#bad8e7] text-center py-16">
        <p className="text-2xl text-[#373737] font-light tracking-[0.25px]">
          Selecciona el perfil con el que te identificas
        </p>
        <h1 className="text-6xl text-[#373737] font-light tracking-[0.25px]">
          Que estas buscando?
        </h1>
      </div>

      <section className="md:fixed md:inset-0 md:flex md:items-center md:justify-center md:z-10 md:pointer-events-none">
        <div className="flex flex-col md:flex-row gap-4 md:gap-14 justify-center items-center p-4 md:p-0 md:pointer-events-auto">
          <Link
            href={"/aunth/register/landlord-register"}
            className="bg-white rounded-lg shadow-md w-full max-w-[280px] p-5 flex flex-col text-center gap-4 border border-gray-200 hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <Image
              src={"/landlord.png"}
              width={240}
              height={180}
              alt="Propietario"
              className="mx-auto"
            />
            <div>
              <h1 className="text-xl font-medium">Propietario</h1>
              <p className="text-gray-600">Quieres rentar o vender una casa</p>
            </div>
          </Link>

          <Link
            href={"/aunth/register/seeker-register"}
            className="bg-white rounded-lg shadow-md w-full max-w-[280px] p-5 flex flex-col text-center gap-4 border border-gray-200 hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <Image
              src={"/seeker.png"}
              width={240}
              height={180}
              alt="Buscador"
              className="mx-auto"
            />
            <div>
              <h1 className="text-xl font-medium">Buscador</h1>
              <p className="text-gray-600">Quieres encontrar una propiedad</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
