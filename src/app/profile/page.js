import Navbar from "@/components/Navbar";

const UserProfile = () => {
  return (
    <div>
      {user?.user_type === "seeker" && <Navbar type="seekerLog" />}
      {user?.user_type === "landlord" && <Navbar type="landlordLog" />}
      {user?.user_type === "admin" && <Navbar type="admin" />}
    </div>
  );
};

export default UserProfile;
