import WeatherIcons from "./WeatherIcons";

const WeatherShortInfo = ({ data }) => {
  console.log(data.current.weather[0].id);

  return (
    <>
      <WeatherIcons
        id={data.current.weather[0].id}
        className="c-weather-icon"
      />
      <div className="temp-current">
        <p className="temp-current__real">
          {Math.round(data.current.temp)}
          <span className="symbol">°</span>
        </p>
        <p className="temp-current__feels">
          {Math.round(data.current.feels_like)}
          <span className="symbol">°</span>
        </p>
      </div>
      <p className="forecast">{data.current.weather[0].description}</p>
    </>
  );
};

export default WeatherShortInfo;
