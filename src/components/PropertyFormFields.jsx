"use client";
import { RiSearchLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";


const PropertyFormFields = ({ formData, setFormData, mode = "rent" }) => {
  const router = useRouter();

  const switchMode = (newMode) => {
    if (mode === newMode) return;
    
    setFormData({
      ...formData,
      operationType: newMode,
      maintenanceCost: newMode === "rent" ? formData.maintenanceCost : ""
    });
    router.push(`/${newMode}`);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Validación para campos numéricos (área, price, maintenanceCost)
    if (["area", "price", "maintenanceCost"].includes(name)) {
      // Permite solo números y un punto decimal opcional
      const isValidNumber = /^\d*\.?\d{0,2}$/.test(value) || value === "";
      
      if (isValidNumber) {
        // Si tiene más de 2 decimales, lo recorta
        const parts = value.split(".");
        if (parts.length === 2 && parts[1].length > 2) {
          const fixedValue = `${parts[0]}.${parts[1].slice(0, 2)}`;
          setFormData({ ...formData, [name]: fixedValue });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      }
    } else {
      // Comportamiento normal para otros campos
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  // Formatea a 2 decimales al salir del campo (onBlur)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (["area", "price", "maintenanceCost"].includes(name) && value !== "") {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setFormData({ ...formData, [name]: num.toFixed(2) });
      }
    }
  };

  // Evita letras y símbolos inválidos en campos numéricos con decimales
  const handleNumberKeyDown = (e) => {
    if (
      ["e", "E", "+", "-", ","].includes(e.key) ||
      (e.key === "." && e.target.value.includes("."))
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col gap-6">
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
            onClick={() => switchMode("rent")}
          >
            Rentar
          </button>
          
          <div className="border-l border-gray-300 h-auto"></div> {/* Línea divisoria */}
          
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-1 ${
              mode === "sell"
                ? "bg-[#1290CB] text-white hover:bg-[#0d7aaf]"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => switchMode("sell")}
          >
            Vender
          </button>
        </div>
      </div>

      {/* DIRECCIÓN */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[#373737]">DIRECCIÓN</label>
        <div className="relative">
          <RiSearchLine className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="address"
            placeholder="Ingresa dirección"
            value={formData.address}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-[#1290CB] rounded-lg"
          />
        </div>
      </div>

      {/* COSTO MENSUAL */}
      <div>
        <label className="block text-sm font-medium mb-1 text-[#373737]">COSTO MENSUAL</label>
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
            className="w-full pl-10 pr-4 py-2 border border-[#1290CB] rounded-lg"
          />
        </div>
      </div>

      {/* COSTO DE MANTENIMIENTO */}
      {mode === "rent" && (
        <div>
          <label className="block text-sm text-[#373737] font-medium mb-1 ">COSTO DE MANTENIMIENTO</label>
          <div className="relative">
            <RiMoneyDollarCircleLine className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              name="maintenanceCost"
              placeholder="0.00"
              inputMode="decimal"
              value={formData.maintenanceCost || ""}
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
        <label className="block text-sm text-[#373737] font-medium mb-1">TIPO DE PROPIEDAD</label>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value="Departamento"
              checked={formData.propertyType === "Departamento"}
              onChange={handleChange}
              className="w-4 h-4 accent-[#1290CB] hover:accent-[#16b4ff] focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2 cursor-pointer"
            />
            <span>Departamento</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value="Casa"
              checked={formData.propertyType === "Casa"}
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
          <label className="block text-sm text-[#373737] font-medium mb-1">CUARTOS</label>
          <select
            name="rooms"
            value={formData.rooms || ""}
            onChange={handleChange}
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
          <label className="block text-sm text-[#373737] font-medium mb-1">BAÑOS</label>
          <select
            name="bathrooms"
            value={formData.bathrooms || ""}
            onChange={handleChange}
            className="w-full border border-[#1290CB]  p-2 rounded-lg"
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
          <label className="block text-sm text-[#373737] font-medium mb-1">ÁREA EN M²</label>
          <input
            type="text"
            name="area"
            placeholder="0.00"
            inputMode="decimal"
            value={formData.area || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleNumberKeyDown}
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
              name="petsAllowed"
              checked={formData.petsAllowed || false}
              onChange={handleChange}
              className="w-4 h-4 accent-[#1290CB] hover:accent-[#16b4ff] focus:ring-2 focus:ring-[#1290CB] focus:ring-offset-2 cursor-pointer"
            />
            <span>Se aceptan mascotas</span>
          </label>
          <p className="text-sm text-gray-500 mt-1">
            Permitir mascotas aumenta la probabilidad de que a los inquilinos les guste la propiedad en un 70%. Además, te hace una mejor persona.
          </p>
        </div>
      )}

      {/* SOBRE ESTA PROPIEDAD */}
      <div>
        <label className="block text-[#373737] font-medium mb-1">SOBRE ESTA PROPIEDAD</label>
        <textarea
          name="description"
          placeholder="La propiedad es genial porque..."
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-[#1290CB]  p-2 rounded-lg"
        />
        <p className="text-sm text-gray-500 mt-1">
          Los inquilinos leerán esto primero, así que resalte cualquier característica o información importante que tenga el apartamento.
        </p>
      </div>
    </div>
  );
};

export default PropertyFormFields;


