import Navbar from "@/components/Navbar";
import LaandlordForm from "@/views/aunth/LandLordForm";

const LaandlordRegister = () => {
  return (
    <div className="">
      <div className="relative z-50">
        <Navbar type={"noLogged"} />
      </div>
      <LaandlordForm />
    </div>
  );
};

export default LaandlordRegister;
