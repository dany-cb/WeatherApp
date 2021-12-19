import { ImCalendar } from "react-icons/im";
import { utcToTime } from "./WeatherInfo";
import WeatherIcons from "./WeatherIcons";

const utcToWeekDay = (dt) => {
  const dayNum = new Date(dt * 1000).getDay();
  switch (dayNum) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      throw new Error("Something wrong with Date() bro");
  }
};

const HourBlock = ({ hrlyData }) => {
  const blocks = hrlyData.map((item) => (
    <div className="data-wrap" key={item.dt}>
      <span className="time">{utcToTime(item.dt)}</span>
      <span className="temp">{Math.round(item.temp)}°</span>
      <WeatherIcons id={item.weather[0].id} className="icon" />
    </div>
  ));
  return blocks;
};

const DayBlock = ({ dayData }) => {
  const blocks = dayData.map((item) => (
    <div className="data-wrap" key={item.dt}>
      <span className="day">{utcToWeekDay(item.dt)}</span>
      <span className="temp double">
        {Math.round(item.temp.day)}° | {Math.round(item.feels_like.day)}°
      </span>
      <WeatherIcons id={item.weather[0].id} className="icon" />
    </div>
  ));
  return blocks;
};

const Forecast = ({ data }) => {
  return (
    <div className="forecast-table">
      <div className="title-wrap">
        <h3>Hourly forecast</h3>
        <ImCalendar className="icon-calndr" />
      </div>
      <HourBlock hrlyData={data} />
    </div>
  );
};

const WeeklyForecast = ({ data }) => {
  return (
    <div className="forecast-table">
      <div className="title-wrap">
        <h3>This week</h3>
        <ImCalendar className="icon-calndr" />
      </div>
      <DayBlock dayData={data} />
    </div>
  );
};
export { Forecast as default, WeeklyForecast };
