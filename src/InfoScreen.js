import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import MenuBar from "./MenuBar";
import { fadeIn } from "./Animation";
import WeatherShortInfo from "./WeatherShortInfo";
import { BsChevronCompactDown } from "react-icons/bs";

const date = (() => {
  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const year = dateObj.getFullYear();
  return `${month} ${day}, ${year}`;
})();

const InfoScreen = () => {
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const [weatherData, setWeatherData] = useState(state);
  const menu = useRef(null);
  const place = searchParams.get("query");
  useLayoutEffect(() => {
    fadeIn(menu.current);
  }, []);
  const nav = useNavigate();

  useEffect(() => {
    if (!state) {
      console.log("State not passed! Fetching...");
      const COORD_API = `http://api.positionstack.com/v1/forward?access_key=af79882b02ef99d9f1cc5bdcafc88053&limit=1&query=${place}`;

      fetch(COORD_API)
        .then((response) => response.json())
        .then((data) => {
          const part = "alerts";
          const API_KEY = "0a24cd627d9295e8e71966619864bdfe";
          const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].latitude}&lon=${data[0].longitude}&exclude=${part}&appid=${API_KEY}&units=metric`;
          fetch(URL)
            .then((response) => response.json())
            .then((data) => {
              setWeatherData(data);
            })
            .catch((e) => console.log("Error in retrieving Weather ", e));
        })
        .catch((e) => console.log("Error in getting coordinates ", e));
    }
  }, []);

  console.log(weatherData);
  return (
    <div className="info">
      <div className="title">
        <h2 className="title__place">{place}</h2>
        <h4 className="title__date">{date}</h4>
      </div>

      <WeatherShortInfo data={weatherData} />
      <BsChevronCompactDown
        className="down-arrow"
        onClick={() => {
          nav("/info");
        }}
      />
      <MenuBar ref={menu} />
    </div>
  );
};

export default InfoScreen;
