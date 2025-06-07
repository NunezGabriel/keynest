import Navbar from "@/components/Navbar";
import PropertyForm from "@/views/createProperty/propertyForm";

const CreatePropertie = () => {
  return (
    <div>
      <Navbar type={"landlordLog"} />
      <PropertyForm />
    </div>
  );
};

export default CreatePropertie;
