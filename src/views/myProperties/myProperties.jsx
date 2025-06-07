import UniversalButton from "@/components/buttons/UniversalButton";
import CardComponent from "@/components/cardComponent";
import Navbar from "@/components/Navbar";

const MyProperties = () => {
  const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div>
      <Navbar type={"landlordLog"} />
      <div className="mt-16 mx-auto max-w-[1227px]">
        <UniversalButton
          iconClassName=""
          text={"REGISTRAR NUEVA PROPIEDAD"}
          href={"/my-properties/create-propertie"}
        />
        <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24 mt-28">
          {properties.map((item, index) => (
            <CardComponent key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default MyProperties;
