# Favourite Destination App

The Favourite Destination App is a web application that allows users to explore and learn about different cities and mark them as their favorites.

## Table of Contents

- [Features](#features)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Explore Cities:** View a grid of city cards containing information about various destinations.
- **City Details:** Click on a city card to see detailed information about a specific city.
- **Favourite Cities:** Mark cities as favorites and view them in a dedicated section.
- **Login:** Simple login functionality to personalize the experience.

## Directory Structure

```plaintext
src/
|-- api/
|   |-- cities.http.service.ts
|   |-- citiesImage.http.service.ts
|-- components/
|   |-- CityCard.tsx
|   |-- ...
|-- contexts/
|   |-- favouritesContext.tsx
|-- hooks/
|   |-- useAuthentication.ts
|   |-- ...
|-- pages/
|   |-- Home.tsx
|   |-- CityInfo.tsx
|   |-- FavouriteCities.tsx
|   |-- Login.tsx
|-- types/
|   |-- Cities.d.ts
|   |-- favouritesContext.d.ts
|-- App.tsx
|-- index.tsx
|-- ...
```
