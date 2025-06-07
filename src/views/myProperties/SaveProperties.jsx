import UniversalButton from "@/components/buttons/UniversalButton";

const SaveProperties = () => {
  return (
    <div>
      <Navbar type={"seeker"} />
      <div className="mt-16 mx-auto max-w-[1227px]">
        <UniversalButton iconClassName="" text={"REGISTRAR NUEVA PROPIEDAD"} />
        <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24 mt-28">
          {properties.map((item, index) => (
            <CardComponent key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SaveProperties;
