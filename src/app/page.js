"use client";

import { useAuth } from "@/context/AuthContext";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import HomeGuest from "@/views/dashboard/HomeGuest";
import HomeSeeker from "@/views/dashboard/HomeSeeker";
import HomeLandlord from "@/views/dashboard/HomeLandlord";
import HomeAdmin from "@/views/dashboard/HomeAdmin";
import { HashLoader } from "react-spinners";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center mt-40">
        <HashLoader color="#1290CB" size={50} />
        <div className="text-center mt-20 text-[#1290CB]">
          Cargando Pagina de Inicio
        </div>
      </div>
    );
  }

  return (
    <div>
      {!user && (
        <>
          <Navbar type="noLogged" />
          <HomeGuest />
        </>
      )}
      {user?.user_type === "seeker" && (
        <>
          <Navbar type="seekerLog" />
          <HomeSeeker />
        </>
      )}
      {user?.user_type === "landlord" && (
        <>
          <Navbar type="landlordLog" />
          <HomeLandlord />
        </>
      )}
      {user?.user_type === "admin" && (
        <>
          <Navbar type="admin" />
          <HomeAdmin />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
