import { FaUserAlt } from "react-icons/fa";

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

export default Buton;
