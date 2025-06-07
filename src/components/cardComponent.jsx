import Image from "next/image";
import {
  RiMoneyDollarCircleLine,
  RiMoneyDollarCircleFill,
} from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { BsBoundingBox } from "react-icons/bs";
import { PiPawPrint } from "react-icons/pi";
import Link from "next/link";

const CardComponent = ({ estado }) => {
  return (
    <Link
      href={"/main-board/propertieDetail"}
      className="w-[324px] rounded-xl bg-white mt-3 grid grid-rows-2 overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
    >
      <section className="relative">
        <Image
          alt="imagen de la propiedad"
          src="/image.png"
          layout="fill"
          objectFit="cover"
        />
        <div
          className={
            estado
              ? "absolute bg-[#005F8C] right-0 text-white tracking-wide text-[16px] px-2.5 py-1 rounded-bl-xl gap-2 items-center flex"
              : "absolute bg-[#1290CB] right-0 text-white tracking-wide text-[16px] px-2.5 py-1 rounded-bl-xl gap-2 items-center flex"
          }
        >
          <RiMoneyDollarCircleFill size={30} color="white" />
          {estado ? (
            <h1 className="text-[16px]">ALQUILAR</h1>
          ) : (
            <h1 className="text-[16px]">COMPRAR</h1>
          )}
        </div>
      </section>
      <section className="p-4 space-y-7">
        <div className="flex items-center gap-11 justify-content-between">
          <div className="flex items-center text-xl gap-3">
            <RiMoneyDollarCircleLine size={30} />
            <h1>300,000</h1>
          </div>
          <div className="flex items-center text-sm gap-3">
            <FaRegBuilding size={23} />
            <h1>Departamento</h1>
          </div>
        </div>
        <div>
          <h1>88888 Jacob Gateway, Duganport, VVV48044</h1>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex gap-1">
            <IoBedOutline size={25} />
            <p>3</p>
          </div>
          <div className="flex gap-1">
            <LuBath size={20} />
            <p>2</p>
          </div>
          <div className="flex gap-1">
            <BsBoundingBox size={20} />
            <p>180m2</p>
          </div>
          <div className="flex gap-1">
            <PiPawPrint size={25} />
            <p>Si</p>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default CardComponent;
