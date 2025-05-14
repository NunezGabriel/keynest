import { FaUserAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const ButtonProfile = ({ a }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex font-bold py-2 px-4 rounded-2xl">
        <FaUserAlt size={20} color="#ffffff" />
        {a}
      </button>
    </div>
  );
};

const ButtonHome = ({ b }) => {
  return (
    <div>
      <button className="bg-[#1290CB] hover:bg-[#16b4ff] gap-3 text-white flex font-bold py-2 px-4 rounded-2xl">
        <IoIosHome size={20} color="#ffffff" />
        {b}
      </button>
    </div>
  );
}

const ButtonLogOut = ({ c }) => {
  return (
    <div>
      <button className="bg-[#FFFFFF] border-[2px] hover:border-[#16b4ff] border-[#1290CB] gap-3 text-[#1290CB] hover:text-[#16b4ff] flex font-bold py-2 px-4 rounded-2xl">
        <IoLogOutOutline size={20}  />
        {c}
      </button>
    </div>
  );
}

export {ButtonHome, ButtonLogOut};
export default ButtonProfile;
