import { useState } from 'react';
import Navbar from './components/Navbar';
import CarCard from './components/CarCard';
import { carData } from './data/cars';
import { FaFilter, FaRedo, FaTable, FaTh } from 'react-icons/fa';
import CarTable from './components/CarTable';

function App() {
  const [brand, setBrand] = useState("");
  const [filteredCars, setFilteredCars] = useState(carData);

  const handleFilter = () => {
    if (brand === "") {
      setFilteredCars(carData);
    } else {
      const filtered = carData.filter(car => car.brand === brand);
      setFilteredCars(filtered);
    }
  };

  const resetFilter = () => {
    setBrand("");
    setFilteredCars(carData);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      
      <main className="max-w-7xl mx-auto p-6">
        {/* Page Header */}
        <header className="text-center my-10">
          <h1 className="text-4xl font-extrabold text-gray-800 flex justify-center items-center gap-3">
            Të gjitha Makinat
          </h1>
          <p className="text-gray-500 mt-2 text-lg">Zgjidhni nga koleksioni ynë i gjerë</p>
        </header>

        {/* Filters Section */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-10 flex flex-wrap gap-4 items-end justify-center">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700 text-sm italic">Marka:</label>
            <select 
              value={brand} 
              onChange={(e) => setBrand(e.target.value)}
              className="border p-2 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Të gjitha</option>
              <option value="mercedes">Mercedes-Benz</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <button onClick={handleFilter} className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
            <FaFilter /> Filtro
          </button>
          <button onClick={resetFilter} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition">
            <FaRedo /> Reset
          </button>
        </section>

        <section className="mb-12">
  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
    <FaTable className="text-blue-500" /> Tabela e Makinave
  </h2>
  <CarTable cars={filteredCars} />
</section>

        {/* Grid View */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaTh className="text-blue-500" /> Pamje Grid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white text-center p-6 mt-20 italic font-mono">
        &copy; 2024 AutoShitje. Të gjitha të drejtat e rezervuara.
      </footer>
    </div>
  );
}

export default App;