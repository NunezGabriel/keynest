"use client";
import SellForm from "@/views/Create Property/SellForm";
import { useRouter } from "next/navigation";

const SellPage = () => {
  const router = useRouter();
  
  return <SellForm onModeChange={() => router.push("/rent")} />;
};

export default SellPage;


/* "use client";

import { useState } from "react";
import PropertyFormFields from "@/components/PropertyFormFields";
import ImageUpload from "@/components/ImageUpload";

const SellPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    description: "",
    price: "",
    image: null,
  });

  const handleImageSelect = (file) => {
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario de venta enviado:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Formulario de VENTA de propiedad</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <PropertyFormFields formData={formData} setFormData={setFormData} />
        <ImageUpload onImageSelect={handleImageSelect} />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Publicar propiedad en venta
        </button>
      </form>
    </div>
  );
};

export default SellPage; */
