import { Routes, Route } from 'react-router-dom';
import React from 'react';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import Header from '../components/Header';
import Home from '../views/Home';
import CityInfo from '../views/CityInfo';
import FavouriteCities from '../views/FavouriteCities/FavouriteCities';

/**
 * AppRoutes Component:
 * Defines the application routes using React Router.
 */
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path='/' element={<Login />} />

      {/* Home Route with Header */}
      <Route
        path='/home'
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />

      {/* City Details Page */}
      <Route
        path='/cities/:id'
        element={
          <>
            <Header />
            <CityInfo />
          </>
        }
      />

      {/*  Favourites Page */}
      <Route
        path='/favourites'
        element={
          <>
            <Header />
            <FavouriteCities />
          </>
        }
      />

      {/* Default Route for Not Found Page */}
      <Route
        path='*'
        element={
          <>
            {' '}
            <Header /> <NotFound />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
