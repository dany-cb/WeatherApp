import { useState } from "react";
import Forecast from "./Forecast";

const DaySelectMenu = ({ opt, setOpt }) => {
  console.log(opt);
  return (
    <ul className="day-menu">
      <li
        className={opt === 0 ? "day-menu__today active" : "day-menu__today"}
        onClick={() => {
          if (opt != 0) setOpt(0);
        }}
      >
        Today
      </li>
      <li
        className={opt === 1 ? "day-menu__tomrw active" : "day-menu__tomrw"}
        onClick={() => {
          if (opt != 1) setOpt(1);
        }}
      >
        Tomrw
      </li>
      <li
        className={opt === 2 ? "day-menu__week active" : "day-menu__week"}
        onClick={() => {
          if (opt != 2) setOpt(2);
        }}
      >
        Week
      </li>
    </ul>
  );
};

const DetailedInfoScreen = (props) => {
  const [opt, setOpt] = useState(props.opt);
  return (
    <div className="detailed-page">
      <DaySelectMenu opt={opt} setOpt={setOpt} />
      <Forecast />
    </div>
  );
};

export default DetailedInfoScreen;
