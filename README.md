# Movie & TV Show Search App

A simple JavaScript application for searching movies and TV shows. This project leverages The Open Movie Database (OMDb) API to fetch and display relevant information. The app is inspired by a tutorial from [YouTube](https://www.youtube.com/watch?v=TgE71N0q5yI&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=16) as part of my JavaScript practice.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Acknowledgments](#acknowledgments)

## Features
- Search for movies and TV shows by title.
- Display detailed information about each movie or TV show, including the plot, actors, release date, and ratings.
- User-friendly interface with responsive design.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/movie-tv-show-search-app.git
    cd movie-guide-app
    ```
2. Open the `index.html` file in your web browser.

## Usage
1. Open the application in your web browser.
2. Enter the title of the movie or TV show you want to search for in the search bar.
3. Click the "Search" button or press Enter.
4. View the search results and click on any result to see more details.

## API
This project uses the OMDb API to fetch movie and TV show data. You need to sign up for an API key at [OMDb API](http://www.omdbapi.com/apikey.aspx).

1. Get your API key from OMDb.
2. Replace `YOUR_API_KEY` in the `script.js` file with your actual API key:
    ```javascript
    const apiKey = 'YOUR_API_KEY';
    ```
## Acknowledgments
- Thanks to [The Open Movie Database (OMDb) API](http://www.omdbapi.com/) for providing the movie and TV show data.
- Special thanks to the [YouTube tutorial](https://www.youtube.com/watch?v=TgE71N0q5yI&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=16) that inspired this project.
