"use client";
import UniversalButton from "../buttons/UniversalButton";
import { FaUserAlt } from "react-icons/fa";

const CardUsers = ({ user, onDelete }) => {
  return (
    <div className="bg-white rounded-md p-6 md:min-w-[520px] gap-6 flex flex-col overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="flex justify-between items-center">
        <FaUserAlt size={100} className="text-black" />
        <h1 className="max-w-[200px] text-2xl">{user.name}</h1>
        <span
          className={`px-3 py-1 rounded-lg ${
            user.user_type === "landlord"
              ? "bg-[#e4aaff] text-[#ae00ff]"
              : user.user_type === "admin"
              ? "bg-[#f7ffab] text-[#ffae00]"
              : "bg-[#abe5ff] text-[#0088c7]"
          }`}
        >
          {user.user_type}
        </span>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="font-semibold">Correo:</p>
          <p>{user.email}</p>
        </div>
        <div>
          <p className="font-semibold">Contraseña:</p>
          <p className="italic text-gray-400">••••••••</p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex justify-between gap-2">
          <UniversalButton text={"EDITAR"} color="amarillito" />
          <UniversalButton
            text={"ELIMINAR"}
            color="rojito"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default CardUsers;
