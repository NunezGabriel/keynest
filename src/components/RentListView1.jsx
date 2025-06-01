// components/RentListView1.jsx
import React from 'react';
import CardComponent from './cardComponent';

const RentListView1 = () => {
  const properties = [
    { title: 'Departamento en Miraflores', price: 'S/.2000', location: 'Miraflores' },
    { title: 'Mini-depa en Surco', price: 'S/.1500', location: 'Surco' },
    // Agrega más propiedades según sea necesario
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {properties.map((property, index) => (
        <CardComponent
          key={index}
          title={property.title}
          price={property.price}
          location={property.location}
          estado={true} // Indica que es para alquiler
        />
      ))}
    </div>
  );
};

export default RentListView1;
