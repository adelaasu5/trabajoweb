//src/pages/DashboardPage.jsx
import React from 'react';

// Esta será una de nuestras páginas protegidas.
function DashboardPage() {
  return (
    <div className="page-container">
      <h1>Dashboard (Privada)</h1>
      <p>Si puedes ver esto, estás autenticado.</p>
    </div>
  );
}

export default DashboardPage;