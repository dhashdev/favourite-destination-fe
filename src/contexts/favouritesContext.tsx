import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import City from '../types/Cities';
import { FavouritesContextType } from '../types/favouritesContext.d';

// Creating the context
const favouritesContext = createContext<FavouritesContextType | undefined>(
  undefined
);

interface FavouriteCityProps {
  children: ReactNode;
}
export const FavouriteCityProvider = ({ children }: FavouriteCityProps) => {
  // State to manage added cities
  const [addedCities, setAddedCities] = useState<City[]>([]);

  // Fetch stored cities from local storage on component mount
  useEffect(() => {
    const storedFavouriteCities = localStorage.getItem('favouriteCities');

    // Parsing the stored cities from local storage
    const parsedCities = storedFavouriteCities
      ? JSON.parse(storedFavouriteCities)
      : [];

    setAddedCities(parsedCities);
  }, []);

  // Add a city to the list of favorites
  const addCityToFavourite = (city: City) => {
    setAddedCities((previousCities) => [...previousCities, city]);
    localStorage.setItem(
      'favouriteCities',
      JSON.stringify([...addedCities, city])
    );
  };

  // Remove a city from the list of favorites
  const removeCityFromFavourite = (city: City) => {
    const parsedCities = JSON.parse(
      localStorage.getItem('favouriteCities') as string
    );
    const removeCity = parsedCities.filter(
      (rCity: City) => rCity.name !== city.name
    );
    setAddedCities(removeCity);
    localStorage.setItem('favouriteCities', JSON.stringify(removeCity));
  };

  // Context value containing added cities and related functions
  const contextValue: FavouritesContextType = {
    addedCities,
    addCityToFavourite,
    removeCityFromFavourite,
  };

  return (
    // Provide the context value to the children components
    <favouritesContext.Provider value={contextValue}>
      {children}
    </favouritesContext.Provider>
  );
};

// Custom hook to access the favorites context
export const useFavouriteCityContext = () => {
  const context = useContext(favouritesContext);

  // Throw an error if the context is not found
  if (!context) {
    throw new Error('FavouriteCityContext not found');
  }

  return context;
};
