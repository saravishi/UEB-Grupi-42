import React from 'react';


export default function CarTable() {
  
  const makinat = [
    { id: 1, marka: "Mercedes-Benz", modeli: "S-Class", viti: 2022, km: "20,000 km", cmimi: "85,000 €", statusi: "E re" },
    { id: 2, marka: "BMW", modeli: "M4", viti: 2021, km: "35,000 km", cmimi: "70,000 €", statusi: "E re" },
    { id: 3, marka: "Audi", modeli: "RS6", viti: 2023, km: "5,000 km", cmimi: "120,000 €", statusi: "E re" },
    { id: 4, marka: "Porsche", modeli: "Cayenne S", viti: 2010, km: "185,000 km", cmimi: "21,500 €", statusi: "E përdorur" },
    { id: 5, marka: "Volkswagen", modeli: "Golf 8 GTI", viti: 2021, km: "45,000 km", cmimi: "32,000 €", statusi: "E përdorur" },
    { id: 6, marka: "Ford", modeli: "Mustang GT", viti: 2020, km: "52,000 km", cmimi: "48,500 €", statusi: "E re" },
    
  ];

  return (
    <section className="mt-4">
      <h2 className="mb-4"><i className="fas fa-table me-2"></i>Tabela e Makinave</h2>
      
      {}
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Marka</th>
              <th>Modeli</th>
              <th>Viti</th>
              <th>Kilometrazha</th>
              <th>Çmimi</th>
              <th>Statusi</th>
              <th>Veprimet</th>
            </tr>
          </thead>
          <tbody>
            {}
            {makinat.map((car) => (
              <tr key={car.id}>
                <td className="fw-bold">{car.marka}</td>
                <td>{car.modeli}</td>
                <td>{car.viti}</td>
                <td>{car.km}</td>
                <td className="text-primary fw-bold">{car.cmimi}</td>
                <td>
                  <span className={`badge ${car.statusi === 'E re' ? 'bg-success' : 'bg-secondary'}`}>
                    {car.statusi}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="fas fa-eye"></i> Shiko
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}