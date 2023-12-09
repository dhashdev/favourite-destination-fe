import React from 'react';
import { Typography, Button, Grid, Box, Container } from '@mui/material';
import CityCard from '../../components/CityCard';
import { useFavouriteCityContext } from '../../contexts/favouritesContext';

/**
 * FavouriteCities Component:
 * Displays the list of user's favourite destinations.
 */
const FavouriteCities = () => {
  // Retrieve favourite cities and remove function from context
  const { addedCities, removeCityFromFavourite } = useFavouriteCityContext();

  return (
    <Container maxWidth='md'>
      <Box marginTop='20px' textAlign='center'>
        <Box margin='15px'>
          <Typography variant='h5'>My Favourite Destinations</Typography>
        </Box>

        {/* Check if any favorite cities exist */}
        {addedCities.length === 0 ? (
          <Typography variant='body1'>No favorite cities added yet.</Typography>
        ) : (
          // Display a grid of favourite cities
          <Grid container spacing={3} justifyContent='center'>
            {addedCities.map((city, index) => (
              <Grid item key={city.name}>
                {/* Display CityCard for each favourite city */}
                <CityCard city={city} index={index} />

                {/* Add a remove button for each favorite city */}
                <Box marginTop='5px'>
                  <Button
                    variant='outlined'
                    color='error'
                    onClick={() => removeCityFromFavourite(city)}
                  >
                    Remove from Favorites
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default FavouriteCities;
