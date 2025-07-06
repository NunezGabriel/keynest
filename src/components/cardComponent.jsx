"use client";

import Image from "next/image";
import {
  RiMoneyDollarCircleLine,
  RiMoneyDollarCircleFill,
  RiEditBoxFill,
} from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { FaSquareXmark } from "react-icons/fa6";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { BsBoundingBox } from "react-icons/bs";
import { PiPawPrint } from "react-icons/pi";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import { useState } from "react";
import EditPropertyModal from "./modales/EditPropertyModal";

const CardComponent = ({
  type,
  property,
  onClose,
  onReopen,
  onDelete,
  onEdit,
}) => {
  const {
    is_rent = false,
    price = 0,
    property_type = "",
    location = "",
    bedrooms = 0,
    bathrooms = 0,
    square_meters = 0,
    pets_allowed = false,
    images = [],
  } = property || {};
  const [showEditModal, setShowEditModal] = useState(false);

  console.log(property);

  const backendURL = "http://localhost:8000";
  const imagePath = images[0]?.image_url;
  const firstImage = imagePath
    ? imagePath.startsWith("http")
      ? imagePath
      : backendURL + imagePath
    : "/images/house1.jpg";

  console.log("➡️ Imagen que se está usando:", firstImage);

  return (
    <>
      <div className="overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Link
          href={`/main-board/propertieDetail/${property?.property_id || "#"}`}
          className="w-[324px] rounded-xl bg-white mt-3 grid grid-rows-2 overflow-hidden"
        >
          <section className="relative h-48">
            <div className="absolute inset-0">
              <img
                src={firstImage}
                alt="imagen de la propiedad"
                className="w-full h-full object-cover"
              />
            </div>

            {type === "liked" && (
              <div className="absolute bg-[#ff2f3d] left-0 top-0 text-white tracking-wide px-6 py-1 rounded-br-xl gap-2 items-center flex">
                <FaHeart size={27} color="white" />
              </div>
            )}

            <div
              className={`absolute top-0 right-0 ${
                is_rent ? "bg-[#ffc107]" : "bg-[#22a069]"
              } text-white tracking-wide text-[16px] px-2.5 py-1 rounded-bl-xl gap-2 items-center flex`}
            >
              <RiMoneyDollarCircleFill size={30} color="white" />
              <h1 className="text-[16px]">
                {is_rent ? "ALQUILAR" : "COMPRAR"}
              </h1>
            </div>
          </section>

          <section className="p-4 space-y-7">
            <div className="flex items-center gap-11 justify-content-between">
              <div className="flex items-center text-xl gap-3">
                <RiMoneyDollarCircleLine size={30} />
                <h1>{price.toLocaleString()}</h1>
              </div>
              <div className="flex items-center text-sm gap-3">
                <FaRegBuilding size={23} />
                <h1>{property_type}</h1>
              </div>
            </div>

            <div className="max-w-[200px]">
              <h1 className="truncate">{location}</h1>
            </div>

            <div className="flex justify-around items-center">
              <div className="flex gap-1">
                <IoBedOutline size={25} />
                <p>{bedrooms}</p>
              </div>
              <div className="flex gap-1">
                <LuBath size={20} />
                <p>{bathrooms}</p>
              </div>
              <div className="flex gap-1">
                <BsBoundingBox size={20} />
                <p>{square_meters}m²</p>
              </div>
              <div className="flex gap-1">
                <PiPawPrint size={25} />
                <p>{pets_allowed ? "Si" : "No"}</p>
              </div>
            </div>
          </section>
        </Link>
        {type === "landlord" && (
          <div className="bg-[#005F8C] flex py-3 px-6 text-white justify-between rounded-b-lg">
            {/* Botón Editar (solo visible cuando status es 'disponible') */}
            {property.status === "disponible" && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowEditModal(true);
                }}
                className="flex items-center gap-2"
              >
                <RiEditBoxFill size={30} color="white" />
                <p>EDITAR</p>
              </button>
            )}

            {/* Botones Dinámicos */}
            {property.status === "disponible" ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (confirm("¿Cerrar esta propiedad?")) {
                    onClose();
                  }
                }}
                className="flex items-center gap-2"
              >
                <FaSquareXmark size={30} color="white" />
                <p>CERRAR</p>
              </button>
            ) : (
              <div className="flex gap-4 ml-auto">
                {" "}
                {/* ml-auto para alinear a la derecha */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (confirm("¿Reabrir esta propiedad?")) {
                      onReopen();
                    }
                  }}
                  className="flex items-center gap-2"
                >
                  <FiRefreshCw size={24} color="white" />
                  <p>RESTABLECER</p>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (confirm("¿Eliminar propiedad permanentemente?")) {
                      onDelete();
                    }
                  }}
                  className="flex items-center gap-2"
                >
                  <RiDeleteBinLine size={24} color="white" />
                  <p>ELIMINAR</p>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showEditModal && (
        <EditPropertyModal
          property={property}
          onClose={() => setShowEditModal(false)}
          onSave={(updatedProperty) => {
            onEdit(updatedProperty); // Notifica al componente padre
            setShowEditModal(false);
          }}
        />
      )}
    </>
  );
};

export default CardComponent;
