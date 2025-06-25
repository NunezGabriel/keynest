import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";

const AdminOptions = () => {
  return (
    <div>
      <section className="flex flex-wrap gap-20 mx-auto">
        <div className="shadow-lg w-[320px] h-[380px] rounded-lg flex flex-col gap-12 justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <GoHomeFill size={120} color="#1290CB" />
          <h1 className="text-2xl">Gestionar Propiedades</h1>
        </div>
        <div className="shadow-lg w-[320px] h-[380px] rounded-lg flex flex-col gap-12 justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <FaUser size={120} color="#1290CB" />
          <h1 className="text-2xl">Gestionar Usuarios</h1>
        </div>
        <div className="shadow-lg w-[320px] h-[380px] rounded-lg flex flex-col gap-12 justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <ImStatsBars size={120} color="#1290CB" />
          <h1 className="text-2xl">Ver Estadisticas</h1>
        </div>
      </section>
    </div>
  );
};

export default AdminOptions;

// No te huevees con el nombre ps esto es prueba
