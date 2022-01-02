import { ImCalendar } from "react-icons/im";
import { formatUTCToTime } from "../customHooks/useLiveDate";
import WeatherIcon from "../data/WeatherIcon";

const HourlyForecastTable = ({ data }) => {
  return (
    <div className="l-fTable -span-10 -flex-c-nw">
      <div className="fTable-head -flex-r-nw">
        <h3>Hourly forecast</h3>
        <ImCalendar className="i-calendar" />
      </div>
      <div className="fTable-body">
        {data.map((item) => {
          const timeArr = formatUTCToTime(item.dt);
          return (
            <div className="fTable-block -flex-r-nw" key={item.dt}>
              <span className="fTable-time">{`${timeArr[0]}:${timeArr[1]}${timeArr[2]}`}</span>
              <span className="fTable-temp">{Math.round(item.temp)}°</span>
              <WeatherIcon key={item.weather[0].id} id={item.weather[0].id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecastTable;
