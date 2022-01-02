import { ImCalendar } from "react-icons/im";
import { getWeekDay } from "../customHooks/useLiveDate";
import WeatherIcon from "../data/WeatherIcon";

const WeeklyForecastTable = ({ data, setWeekDay }) => {
  const dayFromUTC = (utcTime) => {
    const date = new Date(utcTime * 1000);
    const day = getWeekDay(date.getDay());
    return day.slice(0, 3);
  };

  return (
    <div className="l-fWeeklyTable -span-10 -flex-c-nw">
      <div className="fTable-head -flex-r-nw">
        <h3>This week</h3>
        <ImCalendar className="i-calendar" />
      </div>
      <div className="fTable-body">
        {data.map((item, index) => {
          return (
            <div
              className="fTable-block -flex-r-nw -click"
              role="button"
              tabIndex={0}
              onClick={() => {
                setWeekDay(index);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  // Trigger the button element with a click
                  e.target.click();
                  e.stopPropagation();
                }
              }}
              key={item.dt}
            >
              <span>{dayFromUTC(item.dt)}</span>
              <span className="fTable-temp">
                {Math.round(item.temp.day)}° | {Math.round(item.feels_like.day)}
                °
              </span>
              <WeatherIcon key={item.weather[0].id} id={item.weather[0].id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WeeklyForecastTable;
