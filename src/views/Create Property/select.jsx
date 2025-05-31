import UniversalButton from "@/components/UniversalButton";
import { useRouter } from "next/router";

const SelectPropertyType = () => {
  const router = useRouter();

  return (
    <div className="flex gap-4 justify-center mt-10">
      <UniversalButton
        text="RENTAR"
        onClick={() => router.push("/views/Create Property/rent")}
        color="primary"
      />
      <UniversalButton
        text="VENDER"
        onClick={() => router.push("/views/Create Property/sell")}
        color="secondary"
      />
    </div>
  );
};

export default SelectPropertyType;
