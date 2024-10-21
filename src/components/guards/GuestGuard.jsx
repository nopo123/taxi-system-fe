// GuestGuard.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Loader from '/src/utils/loader.jsx';

const GuestGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return <Loader />; // Show loading while initializing
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Render children components if not authenticated
  return children;
};

export default GuestGuard;
