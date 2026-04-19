//src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PerfilPage from './pages/PerfilPage';
import VentasPage from './pages/VentasPage';
import NotFoundPage from './pages/NotFoundPage';

// 1. Importamos nuestro componente de seguridad
import RutaProtegida from './components/RutaProtegida';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* --- Rutas Públicas --- */}
        {/* Estas rutas están como antes, accesibles para todos */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* --- Rutas Protegidas --- */}
        {/* 2. Creamos una "Ruta Contenedora" o "Layout Route" */}
        {/* Esta ruta usa <RutaProtegida> como su 'element'. */}
        <Route element={<RutaProtegida />}>
          {/* 3. Anidamos las rutas que queremos proteger DENTRO de la ruta contenedora */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/ventas" element={<VentasPage />} />
        </Route>

        {/* --- Ruta 404 --- */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;