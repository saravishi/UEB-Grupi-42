import React from 'react';
import CarCard from './CarCard'; 

const makinat = [
  { id: 1, marka: "Mercedes-Benz", modeli: "S-Class", viti: 2022, km: "20,000 km", cmimi: "85,000 €",foto: "/images/mercedes.jpg" },
  { id: 2, marka: "BMW", modeli: "M4", viti: 2021, km: "35,000 km", cmimi: "70,000 €", foto: "/images/bmw.jpg" },
  { id: 3, marka: "Audi", modeli: "RS6", viti: 2023, km: "5,000 km", cmimi: "120,000 €", foto: "/images/audi.jpg" }
];


export default function CarGrid() {
  return (
    <section className="mt-5">
      <h3 className="mb-4 fw-bold text-dark"><i className="fas fa-th me-2"></i>Pamje me Karta</h3>
      <div className="row">
        {makinat.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}