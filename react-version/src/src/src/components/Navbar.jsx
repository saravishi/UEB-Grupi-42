import { FaCar, FaHome, FaTools, FaInfoCircle, FaPhone, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2 text-2xl font-bold text-blue-500">
        <FaCar /> <span>AutoShitje</span>
      </div>
      <ul className="hidden md:flex gap-6">
        <li className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"><FaHome /> Kreu</li>
        <li className="flex items-center gap-1 text-blue-500 font-bold cursor-pointer"><FaCar /> Makinat</li>
        <li className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"><FaTools /> Shërbimet</li>
        <li className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"><FaInfoCircle /> Rreth Nesh</li>
        <li className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"><FaPhone /> Kontakt</li>
      </ul>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 transition">
        <FaUser /> Kyçu
      </button>
    </nav>
  );
};
export default Navbar;