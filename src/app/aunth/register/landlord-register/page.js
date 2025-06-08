import Navbar from "@/components/Navbar";
import LandlordForm from "@/views/aunth/LandLordForm";

const LaandlordRegister = () => {
  return (
    <div className="">
      <div className="relative z-50">
        <Navbar type={"noLogged"} />
      </div>
      <LandlordForm />
    </div>
  );
};

export default LaandlordRegister;
