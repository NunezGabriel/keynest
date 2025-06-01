// components/RentDetailView.jsx
import React from 'react';
import CardComponent from './cardComponent';

const RentDetailView = ({ property }) => {
  return (
    <div>
      <CardComponent
        title={property.title}
        price={property.price}
        location={property.location}
        description={property.description}
        estado={true}
      />
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default RentDetailView;
