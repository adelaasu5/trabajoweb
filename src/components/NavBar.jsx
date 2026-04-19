//src/components/NavBar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav>
      {user ? (
        <>
          <span>Hola, {user.name}!</span>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/perfil">Mi Perfil</Link>
          <Link to="/ventas">Ventas</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/">Inicio</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;