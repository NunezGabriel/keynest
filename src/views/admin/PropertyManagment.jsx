import FillterAdminComponent from "@/components/mainBoard/fillterAdminComponent";
import Navbar from "@/components/Navbar";
import CardProperties from "@/components/cardsAdmin/cardProperties";

const PropertyManagementView = () => {
  const properties = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Navbar type={"admin"} />
      <FillterAdminComponent />
      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-20 mb-24 mt-16 p-4 ">
        {properties.map((property, index) => (
          <CardProperties key={index} />
        ))}
      </section>
    </div>
  );
};

export default PropertyManagementView;
