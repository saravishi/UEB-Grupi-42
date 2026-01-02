import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CarTable from './components/CarTable';
import CarGrid from './components/CarGrid';


function App() {
  const [isListView, setIsListView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#f8fafc' }}>
      <Navbar />
      
      {/* 🚀 HEADER MODERNE (HERO SECTION) */}
      <header className="py-5 mb-5 bg-white border-bottom shadow-sm position-relative overflow-hidden">
        {/* Dekorim në sfond (Opsionale) */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-05" style={{ backgroundImage: 'radial-gradient(#0284c7 1px, transparent 1px)', size: '20px 20px' }}></div>
        
        <div className="container position-relative text-center py-4">
          <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill fw-bold" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
             MBI 500+ VETURA NË STOK
          </span>
          
          <h1 className="display-4 fw-extrabold mb-2" style={{ color: '#0f172a', letterSpacing: '-1.5px' }}>
            Gjej makinën tënde <span className="text-primary">ideale</span>
          </h1>
          <p className="text-muted mb-5 mx-auto fs-5" style={{ maxWidth: '600px' }}>
            Zbuloni ofertat më të mira për makina të reja dhe të përdorura, me kontroll teknik të garantuar.
          </p>
          
          {/* 🔍 SEARCH BAR PREMIUM */}
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="search-wrapper shadow-lg rounded-pill p-2 bg-white d-flex align-items-center border">
                <div className="ps-3 pe-2 text-muted">
                  <i className="fas fa-search fs-5"></i>
                </div>
                <input 
                  type="text" 
                  className="form-control border-0 py-3 shadow-none" 
                  placeholder="Kërko markën, modelin ose vitin..." 
                  style={{ fontSize: '1.1rem', background: 'transparent' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="btn btn-link text-muted pe-3 shadow-none" 
                    onClick={() => setSearchTerm("")}
                  >
                    <i className="fas fa-times-circle fs-5"></i>
                  </button>
                )}
                <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold ms-2 d-none d-sm-block">
                  Kërko
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container flex-grow-1 pb-5">
        {/* ⚙️ KONTROLLET E PAMJES (GRID/LIST TOGGLE) */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-5 px-3 gap-3">
          <div>
            <h2 className="h4 fw-bold text-dark mb-1">
              {searchTerm ? `Rezultatet për "${searchTerm}"` : "Koleksioni i makinave"}
            </h2>
            <p className="text-muted small mb-0">Eksploro modelet tona më të fundit</p>
          </div>

          <div className="bg-white p-1 rounded-3 shadow-sm border d-flex gap-1">
            <button 
              className={`btn btn-sm px-4 py-2 rounded-2 transition-all ${!isListView ? 'btn-dark shadow' : 'btn-light border-0'}`}
              onClick={() => setIsListView(false)}
            >
              <i className="fas fa-th-large me-2"></i> Karta
            </button>
            <button 
              className={`btn btn-sm px-4 py-2 rounded-2 transition-all ${isListView ? 'btn-dark shadow' : 'btn-light border-0'}`}
              onClick={() => setIsListView(true)}
            >
              <i className="fas fa-list me-2"></i> Listë
            </button>
          </div>
        </div>

        {/* 📦 DISPLAY SECTION */}
        <div className="view-transition">
          {isListView ? (
  <CarTable searchTerm={searchTerm} onDetailsClick={setSelectedCar} />
) : (
  <CarGrid searchTerm={searchTerm} onDetailsClick={setSelectedCar} />
)}
        </div>
      </main>
      {/* 🚀 MODALI LUXURY UNIVERSAL */}
{selectedCar && (
  <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,.85)', backdropFilter: 'blur(10px)', zIndex: 1060 }}>
    <div className="modal-dialog modal-xl modal-dialog-centered">
      <div className="modal-content border-0 rounded-4 overflow-hidden shadow-lg">
        
        {/* Butoni mbyllës fiks mbi foto */}
        <button 
          className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
          style={{ zIndex: 10, filter: 'drop-shadow(0 0 2px black)' }}
          onClick={() => setSelectedCar(null)} 
        />

        <div className="modal-body p-0 text-start">
          <div className="row g-0">
            
            {/* KOLONA 1: Fotoja (E madhe) */}
            <div className="col-lg-7">
              <img 
                src={selectedCar.foto} 
                className="img-fluid h-100" 
                style={{ objectFit: 'cover', minHeight: '450px', width: '100%' }} 
                alt="car" 
              />
            </div>

            {/* KOLONA 2: Detajet (Dizajni i njëjtë si te Grid) */}
            <div className="col-lg-5 p-4 p-md-5 bg-white">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h1 className="fw-bold mb-0" style={{ color: '#1e293b' }}>{selectedCar.marka}</h1>
                  <p className="text-muted fs-4">{selectedCar.modeli}</p>
                </div>
                <span className="badge bg-primary fs-6 rounded-pill px-3 py-2">
                  {selectedCar.viti}
                </span>
              </div>

              <hr className="my-4" />

              {/* Rrjeti i Specifikave me Ikona */}
              <div className="row g-3">
                <div className="col-6">
                  <div className="p-3 border rounded-3 bg-light text-center">
                    <i className="fas fa-road d-block mb-2 text-primary fs-4"></i>
                    <small className="text-muted d-block fw-bold small">KILOMETRA</small>
                    <span className="fw-bold">{selectedCar.km}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded-3 bg-light text-center">
                    <i className="fas fa-cog d-block mb-2 text-primary fs-4"></i>
                    <small className="text-muted d-block fw-bold small">NDËRRUESI</small>
                    <span className="fw-bold">{selectedCar.transmisioni || 'Automatik'}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded-3 bg-light text-center">
                    <i className="fas fa-gas-pump d-block mb-2 text-primary fs-4"></i>
                    <small className="text-muted d-block fw-bold small">KARBURANTI</small>
                    <span className="fw-bold">{selectedCar.karburanti || 'Naftë'}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded-3 bg-light text-center">
                    <i className="fas fa-shield-alt d-block mb-2 text-primary fs-4"></i>
                    <small className="text-muted d-block fw-bold small">DOGANA</small>
                    <span className="fw-bold text-success">E paguar</span>
                  </div>
                </div>
              </div>

              {/* Çmimi dhe Butoni i Rezervimit */}
              <div className="mt-5 pt-4 border-top">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <small className="text-muted d-block fw-bold">ÇMIMI TOTAL</small>
                    <h2 className="text-primary fw-bold mb-0" style={{ fontSize: '2.5rem' }}>{selectedCar.cmimi}</h2>
                  </div>
                  <button className="btn btn-dark btn-lg px-4 py-3 rounded-3 fw-bold shadow-sm">
                    REZERVONI
                  </button>
                </div>
              </div>

              <p className="small text-muted mt-4 mb-0">
                <i className="fas fa-info-circle me-2 text-info"></i> 
                Garancion 1 vjeçar për motor dhe ndërrues.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)}

      {/* 🏁 FOOTER PREMIUM */}
      <footer className="py-5 mt-auto bg-white border-top">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-6 mb-3 mb-md-0">
              <h4 className="fw-bold text-primary mb-1">AutoShitje</h4>
              <p className="text-muted small mb-0">Partneri juaj i besuar për vetura që nga viti 2010.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0 text-muted small">© 2026 Të gjitha të drejtat e rezervuara.</p>
              <div className="mt-2 d-flex justify-content-center justify-content-md-end gap-3 text-muted">
                <i className="fab fa-facebook-f cursor-pointer hover-primary"></i>
                <i className="fab fa-instagram cursor-pointer hover-primary"></i>
                <i className="fab fa-twitter cursor-pointer hover-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;