import { formatUTCToTime } from "../customHooks/useLiveDate";
import {
  WiHumidity,
  WiStrongWind,
  WiRain,
  WiHorizonAlt,
  WiHorizon,
} from "react-icons/wi";

export const ForecastDetails = ({
  humidity,
  wind_speed,
  uvi,
  sunrise,
  sunset,
  pop,
}) => {
  const precipitation = pop * 100;
  const sunRiseTime = formatUTCToTime(sunrise);
  const sunSetTime = formatUTCToTime(sunset);

  return (
    <div className="l-fDetails -flex-r-nw -rel">
      <div className="fDetails -flex-c-nw">
        <div className="fDetails-block -flex-r-nw">
          {humidity}%
          <WiHumidity className="fDetails-icon" />
        </div>

        <div className="fDetails-block -flex-r-nw">
          {Math.round(wind_speed)}m/s
          <WiStrongWind className="fDetails-icon" />
        </div>

        <div className="fDetails-block -flex-r-nw">
          {uvi}
          <svg className="fDetails-icon" viewBox="0 0 30 33">
            <path d="M13 30H9a2 2 0 0 1-2-2v-8h2v8h4v-8h2v8a2 2 0 0 1-2 2Zm12-10h-1.7L21 29l-2.2-9H17l2.5 10h3L25 20zM15 2h2v5h-2zm6.7 7 3.6-3.6 1.4 1.4-3.5 3.5zm3.3 6h5v2h-5zM2 15h5v2H2zm3.4-8.2L7 5.4l3.5 3.5L9 10.3zM22 17h-2v-1a4 4 0 0 0-8 0v1h-2v-1a6 6 0 0 1 12 0Z" />
            <path fill="none" d="M0 0h32v32H0z" />
          </svg>
        </div>
      </div>

      <div className="fDetails -flex-c-nw">
        <div className="fDetails-block -flex-r-nw">
          <span className="fDetails-time fDetails-time_sunrise">
            {`${sunRiseTime[0]}:${sunRiseTime[1]}`}
            <span className="fDetails-meridies">{sunRiseTime[2]}</span>
          </span>
          <WiHorizonAlt className="fDetails-icon" />
        </div>

        <div className="fDetails-block -flex-r-nw">
          <span className="fDetails-time fDetails-time_sunset">
            {`${sunSetTime[0]}:${sunSetTime[1]}`}
            <span className="fDetails-meridies">{sunSetTime[2]}</span>
          </span>
          <WiHorizon className="fDetails-icon" />
        </div>

        <div className="fDetails-block -flex-r-nw">
          <WiRain className="fDetails-rainIcon" />
          <span className="fDetails-rain">{precipitation}%</span>
        </div>
      </div>
    </div>
  );
};
