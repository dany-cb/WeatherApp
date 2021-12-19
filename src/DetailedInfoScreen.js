import { useState } from "react";
import { useLocation } from "react-router-dom";
import Forecast, { WeeklyForecast } from "./Forecast";
import MenuBar from "./MenuBar";
import WeatherInfo from "./WeatherInfo";
import WeatherShortInfo from "./WeatherShortInfo";

const DaySelectMenu = ({ opt, setOpt }) => {
  return (
    <div className="day-menu">
      <span
        tabIndex={0}
        className={opt === 0 ? "day-menu__today active" : "day-menu__today"}
        onClick={() => {
          if (opt != 0) setOpt(0);
        }}
      >
        Today
      </span>
      <span
        tabIndex={0}
        className={opt === 1 ? "day-menu__tomrw active" : "day-menu__tomrw"}
        onClick={() => {
          if (opt != 1) setOpt(1);
        }}
      >
        Tomrw
      </span>
      <span
        tabIndex={0}
        className={opt === 2 ? "day-menu__week active" : "day-menu__week"}
        onClick={() => {
          if (opt != 2) setOpt(2);
        }}
      >
        Week
      </span>
    </div>
  );
};

const InnerView = ({ opt, data }) => {
  console.log(data);
  const getDayEnd = (unix_curtHourDt) => {
    const obj_time = new Date(unix_curtHourDt * 1000);
    const hrs = obj_time.getHours();
    return (24 - hrs) % 24;
  };
  const dayEnd = getDayEnd(data.hourly[0].dt);

  switch (opt) {
    case 0:
      return (
        <>
          <div className="forecast-info-wrap">
            <WeatherShortInfo data={data.daily[0]} className="today" />
            <WeatherInfo {...data.daily[0]} />
          </div>
          <Forecast data={data.hourly.slice(0, dayEnd)} />
        </>
      );

    case 1:
      return (
        <>
          <div className="forecast-info-wrap">
            <WeatherShortInfo data={data.daily[1]} className="tomrw" />
            <WeatherInfo {...data.daily[1]} />
          </div>
          <Forecast data={data.hourly.slice(dayEnd, dayEnd + 24)} />
        </>
      );

    default:
      return <WeeklyForecast data={data.daily.slice(0, 7)} />;
  }
};

const DetailedInfoScreen = (props) => {
  const [opt, setOpt] = useState(props.opt);
  const { state } = useLocation();
  return (
    <div className="detailed-page">
      <DaySelectMenu opt={opt} setOpt={setOpt} />
      <InnerView opt={opt} data={state} />
      <MenuBar ref={null} />
    </div>
  );
};

export default DetailedInfoScreen;
