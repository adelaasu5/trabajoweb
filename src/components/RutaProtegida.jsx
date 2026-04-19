//src/components/RutaProtegida.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RutaProtegida() {
    const { user } = useAuth();

    if (!user) {
    return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default RutaProtegida;