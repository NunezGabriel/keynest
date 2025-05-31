"use client";
import { useState } from "react";
import PropertyFormFields from "@/components/PropertyFormFields";
import ImageUpload from "@/components/ImageUpload";
import UniversalButton from "@/components/UniversalButton";

const SellForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    price: "",
    isApartment: false,
    isHouse: false,
    rooms: "",
    bathrooms: "",
    area: "",
    description: ""
  });
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = () => {
    console.log("Formulario de venta enviado", formData, imageFile);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Registrar Propiedad en Venta</h1>
      <PropertyFormFields formData={formData} setFormData={setFormData} mode="sell" />
      <ImageUpload onImageSelect={setImageFile} />
      <UniversalButton text="PUBLICAR PROPIEDAD" onClick={handleSubmit} color="primary" full />
    </div>
  );
};

export default SellForm;




/* "use client";
import { useState } from "react";
import PropertyFormFields from "@/components/PropertyFormFields";
import ImageUpload from "@/components/ImageUpload";
import UniversalButton from "@/components/UniversalButton";

const SellForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    description: "",
    price: ""
  });
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = () => {
    console.log("Formulario enviado", formData, imageFile);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Registrar Propiedad en Venta</h1>
      <PropertyFormFields formData={formData} setFormData={setFormData} />
      <ImageUpload onImageSelect={setImageFile} />
      <UniversalButton text="AGREGAR" onClick={handleSubmit} color="primary" full />
    </div>
  );
};

export default SellForm; */
