import WeatherIcon from "../data/WeatherIcon";

const ForecastPanel = ({ data, xtraClassName = "" }) => {
  console.log(data.weather[0].id);

  return (
    <div className={`fPanel ${xtraClassName}`}>
      <div className="fPanel-icon">
        <WeatherIcon id={data.weather[0].id} />
      </div>
      <div className="-flex-c-nw">
        <span className="fPanel-temp">
          {/* Filter, since the data received sometimes had max, min temperature inside data.temp */}
          {typeof data.temp === "number"
            ? Math.round(data.temp)
            : Math.round(data.temp.day)}
          ° |{" "}
          <span className="fPanel-feels">
            {typeof data.feels_like === "number"
              ? Math.round(data.feels_like)
              : Math.round(data.feels_like.day)}
            °
          </span>
        </span>
        <span className="fPanel-weather">{data.weather[0].description}</span>
      </div>
    </div>
  );
};

export default ForecastPanel;
