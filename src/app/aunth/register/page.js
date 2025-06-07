import Navbar from "@/components/Navbar";
import Register from "@/views/aunth/register";

const RegsiterSelection = () => {
  return (
    <div>
      <Navbar type={"noLogged"} />
      <div className="relative">
        <Register />
      </div>
    </div>
  );
};

export default RegsiterSelection;
