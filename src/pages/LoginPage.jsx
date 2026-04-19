//src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  // Estado Local del Formulario
  const [username, setUsername] = useState('');

  // Obtenemos los hooks
  const navigate = useNavigate();
  const { login } = useAuth();

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el navegador recargue la página
    if (!username.trim()) return; // Validación simple

    // Simulación de datos de usuario
    const userData = {
      id: 1,
      name: username,
    };

    // Llamada a la función 'login' del Contexto
    login(userData);

    // Redirección al dashboard
    navigate('/dashboard');
  };

  return (
    <div className="page-container">
      <h1>Iniciar Sesión (Pública)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de usuario:
          <input
            type="text"
            placeholder="Escribe tu nombre"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;