import React from "react";

const ContactBoxLandlord = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto text-center">
      <h1 className="text-xl font-bold mb-4 whitespace-nowrap">
        Información de Contacto
      </h1>
      <div>
        <div className="text-[#1290CB]">Nombre</div>
        <div className="text-black">gabriel nunez</div>
      </div>
      <div className="mb-4">
        <div className="text-[#1290CB]">Correo</div>
        <div className="text-black">gabriel@mail.com</div>
      </div>
    </div>
  );
};

export default ContactBoxLandlord;
