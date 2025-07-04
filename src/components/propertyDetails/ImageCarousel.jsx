"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Imagen por defecto
const defaultImages = [
  "/images/house1.jpg",
  "/images/house2.jpg",
  "/images/house3.jpg",
];

export default function ImageCarousel({ imageUrls = [] }) {
  const imagesToShow = imageUrls.length > 0 ? imageUrls : defaultImages;
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(
      (prevIndex) => (prevIndex - 1 + imagesToShow.length) % imagesToShow.length
    );
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % imagesToShow.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % imagesToShow.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesToShow.length]);

  return (
    <div className="relative flex flex-col items-center py-6 overflow-hidden">
      {/* Slider */}
      <div className="relative w-[80%] max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {imagesToShow.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Propiedad ${idx + 1}`}
              className="w-full flex-shrink-0 object-cover"
              onError={(e) => {
                e.target.src = "/images/house1.jpg"; // fallback por si falla
              }}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-[-30px] -translate-y-1/2 pl-6">
        <button onClick={prev} aria-label="Anterior">
          <FaChevronLeft className="text-black text-3xl hover:text-blue-600 transition" />
        </button>
      </div>
      <div className="absolute top-1/2 right-[-30px] -translate-y-1/2 pr-6">
        <button onClick={next} aria-label="Siguiente">
          <FaChevronRight className="text-black text-3xl hover:text-blue-600 transition" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {imagesToShow.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-[#1290CB]" : "bg-gray-300"
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
