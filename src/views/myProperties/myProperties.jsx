import UniversalButton from "@/components/buttons/UniversalButton";
import Navbar from "@/components/Navbar";

const MyProperties = () => {
  return (
    <div>
      <Navbar type={"landlordLog"} />
      <div className="mt-16 mx-auto max-w-[1120px]">
        <UniversalButton iconClassName="" text={"REGISTRAR NUEVA PROPIEDAD"} />
      </div>
    </div>
  );
};

export default MyProperties;
