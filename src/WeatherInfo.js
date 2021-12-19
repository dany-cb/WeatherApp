import {
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiRainWind,
} from "react-icons/wi";

function get12Hr(hr) {
  if (hr < 12) {
    if (hr === 0) hr = 12;
    return [
      hr,
      <span style={{ fontSize: "0.7em" }} key={1}>
        AM
      </span>,
    ];
  } else {
    if (hr === 12) hr = 24;
    return [
      hr - 12,
      <span style={{ fontSize: "0.7em" }} key={2}>
        PM
      </span>,
    ];
  }
}

const utcToTime = (time) => {
  const timeObj = new Date(time * 1000);
  const timeHr = get12Hr(timeObj.getHours());
  const timeFull = [timeHr[0], ":", timeObj.getMinutes(), timeHr[1]];
  return timeFull;
};

const WeatherInfo = ({ humidity, wind_speed, uvi, sunrise, sunset, pop }) => {
  const precipitation = pop * 100;
  const sunRiseTime = utcToTime(sunrise);
  const sunSetTime = utcToTime(sunset);

  return (
    <>
      <div className="weather-data">
        <div className="data">
          <span className="red">{humidity}%</span>
          <WiHumidity className="icon" />
        </div>
        <div className="data">
          <span className="red">{Math.round(wind_speed)}m/s</span>
          <WiStrongWind className="icon" />
        </div>
        <div className="data">
          <span className="red">{uvi}</span>
          <svg width={32} className="icon">
            <path d="M13 30H9a2 2 0 0 1-2-2v-8h2v8h4v-8h2v8a2 2 0 0 1-2 2Zm12-10h-1.7L21 29l-2.2-9H17l2.5 10h3L25 20zM15 2h2v5h-2zm6.7 7 3.6-3.6 1.4 1.4-3.5 3.5zm3.3 6h5v2h-5zM2 15h5v2H2zm3.4-8.2L7 5.4l3.5 3.5L9 10.3zM22 17h-2v-1a4 4 0 0 0-8 0v1h-2v-1a6 6 0 0 1 12 0Z" />
            <path fill="none" d="M0 0h32v32H0z" />
          </svg>
        </div>
      </div>
      <div className="weather-data">
        <div className="data">
          <span className="blue sunrise">{sunRiseTime}</span>
          <WiSunrise className="icon" />
        </div>
        <div className="data">
          <span className="blue sunset">{sunSetTime}</span>
          <WiSunset className="icon" />
        </div>
        <div className="data">
          <WiRainWind className="icon" />
          <span className="dark-blue rain">{precipitation}%</span>
        </div>
      </div>
    </>
  );
};

export { WeatherInfo as default, utcToTime };
