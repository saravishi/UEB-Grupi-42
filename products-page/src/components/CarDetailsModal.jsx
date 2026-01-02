function CarDetailsModal({ car, onClose }) {
  if (!car) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✖</button>

        <img
          src={car.image}
          alt={car.brand}
          style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
        />

        <h2>{car.brand} {car.model}</h2>

        <div className="modal-specs">
          <span>{car.year}</span> | 
          <span>{car.fuel}</span> | 
          <span>{car.km.toLocaleString("de-DE")} km</span>
        </div>

        <p style={{ margin: "15px 0" }}>{car.description}</p>

        <h3 style={{ fontSize: "1.5rem" }}>
          {car.price.toLocaleString("de-DE")} €
        </h3>

        <button className="btn-testdrive">
          Rezervo Test Drive
        </button>
      </div>
    </div>
  );
}

export default CarDetailsModal;
