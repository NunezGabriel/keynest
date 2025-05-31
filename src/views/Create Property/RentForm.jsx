"use client";

import { useState } from "react";
import PropertyFormFields from "@/components/PropertyFormFields";
import ImageUpload from "@/components/ImageUpload";
import UniversalButton from "@/components/UniversalButton";

const RentForm = () => {
  const [formData, setFormData] = useState({
    operationType: "rent",
    address: "",
    price: "",
    maintenanceCost: "",
    propertyType: "",
    rooms: "",
    bathrooms: "",
    area: "",
    petsAllowed: false,
    description: "",
  });

  const [imageFiles, setImageFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData, imageFiles);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Registrar Propiedad en Alquiler</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <PropertyFormFields
          formData={formData}
          setFormData={setFormData}
          mode="rent"
        />

        <ImageUpload onImageSelect={setImageFiles} imageFiles={imageFiles} />

        <div className="flex justify-center">
          <UniversalButton
            text="PUBLICAR PROPIEDAD"
            onClick={handleSubmit}
            color="primary"
            className="text-sm px-6 py-2 rounded-md hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
};

export default RentForm;








/* "use client";
import { useState } from "react";
import PropertyFormFields from "@/components/PropertyFormFields";
import ImageUpload from "@/components/ImageUpload";
import UniversalButton from "@/components/UniversalButton";

const RentForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    price: "",
    maintenanceCost: "",
    isApartment: false,
    isHouse: false,
    rooms: "",
    bathrooms: "",
    area: "",
    petsAllowed: false,
    description: ""
  });
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = () => {
    console.log("Formulario de renta enviado", formData, imageFile);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Registrar Propiedad en Alquiler</h1>
      <PropertyFormFields formData={formData} setFormData={setFormData} mode="rent" />
      <ImageUpload onImageSelect={setImageFile} />
      <UniversalButton text="PUBLICAR PROPIEDAD" onClick={handleSubmit} color="primary" full />
    </div>
  );
};

export default RentForm; */




/* "use client";
import { useState } from "react";
import PropertyFormFields from "@/components/PropertyFormFields";
import ImageUpload from "@/components/ImageUpload";
import UniversalButton from "@/components/UniversalButton";

const RentForm = () => {
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
      <h1 className="text-xl font-bold">Registrar Propiedad en Alquiler</h1>
      <PropertyFormFields formData={formData} setFormData={setFormData} />
      <ImageUpload onImageSelect={setImageFile} />
      <UniversalButton text="AGREGAR" onClick={handleSubmit} color="primary" full />
    </div>
  );
};

export default RentForm; */

