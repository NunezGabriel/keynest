"use client";
import RentForm from "@/views/Create Property/RentForm";

const RentPage = () => <RentForm />;
export default RentPage;











/* "use client";

import { useState } from "react";
import PropertyFormFields from "@/components/PropertyFormFields";
import ImageUpload from "@/components/ImageUpload";

const RentPage = () => {
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
    console.log("Formulario de alquiler enviado:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Formulario de RENTAR propiedad</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <PropertyFormFields formData={formData} setFormData={setFormData} />
        <ImageUpload onImageSelect={handleImageSelect} />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Publicar propiedad en alquiler
        </button>
      </form>
    </div>
  );
};

export default RentPage; */
