import WeatherIcons from "./WeatherIcons";

const WeatherShortInfo = ({ data, className }) => {
  console.log(data.weather[0].id);

  return (
    <div className={`weather-info-wrap ${className}`}>
      <WeatherIcons id={data.weather[0].id} className="weather-icon" />
      <div className="temp">
        <p className="temp__real temp__value">
          {/* Filter, since the data received sometimes had max, min temperature inside data.temp */}
          {typeof data.temp === "number"
            ? Math.round(data.temp)
            : Math.round(data.temp.day)}
          <span className="sym-deg">°</span>
        </p>
        <p className="temp__feels temp__value">
          {typeof data.feels_like === "number"
            ? Math.round(data.feels_like)
            : Math.round(data.feels_like.day)}
          <span className="sym-deg">°</span>
        </p>
      </div>
      <p className="forecast">{data.weather[0].description}</p>
    </div>
  );
};

export default WeatherShortInfo;
