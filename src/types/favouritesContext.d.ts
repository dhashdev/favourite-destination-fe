import City from './Cities';

export interface FavouritesContextType {
  addedCities: City[];
  addCityToFavourite: (city: City) => void;
  removeCityFromFavourite: (city: City) => void;
}
