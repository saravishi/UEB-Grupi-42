export default function CarCard({ car, onDetailsClick }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 overflow-hidden">

        <div style={{ overflow: 'hidden', height: '220px' }}>
          <img
            src={car.foto}
            alt={`${car.marka} ${car.modeli}`}
            className="card-img-top img-fluid"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <h5 className="card-title fw-bold mb-0">{car.marka}</h5>
              <p className="text-muted mb-0">{car.modeli}</p>
            </div>
            <span className="badge bg-primary rounded-pill">{car.viti}</span>
          </div>

          <div className="mt-2 mb-3">
            <div className="text-muted small">
              <i className="fas fa-tachometer-alt me-2"></i>{car.km}
            </div>
          </div>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <h4 className="text-primary fw-bold mb-0">{car.cmimi}</h4>

            {/* 👉 vetëm kjo rresht i ri */}
            <button
              className="btn btn-dark btn-sm px-3"
              onClick={() => onDetailsClick(car)}
            >
              Detajet
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
