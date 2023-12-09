// Home.tsx
import React, { useState, useEffect } from 'react';
import { useAutheticate } from '../../hooks/useAuthentication';
import CityCard from '../../components/CityCard';
import { Cities } from '../../api/cities.http.service';
import City from '../../types/Cities';
import { Typography, CircularProgress, Box } from '@mui/material';
import './HomeStyles.css'; // Import the CSS file

/**
 * Home Component:
 * Displays a grid of city cards, allowing users to explore and learn about different destinations.
 */
const Home = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  // Ensure user authentication before rendering
  useAutheticate();

  // Fetch cities data on component mount
  useEffect(() => {
    fetchCities();
  }, []);

  // Fetch cities data from the API
  async function fetchCities() {
    try {
      const citiesResponse = await Cities.getAllCities();
      setCities(citiesResponse);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching cities:', error);
    }
  }

  return (
    <>
      <Box marginTop='20px' textAlign='center'>
        {/* Display a message encouraging users to explore destinations */}
        <Typography variant='h5'>
          Select to Know more about your next destination spot!
        </Typography>

        {/* Display loading spinner or city grid based on data availability */}
        <div className='citiesContainer'>
          {loading ? (
            <div className='loadingContainer'>
              <CircularProgress />
            </div>
          ) : (
            <div className='citiesGrid'>
              {/* Map through cities and render CityCard component for each */}
              {cities.map((city, index) => (
                <CityCard key={city.name} city={city} index={index} />
              ))}
            </div>
          )}
        </div>
      </Box>
    </>
  );
};

export default Home;
