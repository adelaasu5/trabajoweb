// src/context/AuthContext.jsx
import React, { useState, useContext, createContext } from 'react';

// 1. Crear el Contexto
const AuthContext = createContext(null);

// 2. Crear el Componente Proveedor (AuthProvider)
export function AuthProvider({ children }) {
  // 3. El Estado
    const [user, setUser] = useState(null);

  // 4. Funciones de Lógica de Negocio
    const login = (userData) => {
    setUser(userData); 
    };

    const logout = () => {
    setUser(null);
    };

  // 5. El Valor a Proveer
    const value = {
    user,
    login,
    logout,
    };

  // 6. Retornar el Proveedor
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 7. Crear un Hook Personalizado (Buena Práctica)
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
}