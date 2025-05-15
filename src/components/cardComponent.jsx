import Image from "next/image";
import {
  RiMoneyDollarCircleLine,
  RiMoneyDollarCircleFill,
} from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";

const CardComponent = () => {
  return (
    <div className="w-[324px] h-[360px] rounded-xl bg-white mt-3 grid grid-rows-2 overflow-hidden">
      <section className="relative">
        <Image
          alt="imagen de la propiedad"
          src="/image.png"
          layout="fill"
          objectFit="cover"
        />
        <RiMoneyDollarCircleFill size={30} />
      </section>
      <section className="p-4">
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
      </section>
    </div>
  );
};

export default CardComponent;
