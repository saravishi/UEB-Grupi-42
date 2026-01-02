import React from 'react';

export default function CarCard({ car, onDetailsClick }) {
  if (!car) return null;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 overflow-hidden text-center car-card-custom">
        <div style={{ overflow: 'hidden', height: '220px' }}>
          <img
            src={car.foto}
            alt={`${car.marka} ${car.modeli}`}
            className="card-img-top"
            style={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold mb-1">{car.marka} {car.modeli}</h5>
          <div className="mb-2">
            <span className="badge bg-light text-muted border">Viti {car.viti}</span>
          </div>
          
          {}
          <div className="my-3">
            <h3 className="text-primary fw-bold mb-0">{car.cmimi}</h3>
            <small className="text-muted"><i className="fas fa-road me-1"></i>{car.km}</small>
          </div>

          <button
            className="btn btn-dark w-100 mt-auto py-2 shadow-sm"
            style={{ borderRadius: '12px', fontWeight: '600' }}
            onClick={() => onDetailsClick(car)}
          >
            Detajet
          </button>
        </div>
      </div>
    </div>
  );
}