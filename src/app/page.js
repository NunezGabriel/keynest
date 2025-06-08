"use client";

import { useAuth } from "@/context/AuthContext";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import HomeGuest from "@/views/dashboard/HomeGuest";
import HomeSeeker from "@/views/dashboard/HomeSeeker";
import HomeLandlord from "@/views/dashboard/HomeLandlord";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-20">Cargando...</div>; // o un spinner
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
      <Footer />
    </div>
  );
};

export default Home;
