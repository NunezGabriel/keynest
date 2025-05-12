import { FaUserAlt } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const Buton = ({ a }) => {
  return (
    <div>
      <button className="bg-green-500 hover:bg-blue-700 gap-3 text-white flex font-bold py-2 px-4 rounded">
        <FaUserAlt size={20} color="#ffffff" />
        {a}
      </button>
    </div>
  );
};

const ButtonHome = ({ a }) => {
  return (
    <div>
      <button className="bg-blue-300 hover:bg-blue-700 gap-3 text-white flex font-bold py-2 px-4 rounded">
        <IoIosHome size={20} color="#ffffff" />
        {a}
      </button>
    </div>
  );
}

const ButtonLogOut = ({ a }) => {
  return (
    <div>
      <button className="bg-blue-300 hover:bg-blue-700 gap-3 text-white flex font-bold py-2 px-4 rounded">
        <IoLogOutOutline size={20} color="#ffffff" />
        {a}
      </button>
    </div>
  );
}

export {ButtonHome, ButtonLogOut};
export default Buton;
