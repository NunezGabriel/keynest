"use client";
import { useEffect, useState } from "react";
import FillterAdminComponent from "@/components/mainBoard/fillterAdminComponent";
import Navbar from "@/components/Navbar";
import CardUsers from "@/components/cardsAdmin/cardUsers";
import Footer from "@/components/footer";
import { useAuth } from "@/context/AuthContext";

const UserManagementView = () => {
  const { getUsers, deleteUser } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteUser(id);
    if (res?.message === "Usuario eliminado correctamente") {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } else {
      alert("Error eliminando usuario");
    }
  };

  return (
    <div>
      <Navbar type={"admin"} />
      <FillterAdminComponent type={"userFillter"} />
      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-20 mb-24 mt-16 p-4">
        {users.map((user) => (
          <CardUsers
            key={user.id}
            user={user}
            onDelete={() => handleDelete(user.id)}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default UserManagementView;
