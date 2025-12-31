import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importimi i Bootstrap (UI Library) - kjo plotëson 20% të kërkesës
import 'bootstrap/dist/css/bootstrap.min.css';

// Importimi i stileve globale
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);