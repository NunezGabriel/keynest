"use client";

import { useAuth } from "@/context/AuthContext";
import AdminOptions from "@/views/admin/AdminOptions";

import MainBoardLandlord from "@/views/main/MainBBoardLandlord";
import MainBoardNoLogged from "@/views/main/MainBoardNoLogged";
import MainBoardSeeker from "@/views/main/MainBoardSeeker";
import { HashLoader } from "react-spinners";

const MainBoard = () => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <>
        <HashLoader color="#1290CB" size={50} />
        <div className="text-center mt-20 text-[#1290CB]">Cargando</div>;
      </>
    );

  if (!user) return <MainBoardNoLogged />;

  if (user.user_type === "seeker") return <MainBoardSeeker />;

  if (user.user_type === "landlord") return <MainBoardLandlord />;
  if (user.user_type === "admin") return <AdminOptions />;

  return <MainBoardNoLogged />; // fallback por si el rol es desconocido
};

export default MainBoard;
