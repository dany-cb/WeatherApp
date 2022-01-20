/**
 * Constructs and returns the geoApify URL based on the query
 * API_USE: Converts Address to Coordinates
 */
export const geoApify = (query, queryLimit) => {
  const API_KEY = "604258abea18405ba24de42e5df2e5c0";
  const URL = `https://api.geoapify.com/v1/geocode/search?text=${query}&limit=${queryLimit}&format=json&apiKey=${API_KEY}`;
  return URL;
};

//Coordinates to Weather data
export const openWeather = (lat, lon) => {
  const API_KEY = "0a24cd627d9295e8e71966619864bdfe";
  const EXCLUDE = "alerts";
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${EXCLUDE}&appid=${API_KEY}&units=metric`;
  return URL;
};

/**
 * Returns the URL to get a random Anime Quote
 */
export const animeQuote = () => {
  const URL = `https://animechan.vercel.app/api/random`;
  return URL;
};
