import React, { useState } from 'react';
import CarCard from './CarCard';

const makinat = [
  { id: 1, marka: "Mercedes-Benz", modeli: "S-Class", viti: 2022, km: "20,000 km", cmimi: "85,000 €", foto: "/images/mercedes.jpg" },
  { id: 2, marka: "BMW", modeli: "M4", viti: 2021, km: "35,000 km", cmimi: "70,000 €", foto: "/images/bmw.jpg" },
  { id: 3, marka: "Audi", modeli: "RS6", viti: 2023, km: "5,000 km", cmimi: "120,000 €", foto: "/images/audi.jpg" },
  { id: 4, marka: "Porsche", modeli: "Cayenne S", viti: 2010, km: "185,000 km", cmimi: "21,500 €", foto: "/images/porsche.jpg" },
  { id: 5, marka: "Volkswagen", modeli: "Golf 8 GTI", viti: 2021, km: "45,000 km", cmimi: "32,000 €", foto: "/images/golf.jpg" },
  { id: 6, marka: "Ford", modeli: "Mustang GT", viti: 2020, km: "52,000 km", cmimi: "48,500 €", foto: "/images/ford-mustang.jpg" }
];

export default function CarGrid() {
  const [selectedCar, setSelectedCar] = useState(null); // ✅ KURRË car këtu

  return (
    <>
      <section className="mt-5">
        <h3 className="mb-4 fw-bold text-dark">
          <i className="fas fa-th me-2"></i>Pamje me Karta
        </h3>

        <div className="row">
          {makinat.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onDetailsClick={setSelectedCar} // ✅ veç funksioni
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedCar && (
        <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedCar.marka} {selectedCar.modeli}
                </h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedCar(null)}
                />
              </div>

              <div className="modal-body">
                <img
                  src={selectedCar.foto}
                  className="img-fluid rounded mb-3"
                />
                <p><strong>Viti:</strong> {selectedCar.viti}</p>
                <p><strong>Kilometra:</strong> {selectedCar.km}</p>
                <p><strong>Çmimi:</strong> {selectedCar.cmimi}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
