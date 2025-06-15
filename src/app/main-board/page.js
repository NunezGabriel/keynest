"use client";

import { useAuth } from "@/context/AuthContext";

import MainBoardLandlord from "@/views/main/MainBBoardLandlord";
import MainBoardNoLogged from "@/views/main/MainBoardNoLogged";
import MainBoardSeeker from "@/views/main/MainBoardSeeker";

const MainBoard = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (!user) return <MainBoardNoLogged />;

  if (user.user_type === "seeker") return <MainBoardSeeker />;

  if (user.user_type === "landlord") return <MainBoardLandlord />;

  return <MainBoardNoLogged />; // fallback por si el rol es desconocido
};

export default MainBoard;
