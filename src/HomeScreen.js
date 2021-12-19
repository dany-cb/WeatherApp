import SearchBar from "./SearchBar";
import DateTime from "./DateTime";
import React from "react";
import { useNavigate } from "react-router-dom";
import { slideDown, waveB2F } from "./Animation";

function HomeScreen() {
  const triggerAnimation = (coordinateData) => {
    const lon = coordinateData.longitude;
    const lat = coordinateData.latitude;
    const part = "alerts";
    const API_KEY = "0a24cd627d9295e8e71966619864bdfe";
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}&units=metric`;

    const tl = waveB2F(wave.current);
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          tl.pause();
          slideDown({ wave: wave.current, searchBar: searchBar.current }, () =>
            navigate(`/loc?query=${coordinateData.name}`, { state: data })
          );
        }, 4000)
      )
      .catch(console.error);
  };

  const navigate = useNavigate();
  const wave = React.createRef(null);
  const searchBar = React.createRef(null);

  return (
    <div className="home">
      <SearchBar ref={searchBar} triggerAnimation={triggerAnimation} />
      {/* <svg
        className="bg__wave"
        viewBox="0 -200 1080 3000"
        xmlSpace="preserve"
        preserveAspectRatio="none"
      >
        <path
          ref={wave}
          d="M-3944-618v989.4c225.2 156.1 882.3 172.8 1204.2 0s576.9-237.9 1021 0 964 0 964 0C161 116 447.3 476 962.2 371.4c622.3-126.4 976.8 34 976.8 34s474.4 155.3 933.8 0c443.2-149.8 889.3-78.1 1116.7.9 146 50.7 762.5 205.8 1165.6-52.1l-.2-972.3"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        />
      </svg> */}
      <svg
        className="bg__wave"
        preserveAspectRatio="none"
        xmlSpace="preserve"
        viewBox="0 0 1080 1920"
      >
        <path
          ref={wave}
          fill="#FFF"
          d="M-4318 348.8c128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41 106.5 2.1 193.3-23.4 249.1-43.1 128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41 106.5 2.1 248.6-41.5 248.6-41.5 128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41 106.5 2.1 193.3-21.4 249-41l-1.2.3c128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41C-142 393.6-55.2 368.1.6 348.4c128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41 106.5 2.1 248.6-41.5 248.6-41.5 128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41 106.5 2.1 249.2-41.4 249.2-41.4 128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41 106.5 2.1 193.3-23.4 249.1-43.1 128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41C4177.8 392.6 4320 349 4320 349c128.3-40.2 231.8-44.8 301-42 50.6 2.1 125.4 15.7 275 43 170.9 31.2 194.6 39.8 255 41 106.5 2.1 193.3-21.4 249-41l-.5-2817.5h-9718"
        />
      </svg>
      <DateTime />
    </div>
  );
}

export default HomeScreen;
