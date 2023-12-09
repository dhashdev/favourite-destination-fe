// citiesImage.http.service.ts

// Class for handling city image-related API calls
export class CitiesImageService {
  // Method to fetch a city image based on latitude and longitude
  public static async getCityImage(
    latitude: string,
    longitude: string
  ): Promise<string | null> {
    try {
      // Use the fetch API to get a random image from picsum.photos
      const imageResponse = await fetch(
        `https://picsum.photos/200/300/?random&latitude=${latitude}&longitude=${longitude}`
      );

      // Return the image URL if the request is successful
      return imageResponse.url;
    } catch (error) {
      console.error('Error fetching image:', error);

      // Return null in case of an error
      return null;
    }
  }
}
