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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validación básica
      if (!formData.address || !formData.price || imageFiles.length === 0) {
        alert("Por favor complete los campos requeridos y suba al menos una imagen");
        return;
      }

      console.log("Datos a enviar:", { 
        ...formData, 
        images: imageFiles // Incluye las imágenes en los datos del formulario
      });

      // Aquí iría tu llamada a la API:
      // const response = await fetch('/api/properties', {
      //   method: 'POST',
      //   body: JSON.stringify({ ...formData, images: imageFiles })
      // });

      alert("Propiedad registrada exitosamente!");
      // Resetear formulario si es necesario:
      // setFormData({...});
      // setImageFiles([]);
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error al registrar la propiedad");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#1290CB]">
        Registrar Propiedad en Alquiler
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <PropertyFormFields
          formData={formData}
          setFormData={setFormData}
          mode="rent"
        />

        {/* Componente de imágenes mejorado */}
        <ImageUpload 
          onImageSelect={setImageFiles} 
          imageFiles={imageFiles}
        />

        <div className="flex justify-center">
          <UniversalButton
            type="submit"
            text={isSubmitting ? "PUBLICANDO..." : "PUBLICAR PROPIEDAD"}
            color="primary"
            disabled={isSubmitting}
            className={`text-sm px-6 py-2 rounded-md hover:bg-[#16b4ff] transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
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

