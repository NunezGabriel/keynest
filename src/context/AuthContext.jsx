"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Recuperar datos del localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // Login
  const login = async ({ email, password }) => {
    console.log("Enviando credenciales:", { email, password });

    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      console.log("Error en respuesta:", res.status);
      toast.error("Credenciales incorrectas");
      return;
    }

    const data = await res.json();
    console.log("Respuesta del backend:", data);

    setToken(data.access_token);
    setUser(data.user);

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));

    redirectToDashboard(data.user.user_type);
  };

  // Register

  const register = async ({
    name,
    email,
    password,
    password_confirmation,
    role,
  }) => {
    const res = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
        user_type: role,
      }),
    });

    if (!res.ok) {
      toast.error("Registro fallido");
      return;
    }

    const data = await res.json();
    setToken(data.access_token);
    setUser(data.user);

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));

    redirectToDashboard(data.user.user_type);
  };

  // Logout
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.clear();
    setToken(null);
    setUser(null);
    router.push("/");
  };

  // Redirige según tipo de usuario
  const redirectToDashboard = (role) => {
    console.log("Redirigiendo a dashboard para el rol:", role); // opcional
    router.push("/");
  };

  // Proteger rutas: función auxiliar
  const fetchWithToken = async (url, options = {}) => {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      logout();
    }

    return res;
  };

  const getUsers = async () => {
    const res = await fetchWithToken("http://localhost:8000/api/users");
    if (!res.ok) return [];
    const data = await res.json();
    return data;
  };

  const deleteUser = async (id) => {
    const res = await fetchWithToken(`http://localhost:8000/api/users/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error("Error eliminando usuario:", res.status);
      return null;
    }
    return await res.json();
  };
  const updateUser = async (id, data) => {
    const res = await fetchWithToken(`http://localhost:8000/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Error actualizando usuario:", res.status);
      return null;
    }

    return await res.json();
  };

  const createUser = async (data) => {
    const res = await fetchWithToken("http://localhost:8000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Error creando usuario:", res.status);
      return null;
    }

    return await res.json();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        login,
        register,
        logout,
        fetchWithToken,
        loading,
        getUsers,
        deleteUser,
        updateUser,
        createUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
