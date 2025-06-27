import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import Link from "next/link";

const AdminOptions = () => {
  return (
    <div className="bg-[#F2F0F0]">
      <Navbar type={"admin"} />

      <div className="flex flex-wrap gap-20 justify-center mt-10 md:mt-20">
        <h1 className="text-5xl font-light text-center">
          Elije la funcion que usaras
        </h1>
      </div>

      <section className="flex flex-wrap gap-20 justify-center mt-10 md:mt-30 mb-14">
        <Link
          href={"/main-board/propertyManagement"}
          className="shadow-lg w-[330px] h-[380px] rounded-lg flex flex-col gap-12 justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-white"
        >
          <GoHomeFill size={120} color="#1290CB" />
          <h1 className="text-2xl">Gestionar Propiedades</h1>
        </Link>
        <Link
          href={"/main-board/userManagement"}
          className="shadow-lg w-[330px] h-[380px] rounded-lg flex flex-col gap-12 justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-white"
        >
          <FaUser size={120} color="#1290CB" />
          <h1 className="text-2xl">Gestionar Usuarios</h1>
        </Link>
        <Link
          href={"/main-board/stats"}
          className="shadow-lg w-[330px] h-[380px] rounded-lg flex flex-col gap-12 justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-white"
        >
          <ImStatsBars size={120} color="#1290CB" />
          <h1 className="text-2xl">Ver Estadisticas</h1>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default AdminOptions;
