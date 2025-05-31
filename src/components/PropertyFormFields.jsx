import { RiSearchLine, RiMoneyDollarCircleLine } from "react-icons/ri";

const PropertyFormFields = ({ formData, setFormData, mode = "rent" }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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
        <label className="block text-sm font-medium mb-1">TIPO DE OPERACIÓN</label>
        <div className="flex gap-2">
          <button
            type="button"
            className={`px-4 py-2 rounded ${mode === "rent" ? "bg-blue-500 text-white" : "bg-white text-gray-700 border"}`}
            onClick={() => setFormData({ ...formData, operationType: "rent" })}
          >
            Rentar
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded ${mode === "sell" ? "bg-blue-500 text-white" : "bg-white text-gray-700 border"}`}
            onClick={() => setFormData({ ...formData, operationType: "sell" })}
          >
            Vender
          </button>
        </div>
      </div>

      {/* DIRECCIÓN */}
      <div>
        <label className="block text-sm font-medium mb-1">DIRECCIÓN</label>
        <div className="relative">
          <RiSearchLine className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="address"
            placeholder="Ingresa dirección"
            value={formData.address}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded"
          />
        </div>
      </div>

      {/* COSTO MENSUAL */}
      <div>
        <label className="block text-sm font-medium mb-1">COSTO MENSUAL</label>
        <div className="relative">
          <RiMoneyDollarCircleLine className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="price"
            placeholder="0.00"
            inputMode="decimal"
            step="0.01"
            pattern="^\d+(\.\d{0,2})?$"
            value={formData.price}
            onChange={handleChange}
            onKeyDown={handleNumberKeyDown}
            className="w-full pl-10 pr-4 py-2 border rounded"
          />
        </div>
      </div>

      {/* COSTO DE MANTENIMIENTO */}
      {mode === "rent" && (
        <div>
          <label className="block text-sm font-medium mb-1">COSTO DE MANTENIMIENTO</label>
          <div className="relative">
            <RiMoneyDollarCircleLine className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="maintenanceCost"
              placeholder="0.00"
              inputMode="decimal"
              step="0.01"
              pattern="^\d+(\.\d{0,2})?$"
              value={formData.maintenanceCost || ""}
              onChange={handleChange}
              onKeyDown={handleNumberKeyDown}
              className="w-full pl-10 pr-4 py-2 border rounded"
            />
          </div>
        </div>
      )}

      {/* TIPO DE PROPIEDAD */}
      <div>
        <label className="block text-sm font-medium mb-1">TIPO DE PROPIEDAD</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="propertyType"
              value="Departamento"
              checked={formData.propertyType === "Departamento"}
              onChange={handleChange}
              className="mr-2"
            />
            Departamento
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="propertyType"
              value="Casa"
              checked={formData.propertyType === "Casa"}
              onChange={handleChange}
              className="mr-2"
            />
            Casa
          </label>
        </div>
      </div>

      {/* CUARTOS, BAÑOS Y ÁREA EN M² */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">CUARTOS</label>
          <select
            name="rooms"
            value={formData.rooms || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
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
          <label className="block text-sm font-medium mb-1">BAÑOS</label>
          <select
            name="bathrooms"
            value={formData.bathrooms || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
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
          <label className="block text-sm font-medium mb-1">ÁREA EN M²</label>
          <input
            type="text"
            name="area"
            placeholder="0.00"
            inputMode="decimal"
            step="0.01"
            pattern="^\d+(\.\d{0,2})?$"
            value={formData.area || ""}
            onChange={handleChange}
            onKeyDown={handleNumberKeyDown}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      {/* SE ACEPTAN MASCOTAS */}
      {mode === "rent" && (
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="petsAllowed"
              checked={formData.petsAllowed || false}
              onChange={handleChange}
              className="mr-2"
            />
            Se aceptan mascotas
          </label>
          <p className="text-sm text-gray-500 mt-1">
            Permitir mascotas aumenta la probabilidad de que a los inquilinos les guste la propiedad en un 70%. Además, te hace una mejor persona.
          </p>
        </div>
      )}

      {/* SOBRE ESTA PROPIEDAD */}
      <div>
        <label className="block text-sm font-medium mb-1">SOBRE ESTA PROPIEDAD</label>
        <textarea
          name="description"
          placeholder="La propiedad es genial porque..."
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <p className="text-sm text-gray-500 mt-1">
          Los inquilinos leerán esto primero, así que resalte cualquier característica o información importante que tenga el apartamento.
        </p>
      </div>
    </div>
  );
};

export default PropertyFormFields;






/* const PropertyFormFields = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Título"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Dirección"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Descripción"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Precio"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        className="border p-2 rounded"
      />
    </div>
  );
};

export default PropertyFormFields; */
