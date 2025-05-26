import { FaGithub, FaHeart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Columna 1 - Título */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <AiFillHome size={28} className="text-blue-500" />
            <h1 className="text-xl font-bold text-blue-600">KEYNEST</h1>
          </div>
          <p>© 2025 - KeyNest</p>
          <p>Tecsup - C24 - Tercer Semestre</p>
        </div>

        {/* Columna 2 - Integrantes */}
        <div>
          <p className="mb-2">
            Build with <FaHeart className="inline text-blue-500" /> by:
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {[
              "Gabriel Nunez",
              "Joshua Salazar",
              "Andrew Alca",
              "Kelvin Pinto",
            ].map((name, i) => (
              <div key={i} className="flex items-center gap-1">
                <FaGithub />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna 3 - Source code */}
        <div>
          <p className="mb-2 font-medium text-center md:text-left">
            Source code:
          </p>
          <div className="grid grid-cols-2 gap-4 justify-items-start max-w-44 mx-auto md:mx-0">
            <div className="flex items-center gap-2">
              <SiLaravel className="text-red-600" />
              <span>Laravel</span>
            </div>
            <div className="flex items-center gap-2">
              <SiMongodb className="text-green-600" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center gap-2">
              <SiNextdotjs className="text-black" />
              <span>NextJS</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss className="text-blue-500" />
              <span>Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
