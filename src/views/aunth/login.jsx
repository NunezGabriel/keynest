"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";

const LoginView = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg shadow-md max-w-[388px] w-full p-4 mx-4">
        <h2 className="text-2xl text-center mb-4">Inicia Sesión</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[#373737] tracking-[1.5px]">
              CORREO ELECTRÓNICO
            </label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="email"
              name="email"
              placeholder="user@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-[#373737] tracking-[1.5px]">
              CONTRASEÑA
            </label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="password"
              name="password"
              placeholder="******"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="mx-auto mt-3">
            <UniversalButton text="Iniciar Sesión" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
