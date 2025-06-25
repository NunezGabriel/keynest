"use client";

import { useAuth } from "@/context/AuthContext";
import AdminOptions from "@/views/admin/AdminOptions";

import MainBoardLandlord from "@/views/main/MainBBoardLandlord";
import MainBoardNoLogged from "@/views/main/MainBoardNoLogged";
import MainBoardSeeker from "@/views/main/MainBoardSeeker";

const MainBoard = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (!user) return <MainBoardNoLogged />;

  if (user.user_type === "seeker") return <MainBoardSeeker />;

  if (user.user_type === "landlord") return <MainBoardLandlord />;
  if (user.user_type === "admin") return <AdminOptions />;

  return <MainBoardNoLogged />; // fallback por si el rol es desconocido
};

export default MainBoard;
