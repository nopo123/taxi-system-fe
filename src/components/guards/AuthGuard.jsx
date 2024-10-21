// AuthGuard.jsx

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '/src/hooks/useAuth.jsx';
import Loader from '/src/utils/loader.jsx';

const AuthGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();
  const location = useLocation();

  if (!isInitialized) {
    return <Loader />; // Show loading while initializing
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  // Render children components if authenticated
  return children;
};

export default AuthGuard;
