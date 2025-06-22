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

const CardComponent = ({ type, property }) => {
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

  return (
    <div className="overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <Link
        href={`/main-board/propertieDetail/${property?.property_id || "#"}`}
        className="w-[324px] rounded-xl bg-white mt-3 grid grid-rows-2 overflow-hidden"
      >
        <section className="relative h-48">
          {" "}
          {/* Añadido altura fija */}
          <Image
            alt="imagen de la propiedad"
            src={images[0]?.url || "/image.png"} // Usa la primera imagen o una por defecto
            layout="fill"
            objectFit="cover"
          />
          {type === "liked" && (
            <div className="absolute bg-[#ff2f3d] left-0 text-white tracking-wide px-6 py-1 rounded-br-xl gap-2 items-center flex">
              <FaHeart size={27} color="white" />
            </div>
          )}
          <div
            className={`absolute ${
              is_rent ? "bg-[#ffc107]" : "bg-[#22a069]"
            } right-0 text-white tracking-wide text-[16px] px-2.5 py-1 rounded-bl-xl gap-2 items-center flex`}
          >
            <RiMoneyDollarCircleFill size={30} color="white" />
            <h1 className="text-[16px]">{is_rent ? "ALQUILAR" : "COMPRAR"}</h1>
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
          <Link
            href={`/my-properties/edit/${property?.property_id || "#"}`}
            className="flex items-center gap-2"
          >
            <RiEditBoxFill size={30} color="white" />
            <p>EDITAR</p>
          </Link>
          <Link
            href={`/my-properties/close/${property?.property_id || "#"}`}
            className="flex items-center gap-2"
          >
            <FaSquareXmark size={30} color="white" />
            <p>CERRAR</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
