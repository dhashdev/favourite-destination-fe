# Favourite Destination App

The Favourite Destination App is a web application that allows users to explore and learn about different cities and mark them as their favorites.\

![Favourite Destination Logo](/public/images/login-logo.png)


## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
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

## Live Demo

Check out the live demo of the Favourite Destination App at <https://favourite-destination.netlify.app/>.

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

- api: Contains services for interacting with external APIs.
- components: Reusable React components.
- contexts: React contexts for state management.
- hooks: Custom React hooks.
- pages: Individual pages/routes of the application.
- types: TypeScript type definitions.
- App.tsx: The main entry point of the application.
- index.tsx: Root file for rendering the React application.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/favourite-destination-app.git
```

2. Install Dependencies

```bash
cd favourite-destination-app
npm install
```

3.Run the application

```bash
npm start
```

## Usage

- Navigate to <http://localhost:3000> to access the Favourite Destination App.
- Explore cities, mark favorites, and enjoy the personalized experience!

## Technologies Used

- React
- Typescript
- Material UI
- Axios
- Cypress

## Contributing

Feel free to contribute to the project. Create a pull request or open an issue to discuss new features, improvements, or bug fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
