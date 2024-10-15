# Top Rated Movie and TV Shows App

An Angular application that allows users to browse top-rated movies and TV shows, search for content, adjust settings, and customize the theme.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Services](#services)
- [Styling and Theming](#styling-and-theming)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Top-Rated Movies and TV Shows**: Browse lists of top-rated movies and TV shows.
- **Search Functionality**: Search for movies or TV shows directly from the navigation bar. The search adjusts based on the current page (Movies or TV Shows).
- **Search Results Dropdown**: Search results appear as a dropdown below the search bar, allowing quick navigation to details.
- **Movie and TV Show Details**: View detailed information about a selected movie or TV show.
- **Settings Tooltip**: A settings button fixed at the bottom-right corner opens a tooltip to adjust the number of items displayed.
- **Dynamic Update of Items**: The lists update automatically when the number of items setting is changed.
- **Theme Selector**: Choose from multiple color themes (Black, Blue, Red, Green, Brown) to customize the app's appearance.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/movie-tv-app.git
   cd movie-tv-app
2. **Install Dependencies**

    ```bash
    npm install
3. **Set Up API Key**

Obtain an API key from The Movie Database (TMDB).

Create a file named environment.ts inside src/environments/ with the following content:

    
    export const environment = {
    production: false,
    tmdbApiKey: 'YOUR_TMDB_API_KEY',
    };


Replace 'YOUR_TMDB_API_KEY' with your actual TMDB API key.

4. **Run the Application**

    ```bash
    ng serve
Access the App

Open your browser and navigate to http://localhost:4200.

## Usage

### Browsing Content

- **Movies Page**: Displays top-rated movies. Access via the "Movies" link in the navigation bar.
- **TV Shows Page**: Displays top-rated TV shows. Access via the "TV Shows" link in the navigation bar.

### Searching

- **Search Bar**: Located in the navigation bar.
- **Search Scope**: Searches for movies or TV shows based on the current page.
- **Search Results**: Appear as a dropdown below the search bar. Click on a result to view details.

### Viewing Details

- Click on a movie or TV show to navigate to the detail page.
- **Detail Page**: Displays detailed information such as overview, release date, and ratings.

### Adjusting Settings

- **Settings Button**: Located at the bottom-right corner as a gear icon.
- **Settings Tooltip**: Click the button to open a tooltip to adjust the number of items displayed (1-23).
- **Automatic Update**: The lists update automatically when the setting is changed.

### Changing Themes

- **Theme Selector**: Dropdown located on the right side of the navigation bar.
- **Available Themes**: Black, Blue, Red, Green, Brown.
- **Persistent Selection**: The selected theme is saved and applied on subsequent visits.

---

## Components

### NavigationComponent

- **Purpose**: Provides navigation links and contains the search bar and theme selector.
- **Features**:
  - Fixed at the top of the page.
  - Includes the search bar and theme selector dropdown.

### SearchBarComponent

- **Purpose**: Allows users to search for movies or TV shows.
- **Features**:
  - Search results appear as a dropdown.
  - Searches adjust based on the current page (Movies or TV Shows).

### MoviesComponent

- **Purpose**: Displays a list of top-rated movies.
- **Features**:
  - Automatically updates when settings change.
  - Displays movies in a responsive grid layout.

### TvShowsComponent

- **Purpose**: Displays a list of top-rated TV shows.
- **Features**:
  - Automatically updates when settings change.
  - Displays TV shows in a responsive grid layout.

### DetailViewComponent

- **Purpose**: Shows detailed information about a selected movie or TV show.
- **Features**:
  - Adjusts content based on whether the item is a movie or TV show.

### SettingsComponent

- **Purpose**: Allows users to adjust application settings.
- **Features**:
  - Appears as a tooltip when clicking the settings button.
  - Fixed at the bottom-right corner.
  - Hidden on the detail view page.

---

## Services

### ApiService

- **Purpose**: Handles API calls to TMDB.
- **Methods**:
  - `getTopRatedMovies()`
  - `getTopRatedTvShows()`
  - `searchMovies(query: string)`
  - `searchTvShows(query: string)`
  - `getMovieDetails(id: string)`
  - `getTvShowDetails(id: string)`

### ConfigService

- **Purpose**: Manages application configuration settings.
- **Features**:
  - Provides `defaultItemCount` observable to update components when settings change.
  - Persists settings using `localStorage`.

### ThemeService

- **Purpose**: Manages the current theme of the application.
- **Features**:
  - Provides theme observable to allow components to react to theme changes.
  - Updates CSS variables to apply themes.
  - Persists the selected theme using `localStorage`.

---

## Styling and Theming

- **CSS Variables**: Used for theming, allowing dynamic changes to colors.
- **Themes**:
  - Defined in `ThemeService` and applied via CSS variables.
  - Adjust colors for the navigation bar and item backgrounds.
