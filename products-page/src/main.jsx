import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. Bootstrap i pari
import 'bootstrap/dist/css/bootstrap.min.css';
// 2. Stili yt i fundit (për t'i mbishkruar ngjyrat)
import './App.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);