const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300">
      {/* KËTU SHTOHET FOTOJA */}
      <img 
        src={`/images/${car.img}`} 
        alt={car.model} 
        className="w-full h-48 object-cover" 
      />
      
      <div className="p-4">
        <h3 className="text-xl font-bold uppercase text-gray-800">
          {car.brand} {car.model}
        </h3>
        <p className="text-gray-600">Viti: {car.year} | {car.km} km</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{car.price} €</span>
          <span className={`px-2 py-1 rounded text-sm ${
            car.status === "E re" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
          }`}>
            {car.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;