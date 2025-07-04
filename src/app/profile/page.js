"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import ProfileView from "@/views/aunth/ProfileView";

const UserProfile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-20">Cargando...</div>; // o un spinner
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
