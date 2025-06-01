'use client';
import React from 'react';
import RentListView1 from '@/components/RentListView1';
import RentListView2 from '@/components/RentListView2';
import RentDetailView from '@/components/RentDetailView';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';

const JoshuaPage = () => {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Propiedades en alquiler</h1>

      {/* Puedes comentar/descomentar según cuál vista quieras probar */}
      <RentListView1 />
      {/* <RentListView2 /> */}
      {/* <RentDetailView property={{ title: 'Ejemplo', price: 'S/.2000', location: 'Lima', description: 'Bonito departamento' }} /> */}
      {/* <AvailabilityCalendar availability={[]} /> */}
    </main>
  );
};

export default JoshuaPage;
