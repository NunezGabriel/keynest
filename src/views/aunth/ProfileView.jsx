"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

const ProfileView = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    user_type: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        user_type: user.user_type || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updated = await updateUser(user.id, {
        name: formData.name,
        email: formData.email,
      });

      if (updated) {
        alert("Perfil actualizado correctamente");
        localStorage.setItem("user", JSON.stringify(updated));
        setIsEditing(false);
        // Refrescar el estado local
        location.reload(); // o setUser(updated) si usas context
      }
    } catch (err) {
      console.error(err);
      alert("Error al actualizar el perfil");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-[#1290CB] mb-4">
            Inicia sesión para ver tu perfil
          </h2>
          <p className="text-gray-600 mb-6">
            Por favor inicia sesión para acceder a esta página.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-[#1290CB] p-6 text-white">
            <h1 className="text-2xl font-bold">
              Aquí puedes gestionar tu información personal {user.name}
            </h1>
          </div>

          {/* Contenido */}
          <div className="p-6">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1290CB]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1290CB]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Tipo de usuario
                  </label>
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {formData.user_type === "landlord"
                      ? "Propietario"
                      : formData.user_type === "seeker"
                      ? "Buscador"
                      : formData.user_type === "admin"
                      ? "Administrador"
                      : formData.user_type}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2  rounded-lg  bg-[#1290CB] hover:bg-[#16b4ff] text-white focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2 hover:scale-105 transition-transform duration-200"
                  >
                    Guardar cambios
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-[#1290CB] flex items-center justify-center text-white text-2xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-[#1290CB] mb-2">
                      Información básica
                    </h3>
                    <p>
                      <span className="font-medium">Nombre:</span> {user.name}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span> {user.email}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-[#1290CB] mb-2">
                      Cuenta
                    </h3>
                    <p>
                      <span className="font-medium">Tipo de usuario:</span>{" "}
                      {user.user_type === "landlord"
                        ? "Propietario"
                        : user.user_type === "seeker"
                        ? "Buscador"
                        : user.user_type === "admin"
                        ? "Administrador"
                        : user.user_type}
                    </p>
                    <p>
                      <span className="font-medium">Miembro desde:</span>{" "}
                      {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2  rounded-lg  bg-[#1290CB] hover:bg-[#16b4ff] text-white focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2 hover:scale-105 transition-transform duration-200"
                  >
                    Editar perfil
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <h3 className="font-semibold text-[#1290CB] mb-2">
              ¿Tienes algún problema con la plataforma?
            </h3>
            <p className="text-gray-600">
              Puedes contactar con el equipo desarrollador mediante sus redes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
