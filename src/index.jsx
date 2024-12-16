import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import CustomNavbar from './includes/Navbar';
import Footer from './includes/Footer';
import App from './App';
import Tienda from './pages/Tienda'
import Noticias from './pages/Noticias'
import Temporada from './pages/Temporada'
import Historia from './pages/Historia'
import Fans from './pages/Fans'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<App/>} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route path="/Tienda" element={<Tienda />} />
        <Route path="/Temporada" element={<Temporada />} />
        <Route path="/Historia" element={<Historia />} />
        <Route path="/Fans" element={<Fans />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);