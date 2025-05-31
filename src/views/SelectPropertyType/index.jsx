"use client";
import { useState } from "react";
import UniversalButton from "@/components/UniversalButton";
import { useRouter } from "next/navigation";

const SelectPropertyType = () => {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const handleSelect = (type) => {
    setSelected(type);
    router.push(`/views/CreateProperty/${type}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-2xl font-semibold">¿Qué desea hacer?</h1>
      <div className="flex gap-4">
        <UniversalButton
          text="RENTAR"
          color={selected === "rent" ? "primary" : "secondary"}
          onClick={() => handleSelect("rent")}
        />
        <UniversalButton
          text="VENDER"
          color={selected === "sell" ? "primary" : "secondary"}
          onClick={() => handleSelect("sell")}
        />
      </div>
    </div>
  );
};

export default SelectPropertyType;
