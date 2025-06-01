// components/RentListView2.jsx
import React, { useState } from 'react';
import FillterComponent from './fillterComponent';
import CardComponent from './cardComponent';

const RentListView2 = () => {
  const allProperties = [
    { title: 'Departamento en Miraflores', price: 'S/.2000', location: 'Miraflores' },
    { title: 'Mini-depa en Surco', price: 'S/.1500', location: 'Surco' },
    // Agrega más propiedades según sea necesario
  ];

  const [locationFilter, setLocationFilter] = useState('');
  const filteredProperties = allProperties.filter(property =>
    locationFilter ? property.location === locationFilter : true
  );

  return (
    <div>
      <FillterComponent onFilterChange={setLocationFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {filteredProperties.map((property, index) => (
          <CardComponent
            key={index}
            title={property.title}
            price={property.price}
            location={property.location}
            estado={true}
          />
        ))}
      </div>
    </div>
  );
};

export default RentListView2;
