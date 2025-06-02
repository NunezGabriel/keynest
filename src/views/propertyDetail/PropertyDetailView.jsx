"use client";

import { FaDollarSign } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/propertyDetails/ImageCarousel";
import PropertyDescription from "@/components/propertyDetails/PropertyDescription";
import PropertySpecs from "@/components/propertyDetails/PropertySpecs";
import ContactBox from "@/components/ContactBox";

export default function PropertyDetailView() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6 md:gap-10 flex-grow">
        {/* Carousel y ContactBox */}
        <div className="bg-[#F2F0F0] rounded-xl p-4 w-full max-w-[1000px] mx-auto flex flex-col md:flex-row gap-4">
          <div className="w-full md:flex-1 min-h-[240px]">
            <div className="aspect-video">
              <ImageCarousel />
            </div>
          </div>
          <div className="w-full md:w-[280px] flex justify-center md:justify-end items-center">
            <div className="w-full max-w-xs">
              <ContactBox />
            </div>
          </div>
        </div>

        {/* Información de la propiedad */}
        <div className="bg-white p-4 rounded-xl max-w-[1000px] mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
            Francisco de Paula Ugarriza 27
            <span className="flex items-center text-gray-500 text-base md:text-lg md:ml-2">
              <FaDollarSign className="mr-1" /> 300,000
            </span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm">Miraflores, Lima</p>

          <PropertySpecs />
          <PropertyDescription />
        </div>
      </main>

      <Footer />
    </div>
  );
}
