import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import City from '../types/Cities';
import { FavouritesContextType } from '../types/favouritesContext.d';

//creating the context
const favouritesContext = createContext<FavouritesContextType | undefined>(
  undefined
);

interface FavouriteCityProps {
  children: ReactNode;
}
export const FavouriteCityProvider = ({ children }: FavouriteCityProps) => {
  const [addedCities, setAddedCities] = useState<City[]>([]);

  useEffect(() => {
    const storedFavouriteCities = localStorage.getItem('favouriteCities');

    //parsing the stored cities from local storage
    const parsedCities = storedFavouriteCities
      ? JSON.parse(storedFavouriteCities)
      : [];

    setAddedCities(parsedCities);
  }, []);

  const addCityToFavourite = (city: City) => {
    setAddedCities((previousCities) => [...previousCities, city]);
    localStorage.setItem(
      'favouriteCities',
      JSON.stringify([...addedCities, city])
    );
  };

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
  const contextValue: FavouritesContextType = {
    addedCities,
    addCityToFavourite,
    removeCityFromFavourite,
  };

  return (
    <favouritesContext.Provider value={contextValue}>
      {children}
    </favouritesContext.Provider>
  );
};

export const useFavouriteCityContext = () => {
  const context = useContext(favouritesContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};
