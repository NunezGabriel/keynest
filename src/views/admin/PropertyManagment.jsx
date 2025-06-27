"use client";
import { useEffect, useState } from "react";
import FillterAdminComponent from "@/components/mainBoard/fillterAdminComponent";
import Navbar from "@/components/Navbar";
import CardProperties from "@/components/cardsAdmin/cardProperties";
import Footer from "@/components/footer";
import { useProperty } from "@/context/PropertyContext";

const PropertyManagementView = () => {
  const { getProperties, deleteProperty } = useProperty();
  const [properties, setProperties] = useState([]);

  // Cargar propiedades reales al montar
  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getProperties();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  // 🗑️ Eliminar propiedad
  const handleDelete = async (id) => {
    const res = await deleteProperty(id);
    if (res?.message === "Propiedad eliminada correctamente") {
      setProperties((prev) =>
        prev.filter((property) => property.property_id !== id)
      );
    } else {
      alert("Error eliminando propiedad");
    }
  };

  return (
    <div>
      <Navbar type="admin" />
      <FillterAdminComponent type={"propertyFillter"} />

      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-20 mb-24 mt-16 p-4">
        {properties.map((property) => (
          <CardProperties
            key={property.property_id}
            property={property}
            onDelete={() => handleDelete(property.property_id)}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default PropertyManagementView;
