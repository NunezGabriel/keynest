/* import { IoLogOutOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { LuPencil } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { RiUploadLine } from "react-icons/ri";


const ButtonLogOut = ({ a }) => {
  return (
    <div>
      <button className="bg-[#FFFFFF] border-[1px] hover:border-[#16b4ff] border-[#1290CB] gap-3 text-[#1290CB] font-normal text-base hover:text-[#16b4ff] flex justify-center items-center py-2 px-4 rounded-2xl">
        <IoLogOutOutline size={20}  />
        {a}
      </button>
    </div>
  );
}

const ButtonProfile = ({ b }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex justify-center items-center font-normal text-base py-2 px-4 rounded-2xl">
        <FaUserAlt size={20} color="#ffffff" />
        {b}
      </button>
    </div>
  );
};


const ButtonStart = ({ c }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex font-normal text-xl py-2 px-4 rounded-2xl">
        {c}
      </button>
    </div>
  );
}

const ButtonSearch = ({ d }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex font-bold py-2 px-4 rounded-sm">
        {d}
      </button>
    </div>
  );
}

const ButtonAdd = ({ e }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex justify-center items-center font-bold py-2 px-4 rounded-sm">
        <span className="flex-grow text-left">{e}</span>
        <IoMdAdd  size={20} color="#ffffff" />
      </button>
    </div>
  );
}

const ButtonEdit = ({ f }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex justify-center items-center font-bold py-2 px-4 rounded-sm">
        {f}
      </button>
    </div>
  );
}

const ButtonDelete = ({ g }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex font-bold py-2 px-4 rounded-sm">
        {g}
      </button>
    </div>
  );
}

const ButtonSearch2 = ({ h }) => {
  return (
    <div>
      <button className="flex items-center gap-2 justify-center py-2 px-3">
        <IoSearchOutline size={20} color="#000000" />
        <span className="uppercase font-medium text-black">{h}</span>
      </button>
    </div>
  );
}

const ButtonJoin = ({ i }) => {
  return (
    <div>
      <button className="bg-[#FFFFFF] border-[1px] hover:border-[#16b4ff] border-[#1290CB] gap-3 text-[#1290CB] hover:text-[#16b4ff] flex font-bold py-2 px-4 rounded-2xl">
        <FaUserAlt size={20} color="#1290CB" />
        {i}
      </button>
    </div>
  );
}

const ButtonLogIn = ({ j }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex font-bold py-2 px-4 rounded-2xl">
        <FaUserAlt size={20} color="#ffffff" />
        {j}
      </button>
    </div>
  );
};

const ButtonCreateAccount = ({ k }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex font-medium py-2 px-4 rounded-2xl">
        {k}
      </button>
    </div>
  );
};

const ButtonMyProperties = ({ l }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex justify-center items-center font-bold py-2 px-4 rounded-2xl">
        <IoIosHome size={20} color="#ffffff" />
        {l}
      </button>
    </div>
  );
}

const ButtonSave = ({ m }) => {
  return (
    <div>
      <button className="bg-[#1290CB] border-[2px] hover:border-[#16b4ff] border-[#1290CB] gap-3 text-[#ffffff] justify-center items-center hover:text-[#16b4ff] flex font-bold py-2 px-4 rounded-2xl">
        <IoHeart size={20} color="#ffffff"  />
        {m}
      </button>
    </div>
  );
}

const ButtonAccept = ({ n }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        {n}
      </button>
    </div>
  );
}

const ButtonCreateAccount2 = ({ o }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        {o}
      </button>
    </div>
  );
}

const ButtonPrice = ({ p }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        {p}
      </button>
    </div>
  );
}

const ButtonPropertyType = ({ q }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        {q}
      </button>
    </div>
  );
}

const ButtonRoomBath = ({ r }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        {r}
      </button>
    </div>
  );
}

const ButtonPlus = ({ s }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-2 text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        <span className="flex-grow text-left">{s}</span>
        <GoChevronDown size={20} color="#ffffff" />
      </button>
    </div>
  );
}

const ButtonContactAdvertiser = ({ t }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex font-medium py-2 px-4 rounded-2xl">
        {t}
      </button>
    </div>
  );
}

const ButtonAddFavourites = ({ u }) => {
  return (
    <button className=" flex items-center gap-2 text-gray-600 hover:text-[#16b4ff] transition-colors">
      <span className="bg-amber-50">{u}</span>
      <IoHeart size={20} color="gray" />
      
    </button>
  );
};

const ButtonEditProperty = ({ v }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-2 text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        <div className="bg-white rounded-md p-1 flex items-center justify-center">
          <LuPencil className = "text-[#1290CB]" size={20}/>
        </div>
        {v}
      </button>
    </div>
  );
}

const ButtonRegisterNP = ({ w }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex justify-center items-center font-regular py-2 px-4 rounded-2xl">
        <FiPlusCircle size={20} color="#ffffff" />
        {w}
      </button>
    </div>
  );
}

const ButtonUpload = ({ x }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        <RiUploadLine size={20} color="#ffffff" />
        {x}
      </button>
    </div>
  );
}

const ButtonPublishProperty = ({ y }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex justify-center items-center font-medium py-2 px-4 rounded-2xl">
        {y}
      </button>
    </div>
  );
}

export {ButtonLogOut, ButtonStart, ButtonSearch, ButtonAdd, ButtonEdit, ButtonDelete, ButtonSearch2, ButtonJoin, ButtonLogIn, ButtonCreateAccount, ButtonMyProperties, ButtonSave, ButtonAccept, ButtonCreateAccount2, ButtonPrice, ButtonPropertyType, ButtonRoomBath, ButtonPlus, ButtonContactAdvertiser, ButtonAddFavourites, ButtonEditProperty, ButtonRegisterNP, ButtonUpload, ButtonPublishProperty};
export default ButtonProfile;
 */