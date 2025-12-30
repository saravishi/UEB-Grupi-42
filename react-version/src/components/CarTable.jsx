import { FaEdit, FaTrash } from 'react-icons/fa';

const CarTable = ({ cars }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marka</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modeli</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Viti</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KM</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Çmimi</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Veprimet</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cars.map((car) => (
            <tr key={car.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 whitespace-nowrap font-bold text-blue-600 uppercase">{car.brand}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.model}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.year}</td>
              <td className="px-6 py-4 whitespace-nowrap">{car.km} km</td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">{car.price} €</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-3 text-lg">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarTable;