"use client";

import { FaDollarSign } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/propertyDetails/ImageCarousel";
import PropertyDescription from "@/components/propertyDetails/PropertyDescription";
import PropertySpecs from "@/components/propertyDetails/PropertySpecs";
import ContactBox from "@/components/propertyDetails/ContactBox";
import ContactBoxSeeker from "@/components/propertyDetails/ContactBoxSeeker";
import ContactBoxLandlord from "@/components/propertyDetails/ContactBoxLandlord";
import { useEffect, useState } from "react";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";

export default function PropertyDetailView({ id }) {
  const { getProperty } = useProperty();
  const { user } = useAuth();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const backendURL = "http://localhost:8000";

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        setLoading(true);
        const propertyData = await getProperty(id);
        setProperty(propertyData);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPropertyData();
    }
  }, [id, getProperty]);

  if (loading) {
    return (
      <div className="bg-gray-100 text-gray-800 font-sans min-h-screen flex flex-col justify-between">
        <Navbar
          type={user?.user_type === "landlord" ? "landlordLog" : "seekerLog"}
        />
        <main className="max-w-6xl mx-auto px-4 py-6 flex-grow flex items-center justify-center">
          <p>Cargando propiedad...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="bg-gray-100 text-gray-800 font-sans min-h-screen flex flex-col justify-between">
        <Navbar
          type={user?.user_type === "landlord" ? "landlordLog" : "seekerLog"}
        />
        <main className="max-w-6xl mx-auto px-4 py-6 flex-grow flex items-center justify-center">
          <p>Propiedad no encontrada</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen flex flex-col justify-between">
      <Navbar
        type={user?.user_type === "landlord" ? "landlordLog" : "seekerLog"}
      />

      <main className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6 md:gap-10 flex-grow">
        {/* Carousel y ContactBox */}
        <div className="bg-[#F2F0F0] rounded-xl p-4 w-full max-w-[1500px] mx-auto flex flex-col md:flex-row gap-4">
          <div className="w-full md:flex-1 min-h-[240px]">
            <div className="aspect-video">
              <ImageCarousel
                imageUrls={
                  property.images?.map((img) =>
                    img.image_url.startsWith("http")
                      ? img.image_url
                      : backendURL + img.image_url
                  ) || []
                }
              />
            </div>
          </div>
          <div className="w-full md:w-[280px] flex justify-center md:justify-end items-center">
            <div className="w-full max-w-xs">
              {!user && <ContactBox />}
              {user?.user_type === "seeker" && (
                <ContactBoxSeeker propertyId={property.property_id} />
              )}
              {user?.user_type === "landlord" && (
                <ContactBoxLandlord propertyId={property.property_id} />
              )}
            </div>
          </div>
        </div>

        {/* Información de la propiedad */}
        <div className="bg-white p-4 rounded-xl max-w-[1000px] w-full mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
            {property.location || "Ubicación no especificada"}
            <span className="flex items-center text-gray-500 text-base md:text-lg md:ml-2">
              <FaDollarSign className="mr-1" />{" "}
              {property.price?.toLocaleString() || "0"}
            </span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">
            {property.property_type || "Tipo no especificado"}
          </p>

          <PropertySpecs
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            squareMeters={property.square_meters}
            petsAllowed={property.pets_allowed}
          />

          <PropertyDescription
            title={property.title}
            price={property.price?.toLocaleString()}
            location={property.location}
            description={property.description}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
