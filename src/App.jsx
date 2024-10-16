import React from 'react';
import { BrowserRouter, RouterProvider, useRoutes } from 'react-router-dom';

// Project imports
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from './contexts/auth-reducer/auth';
import routes from './routes'; // Ensure the correct import path
import "./styles/global.css";

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

function AppContent() {
  const content = useRoutes(routes);
  return content;
}

export default function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <BrowserRouter>
          <AuthProvider>
            <SnackbarProvider maxSnack={2} autoHideDuration={2000}>
              <AppContent />
            </SnackbarProvider>
          </AuthProvider>
        </BrowserRouter>
      </ScrollTop>
    </ThemeCustomization>
  );
}
