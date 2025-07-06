"use client";
import { useState, useEffect } from "react";
import { useProperty } from "@/context/PropertyContext";
import { RiSearchLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import AddressInput from "@/components/propertyForm/AddressInput";
import { toast } from "react-toastify";

const EditPropertyModal = ({ property, onClose, onSave }) => {
  const { updateProperty } = useProperty();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    maintenance_cost: "",
    property_type: "",
    bedrooms: "",
    bathrooms: "",
    square_meters: "",
    pets_allowed: false,
    location: "",
    is_rent: true,
  });

  // Cargar datos iniciales
  useEffect(() => {
    if (property) {
      setFormData({
        title: property.title || property.location, // Usar location como título si no hay título
        description: property.description,
        price: property.price.toString(),
        maintenance_cost: property.maintenance_cost?.toString() || "",
        property_type: property.property_type,
        bedrooms: property.bedrooms.toString(),
        bathrooms: property.bathrooms.toString(),
        square_meters: property.square_meters.toString(),
        pets_allowed: property.pets_allowed || false,
        location: property.location,
        is_rent: property.is_rent,
      });
    }
  }, [property]);

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
      // Preparar datos para el backend
      const propertyToSend = {
        ...formData,
        price: parseFloat(formData.price),
        square_meters: parseInt(formData.square_meters),
        bedrooms: parseInt(formData.bedrooms),
        bathrooms: parseInt(formData.bathrooms),
        maintenance_cost:
          formData.is_rent && formData.maintenance_cost
            ? parseFloat(formData.maintenance_cost)
            : null,
      };

      const updatedProperty = await updateProperty(
        property.property_id,
        propertyToSend
      );
      onSave(updatedProperty);
      onClose();
    } catch (error) {
      console.error("Error al actualizar propiedad:", error);
      toast.error("Ocurrió un error al actualizar la propiedad");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1290CB]">
          Editar Propiedad
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TIPO DE OPERACIÓN */}
          <div>
            <label className="block text-sm font-medium mb-3 text-[#373737]">
              TIPO DE OPERACIÓN
            </label>
            <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <button
                type="button"
                className={`px-6 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-1 ${
                  formData.is_rent
                    ? "bg-[#1290CB] text-white hover:bg-[#0d7aaf]"
                    : "bg-white text-[#616161] hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, is_rent: true })}
              >
                Rentar
              </button>

              <div className="border-l border-gray-300 h-auto"></div>

              <button
                type="button"
                className={`px-6 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-1 ${
                  !formData.is_rent
                    ? "bg-[#1290CB] text-white hover:bg-[#0d7aaf]"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, is_rent: false })}
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

          {/* COSTO MENSUAL/PRECIO */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#373737]">
              {formData.is_rent ? "COSTO MENSUAL *" : "PRECIO DE VENTA *"}
            </label>
            <div className="relative">
              <RiMoneyDollarCircleLine className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
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

          {/* COSTO DE MANTENIMIENTO (solo para renta) */}
          {formData.is_rent && (
            <div>
              <label className="block text-sm text-[#373737] font-medium mb-1">
                COSTO DE MANTENIMIENTO
              </label>
              <div className="relative">
                <RiMoneyDollarCircleLine className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="maintenance_cost"
                  placeholder="0.00"
                  inputMode="decimal"
                  value={formData.maintenance_cost}
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

          {/* CUARTOS, BAÑOS Y ÁREA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-[#373737] font-medium mb-1">
                CUARTOS *
              </label>
              <select
                name="bedrooms"
                value={formData.bedrooms}
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

            <div>
              <label className="block text-sm text-[#373737] font-medium mb-1">
                BAÑOS *
              </label>
              <select
                name="bathrooms"
                value={formData.bathrooms}
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

            <div>
              <label className="block text-sm text-[#373737] font-medium mb-1">
                ÁREA (m²) *
              </label>
              <input
                type="text"
                name="square_meters"
                placeholder="0.00"
                inputMode="decimal"
                value={formData.square_meters}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleNumberKeyDown}
                required
                className="w-full border border-[#1290CB] p-2 rounded-lg"
              />
            </div>
          </div>

          {/* MASCOTAS (solo para renta) */}
          {formData.is_rent && (
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
            </div>
          )}

          {/* DESCRIPCIÓN */}
          <div>
            <label className="block text-[#373737] font-medium mb-1">
              DESCRIPCIÓN *
            </label>
            <textarea
              name="description"
              placeholder="Descripción de la propiedad..."
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-[#1290CB] p-2 rounded-lg"
            />
          </div>

          {/* BOTONES */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`px-6 py-2 bg-[#1290CB] text-white rounded-lg hover:bg-[#0d7aaf] transition-colors ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPropertyModal;
