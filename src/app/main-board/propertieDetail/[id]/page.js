import PropertyDetailView from "@/views/propertyDetail/PropertyDetailView";

const PropertyDetail = ({ params }) => {
  return <PropertyDetailView id={params.id} />;
};

export default PropertyDetail;
