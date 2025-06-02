export default function PropertyDescription({ title, price }) {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-semibold">
        {title} <span className="text-gray-500 text-lg">{price}</span>
      </h2>
      <h3 className="text-[#005F8C] font-semibold">Información sobre esta propiedad</h3>
      <p className="text-sm mt-1 text-[#4A4A4A]">
        ¡Apartamento de 3 habitaciones y 2 baños disponible para mudanza lo antes posible!
      </p>
      <p className="text-sm mt-1 text-[#4A4A4A]">
        El apartamento cuenta con pisos de madera en todas partes, portero virtual, aire acondicionado/calefacción central, lavavajillas y microondas.
      </p>
      <p className="text-sm mt-1 text-[#4A4A4A]">
        La cocina tiene gabinetes personalizados y la sala de estar es lo suficientemente grande como para colocar una mesa de comedor, un sofá y un televisor.
      </p>
      <section className="mt-6 space-y-2">
        <h3 className="font-bold text-[#005F8C]">Ubicación de la propiedad</h3>
        <p className="text-[#4A4A4A]">Francisco de Paula Ugarriza 27, Miraflores, Lima</p>
        <img
          src="/map/mapa.png"
          alt="Mapa"
          className="w-full max-w-md h-auto rounded-lg shadow-md"
        />
      </section>
    </section>
  );
}
