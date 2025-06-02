"use client";

import { useState } from "react";
import PropertyFormFields from "@/components/propertyDetails/PropertyFormFields";
import ImageUpload from "@/components/ImageUpload";
import UniversalButton from "@/components/buttons/UniversalButton";

const SellForm = () => {
  const [formData, setFormData] = useState({
    operationType: "sell",
    address: "",
    price: "",
    maintenanceCost: "", // Mantenido por consistencia estructural
    propertyType: "",
    rooms: "",
    bathrooms: "",
    area: "",
    description: "",
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validación mejorada para venta
      if (
        !formData.address ||
        !formData.price ||
        !formData.propertyType ||
        imageFiles.length === 0
      ) {
        alert(
          "Complete todos los campos requeridos (*) y suba al menos una imagen"
        );
        return;
      }

      console.log("Datos de venta a enviar:", {
        ...formData,
        images: imageFiles,
      });

      // Ejemplo de llamada API para venta:
      // const response = await fetch('/api/properties/sell', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     maintenanceCost: undefined, // Eliminamos este campo si no es relevante
      //     images: imageFiles.map(file => file.name) // Solo nombres como ejemplo
      //   })
      // });

      alert("Propiedad en venta registrada exitosamente!");
      // Reset opcional: setFormData({...}); setImageFiles([]);
    } catch (error) {
      console.error("Error en venta:", error);
      alert("Error al registrar la propiedad. Por favor intente nuevamente");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#1290CB]">
        Registrar Propiedad en Venta
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <PropertyFormFields
          formData={formData}
          setFormData={setFormData}
          mode="sell" // Cambia a modo "venta" visualmente
        />

        <ImageUpload onImageSelect={setImageFiles} imageFiles={imageFiles} />

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

export default SellForm;

/* "use client";
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

export default SellForm; */

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
