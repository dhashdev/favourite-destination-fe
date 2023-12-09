import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { FavouriteCityProvider } from './contexts/favouritesContext';
function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <FavouriteCityProvider>
          <AppRoutes />
        </FavouriteCityProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
