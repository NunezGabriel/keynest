"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import ProfileView from "@/views/aunth/ProfileView";
import { HashLoader } from "react-spinners";

const UserProfile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center mt-40">
        <HashLoader color="#1290CB" size={50} />
        <div className="text-center mt-20 text-[#1290CB]">
          Cargando el Perfil
        </div>
      </div>
    );
  }

  return (
    <div>
      {user?.user_type === "seeker" && <Navbar type="seekerLog" />}
      {user?.user_type === "landlord" && <Navbar type="landlordLog" />}
      {user?.user_type === "admin" && <Navbar type="admin" />}
      <ProfileView />
    </div>
  );
};

export default UserProfile;
