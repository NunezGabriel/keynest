"use client";

import { useState, useEffect } from "react";
import { RiSearchLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import ImageUpload from "@/components/propertyForm/ImageUpload";
import UniversalButton from "@/components/buttons/UniversalButton";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import AddressInput from "@/components/propertyForm/AddressInput";

const PropertyForm = () => {
  const { createProperty } = useProperty();
  const { user } = useAuth();
  const router = useRouter();

  const [mode, setMode] = useState("rent"); // 'rent' o 'sell'
  const [imageFiles, setImageFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    is_rent: mode === "rent",
    location: "",
    price: "",
    maintenance_cost: "",
    property_type: "",
    bedrooms: "",
    bathrooms: "",
    square_meters: "",
    pets_allowed: false,
    description: "",
    status: "disponible",
  });

  // Resetear campos específicos al cambiar el modo
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      is_rent: mode === "rent",
      maintenance_cost: mode === "rent" ? prev.maintenance_cost : "",
      pets_allowed: mode === "rent" ? prev.pets_allowed : false,
    }));
  }, [mode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Validación para campos numéricos
    if (["square_meters", "price", "maintenance_cost"].includes(name)) {
      const isValidNumber = /^\d*\.?\d{0,2}$/.test(value) || value === "";

      if (isValidNumber) {
        const parts = value.split(".");
        if (parts.length === 2 && parts[1].length > 2) {
          const fixedValue = `${parts[0]}.${parts[1].slice(0, 2)}`;
          setFormData({ ...formData, [name]: fixedValue });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (
      ["square_meters", "price", "maintenance_cost"].includes(name) &&
      value !== ""
    ) {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setFormData({ ...formData, [name]: num.toFixed(2) });
      }
    }
  };

  const handleNumberKeyDown = (e) => {
    if (
      ["e", "E", "+", "-", ","].includes(e.key) ||
      (e.key === "." && e.target.value.includes("."))
    ) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validaciones básicas
      if (!formData.location || !formData.price) {
        alert("Complete los campos requeridos");
        return;
      }

      // Preparar datos para el backend
      const propertyToSend = {
        ...formData,
        title: formData.location, // Usamos la ubicación como título si no hay título específico
        price: parseFloat(formData.price),
        square_meters: parseInt(formData.square_meters),
        bedrooms: parseInt(formData.bedrooms),
        bathrooms: parseInt(formData.bathrooms),
        property_type: formData.property_type.toLowerCase(), // Ajuste para el backend
        // Aseguramos que maintenance_cost sea null cuando es venta
        maintenance_cost:
          mode === "rent"
            ? formData.maintenance_cost
              ? parseFloat(formData.maintenance_cost)
              : null
            : null, // <-- Esto es lo nuevo que agregamos
      };

      // Enviar al backend
      const createdProperty = await createProperty(propertyToSend);

      console.log("Propiedad creada:", createdProperty);
      alert(`Propiedad registrada exitosamente!`);
      router.push("/my-properties"); // Redirigir después de crear
    } catch (error) {
      console.error("Error creando propiedad:", error);
      alert(
        "Ocurrió un error al crear la propiedad. Por favor intente nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#1290CB]">
        Registrar Propiedad en {mode === "rent" ? "Alquiler" : "Venta"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* TIPO DE OPERACIÓN */}
        <div>
          <label className="block text-sm font-medium mb-3 text-[#373737]">
            TIPO DE OPERACIÓN
          </label>
          <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-1 ${
                mode === "rent"
                  ? "bg-[#1290CB] text-white hover:bg-[#0d7aaf]"
                  : "bg-white text-[#616161] hover:bg-gray-50"
              }`}
              onClick={() => setMode("rent")}
            >
              Rentar
            </button>

            <div className="border-l border-gray-300 h-auto"></div>

            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-1 ${
                mode === "sell"
                  ? "bg-[#1290CB] text-white hover:bg-[#0d7aaf]"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setMode("sell")}
            >
              Vender
            </button>
          </div>
        </div>

        {/* DIRECCIÓN */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#373737]">
            DIRECCIÓN *
          </label>
          <div className="relative">
            <RiSearchLine className="absolute left-3 top-3 text-gray-400" />
            <AddressInput
              value={formData.location}
              onChange={(value) =>
                setFormData({ ...formData, location: value })
              }
            />
          </div>
        </div>

        {/* COSTO MENSUAL */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#373737]">
            {mode === "rent" ? "COSTO MENSUAL *" : "PRECIO DE VENTA *"}
          </label>
          <div className="relative">
            <RiMoneyDollarCircleLine className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              name="price"
              placeholder="0.00"
              inputMode="decimal"
              value={formData.price}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleNumberKeyDown}
              required
              className="w-full pl-10 pr-4 py-2 border border-[#1290CB] rounded-lg"
            />
          </div>
        </div>

        {/* COSTO DE MANTENIMIENTO */}
        {mode === "rent" && (
          <div>
            <label className="block text-sm text-[#373737] font-medium mb-1">
              COSTO DE MANTENIMIENTO
            </label>
            <div className="relative">
              <RiMoneyDollarCircleLine className="absolute left-3 top-3 text-gray-400" />
              <input
                type="number"
                name="maintenance_cost"
                placeholder="0.00"
                inputMode="decimal"
                value={formData.maintenance_cost || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleNumberKeyDown}
                className="w-full pl-10 pr-4 py-2 border border-[#1290CB] rounded-lg"
              />
            </div>
          </div>
        )}

        {/* TIPO DE PROPIEDAD */}
        <div>
          <label className="block text-sm text-[#373737] font-medium mb-1">
            TIPO DE PROPIEDAD *
          </label>
          <div className="flex gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="property_type"
                value="departamento"
                checked={formData.property_type === "departamento"}
                onChange={handleChange}
                required
                className="w-4 h-4 accent-[#1290CB] hover:accent-[#16b4ff] focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2 cursor-pointer"
              />
              <span>Departamento</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="property_type"
                value="casa"
                checked={formData.property_type === "casa"}
                onChange={handleChange}
                className="w-4 h-4 accent-[#1290CB] hover:accent-[#16b4ff] focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2 cursor-pointer"
              />
              <span>Casa</span>
            </label>
          </div>
        </div>

        {/* CUARTOS, BAÑOS Y ÁREA EN M² */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-[#373737] font-medium mb-1">
              CUARTOS *
            </label>
            <select
              name="bedrooms"
              value={formData.bedrooms || ""}
              onChange={handleChange}
              required
              className="w-full border border-[#1290CB] p-2 rounded-lg"
            >
              <option value="">Seleccione</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-[#373737] font-medium mb-1">
              BAÑOS *
            </label>
            <select
              name="bathrooms"
              value={formData.bathrooms || ""}
              onChange={handleChange}
              required
              className="w-full border border-[#1290CB] p-2 rounded-lg"
            >
              <option value="">Seleccione</option>
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-[#373737] font-medium mb-1">
              ÁREA EN M² *
            </label>
            <input
              type="text"
              name="square_meters"
              placeholder="0.00"
              inputMode="decimal"
              value={formData.square_meters || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleNumberKeyDown}
              required
              className="w-full border border-[#1290CB] p-2 rounded-lg"
            />
          </div>
        </div>

        {/* SE ACEPTAN MASCOTAS */}
        {mode === "rent" && (
          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="pets_allowed"
                checked={formData.pets_allowed || false}
                onChange={handleChange}
                className="w-4 h-4 accent-[#1290CB] hover:accent-[#16b4ff] focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2 cursor-pointer"
              />
              <span>Se aceptan mascotas</span>
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Permitir mascotas aumenta la probabilidad de que a los inquilinos
              les guste la propiedad en un 70%. Además, te hace una mejor
              persona.
            </p>
          </div>
        )}

        {/* SOBRE ESTA PROPIEDAD */}
        <div>
          <label className="block text-[#373737] font-medium mb-1">
            SOBRE ESTA PROPIEDAD *
          </label>
          <textarea
            name="description"
            placeholder="La propiedad es genial porque..."
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-[#1290CB] p-2 rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">
            {mode === "rent"
              ? "Los inquilinos leerán esto primero, así que resalte cualquier característica importante."
              : "Los compradores leerán esto primero, destaque las mejores características de la propiedad."}
          </p>
        </div>

        {/* Componente de imágenes (comentado por ahora) */}
        {/* <ImageUpload onImageSelect={setImageFiles} imageFiles={imageFiles} /> */}

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

export default PropertyForm;
