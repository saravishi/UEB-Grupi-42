import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import CarTable from './components/CarTable';
import CarGrid from './components/CarGrid';
import './App.css';

function App() {
  // State për të ndërruar pamjen (false = tregon kartat, true = tregon tabelën)
  const [isListView, setIsListView] = useState(false);

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      
      <header className="py-5 bg-white border-bottom shadow-sm mb-4">
        <div className="container text-center">
          <h1 className="display-4 fw-bold text-primary">🚗 AutoShitje</h1>
          <p className="lead text-muted">Platforma juaj e besuar për makina</p>
        </div>
      </header>

      <main className="container flex-grow-1">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <Filters />
          </div>
        </div>

        {/* Butoni për ndërrimin e pamjes */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold mb-0">
            {isListView ? "Lista e Detajuar" : "Modelet e Fundit"}
          </h2>
          <button 
            className="btn btn-dark shadow-sm px-4" 
            onClick={() => setIsListView(!isListView)}
          >
            <i className={`fas ${isListView ? 'fa-th-large' : 'fa-list'} me-2`}></i>
            {isListView ? "Shfaq me Karta" : "Shfaq si Listë"}
          </button>
        </div>

        {/* Renderimi i kushtëzuar (Conditional Rendering) */}
        <div className="view-transition">
          {isListView ? (
            <div className="card shadow-sm border-0 p-3">
              <CarTable />
            </div>
          ) : (
            <CarGrid />
          )}
        </div>
      </main>

      <footer className="bg-dark text-white py-4 mt-5 text-center">
        <div className="container">
          <p className="mb-0">&copy; 2025 AutoShitje - Të gjitha të drejtat e rezervuara.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;