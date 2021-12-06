import { useState, useEffect } from "react";
import RandomQuote from "./RandomQuote";

function DateTime() {
  const dT = useDateTime();
  return (
    <>
      <h1 className="time">
        {dT.time.hr[0]}:{dT.time.min}
        {dT.time.hr[1]}
      </h1>
      <RandomQuote />
      <div className="today">
        <h2 className="today__day">{dT.date.day}</h2>
        <h3 className="today__date">{dT.date.date}</h3>
      </div>
    </>
  );
}

function useDateTime() {
  const [initialMount, setInitialMount] = useState(true);
  const [time, setTime] = useState({ min: "", hr: ["", ""] });
  const [date, setDate] = useState({ day: "", date: "" });

  useEffect(() => {
    let timer = null;

    const changeDateTime = () => {
      let dt = new Date();
      const dtAr = dt.toString().split(" ");
      const _time = dtAr[4].split(":");
      setTime({ hr: get12Hr(_time[0]), min: _time[1] });
      setDate({
        date: dtAr[2] + " " + dtAr[1] + ", " + dtAr[3],
        day: getWeekDay(dt.getDay()),
      });
    };

    if (initialMount) {
      changeDateTime();
      setInitialMount(false);
    } else {
      timer = setTimeout(changeDateTime, 5000);
    }
    return () => {
      clearTimeout(timer);
      setInitialMount(true);
    };
  }, [time]);

  function get12Hr(hr) {
    let intHr = parseInt(hr);
    if (intHr < 12) {
      if (intHr === 0) intHr = 12;
      return [intHr, "am"];
    } else {
      if (intHr === 12) intHr = 24;
      return [intHr - 12, "pm"];
    }
  }

  function getWeekDay(dayNum) {
    //Return the day based on the value of Date().getDay()
    switch (dayNum) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Sunday";
      default:
        throw new Error("Something wrong with Date() bro");
    }
  }
  return { time, date };
}

export { DateTime as default, useDateTime };
