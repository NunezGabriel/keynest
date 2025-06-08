"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";

const LandlordForm = () => {
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    await register({
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.confirm,
      role: "seeker",
    });
  };

  return (
    <div className="relative">
      <div className="w-full h-[352px] bg-[#bad8e7] text-center py-16"></div>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white rounded-lg shadow-md max-w-[388px] w-full p-4 mx-4">
          <h2 className="text-2xl text-center mb-4">Crea tu cuenta</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                NAME
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                EMAIL
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="email"
                name="email"
                placeholder="user@mail.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                PASSWORD
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="password"
                name="password"
                placeholder="******"
                value={form.password}
                onChange={handleChange}
              />
              <small className="helper-text text-gray-500">
                Al menos 6 caracteres
              </small>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                PASSWORD CONFIRMATION
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="password"
                name="confirm"
                placeholder="******"
                value={form.confirm}
                onChange={handleChange}
              />
            </div>

            <div className="mx-auto mt-3">
              <UniversalButton text={"CREAR CUENTA"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandlordForm;
