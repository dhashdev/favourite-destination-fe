// cities.http.service.ts

import api from './api';
import City from '../types/Cities';

// Class for handling city-related API calls
export class Cities {
  // Method to fetch all cities from the API
  public static async getAllCities(): Promise<City[]> {
    try {
      const response = await api.get<{ cities: City[] }>('/cities');
      return response.data.cities;
    } catch (error) {
      console.error('Error fetching cities:', error);

      // Return an empty array in case of an error
      return [];
    }
  }

  //Method to fetch Sigle city with the id
  public static async getCity(id: number): Promise<City | null> {
    try {
      const response = await api.get<City>(`/cities/${id}`);
      return response.data;
    } catch (error) {
      console.log('Error fetching the city', error);

      return null;
    }
  }
}
