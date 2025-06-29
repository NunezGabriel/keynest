"use client";
import { useEffect, useState } from "react";
import FillterAdminComponent from "@/components/mainBoard/fillterAdminComponent";
import Navbar from "@/components/Navbar";
import CardUsers from "@/components/cardsAdmin/cardUsers";
import Footer from "@/components/footer";
import EditUserModal from "@/components/modales/EditUserModal";
import AddUserModal from "@/components/modales/AddUserModal";
import { useAuth } from "@/context/AuthContext";

const UserManagementView = () => {
  const { token, loading: authLoading, createUser } = useAuth(); // 👈🏼 usar register
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // 👈🏼 nuevo

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

  const handleSearch = (term) => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleAddUser = async (newUserData) => {
    const created = await createUser(newUserData);
    if (created) {
      fetchUsers();
    } else {
      alert("Error al crear usuario");
    }
  };

  useEffect(() => {
    if (!authLoading && token) {
      fetchUsers();
    }
  }, [authLoading, token]);

  if (authLoading) {
    return <div className="p-10 text-center">Cargando...</div>;
  }

  return (
    <div>
      <Navbar type={"admin"} />
      <FillterAdminComponent
        type="userFillter"
        onAdd={() => setShowAddModal(true)} // 👈🏼 mostrar modal
        onSearch={handleSearch}
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
                setFilteredUsers((prev) =>
                  prev.filter((u) => u.id !== user.id)
                );
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

      {/* modal edición */}
      {showModal && editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setShowModal(false)}
          onSave={(updatedUser) => {
            setUsers((prev) =>
              prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
            );
            setFilteredUsers((prev) =>
              prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
            );
            setShowModal(false);
          }}
        />
      )}

      {/* modal creación */}
      {showAddModal && (
        <AddUserModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddUser}
        />
      )}

      <Footer />
    </div>
  );
};

export default UserManagementView;
