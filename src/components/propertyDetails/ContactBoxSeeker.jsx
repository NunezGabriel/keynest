import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ContactBoxSeeker = () => {
  const [favorito, setFavorito] = useState(false);

  const manejarFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <div className="border border-gray-300 rounded-xl p-5 text-center w-72 mx-auto bg-white shadow-md">
      <button className="bg-[#1290CB] hover:bg-[#0d7cb0] text-white rounded-lg px-4 py-2 text-sm w-full whitespace-nowrap transition-colors duration-200">
        CONTACTAR AL ANUNCIANTE
      </button>
      <div
        className="flex items-center justify-center cursor-pointer mt-3"
        onClick={manejarFavorito}
      >
        {favorito ? (
          <AiFillHeart className="text-red-500 text-xl" />
        ) : (
          <AiOutlineHeart className="text-gray-400 text-xl" />
        )}
        <span className="text-gray-400 ml-2 text-sm">Añadir a favoritos</span>
      </div>
    </div>
  );
};

export default ContactBoxSeeker;
