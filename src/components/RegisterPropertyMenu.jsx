"use client";
import { useRouter } from "next/navigation";
import UniversalButton from "@/components/UniversalButton";

const RegisterPropertyMenu = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/rent");
    // Opcional: limpiar el localStorage si es necesario
    localStorage.removeItem('propertyFormData');
  };

  return (
    <UniversalButton
      text="REGISTRAR NUEVA PROPIEDAD"
      iconPosition="left"
      color="primary"
      iconClassName="text-white hover:scale-105 transition-transform" 
      iconBackgroundStyle=" bg-[#1290CB] hover:bg-[#16b4ff] px-1 py-1 rounded-md"
      onClick={handleClick}
      className="hover:scale-105 transition-transform" // Efecto adicional opcional
    />
  );
};

export default RegisterPropertyMenu;