"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Recuperar datos del localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // 🔐 Login
  const login = async ({ email, password }) => {
    console.log("Enviando credenciales:", { email, password }); // 👈🏼 DEBUG

    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      console.log("Error en respuesta:", res.status); // 👈🏼 DEBUG
      alert("Credenciales incorrectas");
      return;
    }

    const data = await res.json();
    console.log("Respuesta del backend:", data); // 👈🏼 DEBUG

    setToken(data.access_token);
    setUser(data.user);

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));

    redirectToDashboard(data.user.user_type);
  };

  // 📝 Register
  const register = async ({
    name,
    email,
    phone,
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
        phone,
        password,
        password_confirmation,
        user_type: role, // Laravel espera "user_type"
      }),
    });

    if (!res.ok) {
      alert("Registro fallido");
      return;
    }

    const data = await res.json();
    setToken(data.access_token);
    setUser(data.user);

    localStorage.setItem("token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));

    redirectToDashboard(data.user.user_type);
  };

  // 🔓 Logout
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

  // 🧭 Redirige según tipo de usuario
  const redirectToDashboard = (role) => {
    console.log("Redirigiendo a dashboard para el rol:", role); // opcional
    router.push("/");
  };

  // ✅ Proteger rutas: función auxiliar
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

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, fetchWithToken, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
