import Navbar from "@/components/Navbar";
import SeekerForm from "@/views/aunth/SeekerForm";

const SeekerRegister = () => {
  return (
    <div className="">
      <div className="relative z-50">
        <Navbar type={"noLogged"} />
      </div>
      <SeekerForm />
    </div>
  );
};

export default SeekerRegister;
