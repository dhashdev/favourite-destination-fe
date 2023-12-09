// CityCard.tsx

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { CitiesImageService } from '../../api/citiesImage.http.service';
import City from '../../types/Cities';
import { Link } from 'react-router-dom';
import './CityCardStyles.css';

interface CityCardProps {
  city: City;
  index: number;
}

const CityCard: React.FC<CityCardProps> = ({ city, index }) => {
  // State to store the URL of the city image
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch image using the separate service when the component mounts
    const fetchImage = async () => {
      // Use the latitude and longitude to get a unique image for each city
      const image = await CitiesImageService.getCityImage(
        city.latitude,
        city.longitude
      );
      setImageUrl(image);
    };

    fetchImage(); // Invoke the fetchImage function
  }, [city.latitude, city.longitude, city.name]); // Dependencies for the useEffect hook

  return (
    <Link to={`/cities/${index + 1}`} className='linkStyles'>
      <Card data-testid={`city-card-${city.name}`}>
        {/* Display the city image if available */}
        {imageUrl && (
          <CardMedia
            component='img'
            alt={city.name}
            height='140'
            image={imageUrl}
          />
        )}

        <CardContent>
          <Typography variant='h5'>{city.name}</Typography>
          <Typography variant='body2'>{city.country}</Typography>
          {/* Other city details can be added here as needed */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default CityCard;
