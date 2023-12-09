import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useAutheticate } from '../../hooks/useAuthentication';
import { FaHeart } from 'react-icons/fa';
import { useFavouriteCityContext } from '../../contexts/favouritesContext';
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Chip,
  Button,
} from '@mui/material';
import City from '../../types/Cities';
import { Cities } from '../../api/cities.http.service';
import { CitiesImageService } from '../../api/citiesImage.http.service';

const CityInfo = () => {
  const { addCityToFavourite } = useFavouriteCityContext();

  const [city, setCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [favouriteDisabled, setFavouriteDisabled] = useState<boolean>(false);
  const [key, setKey] = useState(0); // Add a key state

  const { id } = useParams();
  const intId = Number(id);
  useAutheticate();

  useEffect(() => {
    const fetchCity = async () => {
      try {
        let cityResponse = await Cities.getCity(intId);
        setCity(cityResponse);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching city:', error);
      }
    };

    fetchCity();
  }, [intId, key]); // Include key as a dependency

  useEffect(() => {
    const fetchImage = async () => {
      if (city) {
        const image = await CitiesImageService.getCityImage(
          city.latitude,
          city.longitude
        );
        setImageUrl(image);
      }
    };

    fetchImage();
  }, [city, key]); // Include key as a dependency

  useEffect(() => {
    const storedFavouriteCities = localStorage.getItem('favouriteCities');
    const parsedCities = storedFavouriteCities
      ? JSON.parse(storedFavouriteCities)
      : [];
    const alreadyAddedToFavourite = parsedCities.some(
      (favCity: City) => favCity.name === city?.name
    );
    setFavouriteDisabled(alreadyAddedToFavourite);
  }, [city, key]); // Include key as a dependency

  return (
    <Container maxWidth='md' style={{ textAlign: 'left', marginTop: '20px' }}>
      {loading ? (
        <Box style={{ textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box style={{ padding: '20px', textAlign: 'center' }}>
          <img
            src={imageUrl as string}
            alt={city?.name}
            width={400}
            height={400}
          />
          <Typography variant='h4' style={{ marginTop: '20px' }}>
            {city?.name}
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Country: </strong>
            {city?.country}
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Population: </strong> {city?.population}
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Founded: </strong> {city?.founded}
          </Typography>
          <Box style={{ marginTop: '10px' }}>
            <strong>Land marks: </strong>
            {city?.landmarks.map((landmark, index) => (
              <Chip
                key={index}
                label={landmark}
                style={{ marginRight: '5px', borderRadius: '16px' }}
              />
            ))}
          </Box>
          <Box margin='20px'>
            {favouriteDisabled ? (
              <Button color='primary' variant='contained' disabled>
                <FaHeart />
                Alread Added To Favourite
              </Button>
            ) : (
              <Button
                color='primary'
                variant='contained'
                onClick={() => {
                  city && addCityToFavourite(city as City);
                  setKey((prevKey) => prevKey + 1); // Update the key to force re-render
                }}
              >
                <FaHeart />
                Add To Favourite
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default CityInfo;
