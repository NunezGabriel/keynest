"use client";
import { useEffect, useState } from "react";
import FillterAdminComponent from "@/components/mainBoard/fillterAdminComponent";
import Navbar from "@/components/Navbar";
import CardUsers from "@/components/cardsAdmin/cardUsers";
import Footer from "@/components/footer";
import EditUserModal from "@/components/modales/EditUserModal";
import { useAuth } from "@/context/AuthContext";

const UserManagementView = () => {
  const { token, loading: authLoading } = useAuth(); // 👈🏼 usamos loading
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [creatingUser, setCreatingUser] = useState(false);

  const handleSearch = (term) => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(term.toLowerCase()) ||
          user.email.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setUsers(data);
    setFilteredUsers(data);
  };

  useEffect(() => {
    if (!authLoading && token) {
      fetchUsers();
    }
  }, [authLoading, token]); // 👈🏼 importante esperar a que cargue todo

  if (authLoading) {
    return <div className="p-10 text-center">Cargando...</div>;
  }

  return (
    <div>
      <Navbar type={"admin"} />
      <FillterAdminComponent
        type={"userFillter"}
        onSearch={handleSearch}
        onAdd={() => setCreatingUser(true)}
      />

      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-20 mb-24 mt-16 p-4 ">
        {filteredUsers.map((user) => (
          <CardUsers
            key={user.id}
            user={user}
            onDelete={async () => {
              const res = await fetch(
                `http://localhost:8000/api/users/${user.id}`,
                {
                  method: "DELETE",
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              if (res.ok) {
                setUsers((prev) => prev.filter((u) => u.id !== user.id));
              } else {
                alert("Error al eliminar usuario");
              }
            }}
            onUpdate={async (userId, updatedData) => {
              const res = await fetch(
                `http://localhost:8000/api/users/${userId}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify(updatedData),
                }
              );

              if (res.ok) {
                const updatedUser = await res.json();

                setUsers((prev) =>
                  prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
                );

                setFilteredUsers((prev) =>
                  prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
                );

                setShowModal(false);
              } else {
                alert("Error al actualizar el usuario");
              }
            }}
          />
        ))}
      </section>

      {showModal && editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setShowModal(false)}
          onSave={(updatedUser) => {
            setUsers((prev) =>
              prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
            );
            setShowModal(false);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default UserManagementView;
