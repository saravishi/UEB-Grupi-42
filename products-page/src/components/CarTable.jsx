import React from 'react';

export default function CarTable({ searchTerm, onDetailsClick })  {
  const makinat = [
    { 
    id: 1, 
    marka: "Mercedes-Benz", 
    modeli: "S-Class", 
    viti: 2022, 
    km: "20,000 km", 
    cmimi: "85,000 €", 
    statusi: "E re", 
    foto: "images/mercedes.jpg", 
    karburanti: "Naftë", 
    transmisioni: "Automatik" 
  },
  { 
    id: 2, 
    marka: "BMW", 
    modeli: "M4", 
    viti: 2021, 
    km: "35,000 km", 
    cmimi: "70,000 €", 
    statusi: "E re", 
    foto: "images/bmw.jpg", 
    karburanti: "Benzinë", 
    transmisioni: "Automatik" 
  },
  { 
    id: 3, 
    marka: "Audi", 
    modeli: "RS6", 
    viti: 2023, 
    km: "5,000 km", 
    cmimi: "120,000 €", 
    statusi: "E re", 
    foto: "images/audi.jpg", 
    karburanti: "Benzinë", 
    transmisioni: "Automatik" 
  },
  { 
    id: 4, 
    marka: "Porsche", 
    modeli: "Cayenne S", 
    viti: 2010, 
    km: "185,000 km", 
    cmimi: "21,500 €", 
    statusi: "E përdorur", 
    foto: "images/porsche.jpg", 
    karburanti: "Naftë", 
    transmisioni: "Automatik" 
  },
  { 
    id: 5, 
    marka: "Volkswagen", 
    modeli: "Golf 8 GTI", 
    viti: 2021, 
    km: "45,000 km", 
    cmimi: "32,000 €", 
    statusi: "E përdorur", 
    foto: "images/golf.jpg", 
    karburanti: "Benzinë", 
    transmisioni: "Manual" 
  },
  { 
    id: 6, 
    marka: "Ford", 
    modeli: "Mustang GT", 
    viti: 2020, 
    km: "52,000 km", 
    cmimi: "48,500 €", 
    statusi: "E re", 
    foto: "images/ford-mustang.jpg", 
    karburanti: "Benzinë", 
    transmisioni: "Automatik" 
  }
  ];

  const filtered = makinat.filter(car => 
    car.marka.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.modeli.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>Marka & Modeli</th>
            <th>Viti</th>
            <th>KM</th>
            <th>Çmimi</th>
            <th>Statusi</th>
            <th>Veprim</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(car => (
            <tr key={car.id}>
              <td><strong>{car.marka}</strong> <br/> <small className="text-muted">{car.modeli}</small></td>
              <td>{car.viti}</td>
              <td>{car.km}</td>
              <td className="text-primary fw-bold">{car.cmimi}</td>
              <td><span className={`badge ${car.statusi === 'E re' ? 'bg-success' : 'bg-secondary'}`}>{car.statusi}</span></td>
              <td><button 
  className="btn btn-sm btn-outline-dark" 
  onClick={() => onDetailsClick(car)}
>
  Shiko
</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}