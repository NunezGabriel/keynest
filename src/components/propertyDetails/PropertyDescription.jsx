"use client";
import PropertyMap from "../propertyForm/PropertyMap";

export default function PropertyDescription({
  title,
  price,
  location,
  description,
}) {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-semibold">
        {title || "Propiedad"}{" "}
        <span className="text-gray-500 text-lg">
          {price ? `$${price}` : ""}
        </span>
      </h2>
      <h3 className="text-[#005F8C] font-semibold">
        Información sobre esta propiedad
      </h3>
      <p className="text-sm mt-1 text-[#4A4A4A]">
        {description || "Descripción no disponible"}
      </p>

      <section className="mt-6 space-y-2">
        <h3 className="font-bold text-[#005F8C]">Ubicación de la propiedad</h3>
        <p className="text-[#4A4A4A]">
          {location || "Ubicación no especificada"}
        </p>
        <PropertyMap address={location} />
      </section>
    </section>
  );
}
