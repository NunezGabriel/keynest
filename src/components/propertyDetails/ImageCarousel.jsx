"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/images/house1.jpg",
  "/images/house2.jpg",
  "/images/house3.jpg",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center py-6 overflow-hidden">
      {/* Slider */}
      <div className="relative w-[80%] max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Propiedad ${idx + 1}`}
              className="w-full flex-shrink-0"
              onError={(e) => {
                console.error(`Error loading image: ${src}`);
                e.target.style.backgroundColor = "#f3f4f6";
                e.target.style.objectFit = "contain";
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
        {images.map((_, idx) => (
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

