import { useState } from "react";
import { carsData } from "../data/carsData";
import CarCard from "../components/CarCard";
import CarDetailsModal from "../components/CarDetailsModal";

function Products() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <>
      <div className="cars-grid">
        {carsData.map(car => (
          <CarCard
            key={car.id}
            car={car}
            onDetails={setSelectedCar}
          />
        ))}
      </div>

      <CarDetailsModal
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
      />
    </>
  );
}