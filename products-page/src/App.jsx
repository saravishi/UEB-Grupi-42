import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CarTable from './components/CarTable';
import CarGrid from './components/CarGrid';

function App() {
  const [isListView, setIsListView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />
      
      <header className="py-5 mb-4 bg-white border-bottom shadow-sm">
        <div className="container text-center">
          <h1 className="display-5 fw-bold" style={{ color: '#2d3748' }}>
            <span style={{ color: '#a2c2e1' }}>🚗</span> AutoShitje
          </h1>
          <p className="text-muted mb-4">Gjej makinën që të përshtatet me stilin tënd!</p>
          
          {/* Vetëm fusha e kërkimit, pa filtra poshtë */}
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="input-group shadow-sm rounded-pill overflow-hidden border">
                <span className="input-group-text bg-white border-0 ps-4">
                  <i className="fas fa-search text-muted"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control border-0 py-3" 
                  placeholder="Kërko markën ose modelin..." 
                  style={{ boxShadow: 'none', outline: 'none' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="btn bg-white border-0 text-muted pe-4" 
                    onClick={() => setSearchTerm("")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container flex-grow-1">
        {/* Kontrollet e pamjes */}
        <div className="d-flex justify-content-between align-items-center mb-4 px-3">
          <h2 className="h5 fw-bold text-muted mb-0">
            {searchTerm ? `Rezultatet për: ${searchTerm}` : (isListView ? "Lista e Detajuar" : "Veturat e Fundit")}
          </h2>
          <button 
            className="btn btn-dark shadow-sm px-4" 
            style={{ borderRadius: '12px', fontWeight: '600' }}
            onClick={() => setIsListView(!isListView)}
          >
            <i className={`fas ${isListView ? 'fa-th-large' : 'fa-list'} me-2`}></i>
            {isListView ? "Pamja me Karta" : "Pamja si Listë"}
          </button>
        </div>

        {/* Shfaqja e makinave */}
        <div className="view-transition">
          {isListView ? (
            <div className="p-3 bg-white rounded-4 shadow-sm border-0">
              <CarTable searchTerm={searchTerm} />
            </div>
          ) : (
            <CarGrid searchTerm={searchTerm} />
          )}
        </div>
      </main>

      <footer className="py-4 mt-5 text-center bg-white border-top">
        <p className="mb-0 text-muted small">© 2026 <strong>AutoShitje</strong>. Të gjitha të drejtat e rezervuara.</p>
      </footer>
    </div>
  );
}

export default App;