import React, { useState } from 'react';
import CarCard from './CarCard';

const makinat = [
  { id: 1, marka: "Mercedes-Benz", modeli: "S-Class", viti: 2022, km: "20,000 km", cmimi: "85,000 €", foto: "images/mercedes.jpg" },
  { id: 2, marka: "BMW", modeli: "M4", viti: 2021, km: "35,000 km", cmimi: "70,000 €", foto: "images/bmw.jpg" },
  { id: 3, marka: "Audi", modeli: "RS6", viti: 2023, km: "5,000 km", cmimi: "120,000 €", foto: "images/audi.jpg" },
  { id: 4, marka: "Porsche", modeli: "Cayenne S", viti: 2010, km: "185,000 km", cmimi: "21,500 €", foto: "images/porsche.jpg" },
  { id: 5, marka: "Volkswagen", modeli: "Golf 8 GTI", viti: 2021, km: "45,000 km", cmimi: "32,000 €", foto: "images/golf.jpg" },
  { id: 6, marka: "Ford", modeli: "Mustang GT", viti: 2020, km: "52,000 km", cmimi: "48,500 €", foto: "images/ford-mustang.jpg" }
];

export default function CarGrid({ searchTerm }) {
  const [selectedCar, setSelectedCar] = useState(null);

  const filteredCars = makinat.filter(car => 
    car.marka.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.modeli.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="row">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} onDetailsClick={setSelectedCar} />
        ))}
      </div>

      {selectedCar && (
        <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,.8)', backdropFilter: 'blur(8px)', zIndex: 1050 }}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 overflow-hidden shadow-lg">
              
              {/* Butoni mbyllës fiks mbi foto */}
              <button 
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
                style={{ zIndex: 10, filter: 'drop-shadow(0 0 2px black)' }}
                onClick={() => setSelectedCar(null)} 
              />

              <div className="modal-body p-0">
                <div className="row g-0">
                  
                  {/* KOLONA 1: Fotoja */}
                  <div className="col-lg-7">
                    <img 
                      src={selectedCar.foto} 
                      className="img-fluid h-100" 
                      style={{ objectFit: 'cover', minHeight: '400px', width: '100%' }} 
                      alt="car" 
                    />
                  </div>

                  {/* KOLONA 2: Detajet */}
                  <div className="col-lg-5 p-4 p-md-5 bg-white">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h1 className="fw-bold mb-0" style={{ color: '#1e293b' }}>{selectedCar.marka}</h1>
                        <p className="text-muted fs-4">{selectedCar.modeli}</p>
                      </div>
                      <span className="badge bg-primary fs-6 rounded-pill px-3 py-2">
                        {selectedCar.viti}
                      </span>
                    </div>

                    <hr className="my-4" />

                    {/* Grid i Specifikave */}
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="p-3 border rounded-3 bg-light text-center">
                          <i className="fas fa-road d-block mb-2 text-primary fs-4"></i>
                          <small className="text-muted d-block fw-bold small">KILOMETRA</small>
                          <span className="fw-bold">{selectedCar.km}</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border rounded-3 bg-light text-center">
                          <i className="fas fa-cog d-block mb-2 text-primary fs-4"></i>
                          <small className="text-muted d-block fw-bold small">NDËRRUESI</small>
                          <span className="fw-bold">{selectedCar.transmisioni || 'Automatik'}</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border rounded-3 bg-light text-center">
                          <i className="fas fa-gas-pump d-block mb-2 text-primary fs-4"></i>
                          <small className="text-muted d-block fw-bold small">KARBURANTI</small>
                          <span className="fw-bold">{selectedCar.karburanti || 'Naftë'}</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 border rounded-3 bg-light text-center">
                          <i className="fas fa-tachometer-alt d-block mb-2 text-primary fs-4"></i>
                          <small className="text-muted d-block fw-bold small">SHTETI</small>
                          <span className="fw-bold">RKS</span>
                        </div>
                      </div>
                    </div>

                    {/* Çmimi dhe Veprimi */}
                    <div className="mt-5 pt-4 border-top">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <small className="text-muted d-block fw-bold">ÇMIMI TOTAL</small>
                          <h2 className="text-primary fw-bold mb-0" style={{ fontSize: '2.5rem' }}>{selectedCar.cmimi}</h2>
                        </div>
                        <button className="btn btn-dark btn-lg px-4 py-3 rounded-3 fw-bold shadow">
                          REZERVONI
                        </button>
                      </div>
                    </div>

                    <p className="small text-muted mt-4 mb-0">
                      <i className="fas fa-shield-alt me-2 text-success"></i> 
                      Garancion 1 vjeçar për motor dhe ndërrues.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}