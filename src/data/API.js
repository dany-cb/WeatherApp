const positionStack = (query, queryLimit) => {
  const QUERY_LIMIT = queryLimit;
  const ACCESS_KEY = "af79882b02ef99d9f1cc5bdcafc88053";
  const API = `http://api.positionstack.com/v1/forward?access_key=${ACCESS_KEY}&limit=${QUERY_LIMIT}`;
  const URL = API + `&query=${query}`;
  return URL;
};

//Address to Coordinates (Offers SSL which positionStack doesn't)
const geoApify = (query, queryLimit) => {
  const API_KEY = "604258abea18405ba24de42e5df2e5c0";
  const URL = `https://api.geoapify.com/v1/geocode/search?text=${query}&limit=${queryLimit}&format=json&apiKey=${API_KEY}`;
  return URL;
};

//Coordinates to Weather data
const openWeather = (lat, lon) => {
  const API_KEY = "0a24cd627d9295e8e71966619864bdfe";
  const EXCLUDE = "alerts";
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${EXCLUDE}&appid=${API_KEY}&units=metric`;
  return URL;
};

export { positionStack, geoApify, openWeather };
