import React from 'react';
// Importojmë komponentët
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import CarTable from './components/CarTable';
import CarGrid from './components/CarGrid';

// Importojmë stilet
import './App.css';

function App() {
  return (
    /* Klasa 'min-vh-100' siguron që faqja të mbulojë gjithë lartësinë e ekranit */
    <div className="min-vh-100 d-flex flex-column bg-light">
      
      {/* 1. Navigacioni */}
      <Navbar />
      
      {/* 2. Headeri - i pozicionuar në qendër */}
      <header className="py-5 bg-white border-bottom shadow-sm mb-5">
        <div className="container text-center">
          <h1 className="display-3 fw-bold text-primary">🚗 AutoShitje</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Mirësevini në platformën tonë! Gjeni makinat më të mira me çmimet më konkurruese në treg.
          </p>
        </div>
      </header>

      {/* 3. Përmbajtja Kryesore - E mbështjellë me CONTAINER për t'u qendërzuar */}
      <main className="container flex-grow-1">
        
        {/* Sekcioni i Filtrave */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <Filters />
          </div>
        </div>

        {/* Sekcioni i Tabelës - me titull të qendërzuar */}
        <section className="mb-5">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-primary p-2 rounded me-3 text-white">
              <i className="fas fa-list fa-lg"></i>
            </div>
            <h2 className="h3 mb-0 fw-bold">Lista e Inventarit</h2>
          </div>
          <div className="card shadow-sm border-0 p-3">
            <CarTable />
          </div>
        </section>

        {/* Vija ndarëse */}
        <hr className="my-5 opacity-25" />

        {/* Sekcioni i Gridit (Kartat) */}
        <section className="mb-5">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-dark p-2 rounded me-3 text-white">
              <i className="fas fa-th-large fa-lg"></i>
            </div>
            <h2 className="h3 mb-0 fw-bold">Pamje me Karta</h2>
          </div>
          <CarGrid />
        </section>

        {/* Pagination */}
        <nav className="d-flex justify-content-center pb-5">
          <ul className="pagination shadow-sm">
            <li className="page-item disabled"><span className="page-link">Para</span></li>
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">Pas</span></li>
          </ul>
        </nav>
      </main>

      {/* 4. Footer */}
      <footer className="bg-dark text-white py-5 mt-auto">
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 <strong>AutoShitje</strong>. Të gjitha të drejtat e rezervuara.</p>
          <small className="text-muted">Punuar me React + Bootstrap</small>
        </div>
      </footer>
    </div>
  );
}

export default App;