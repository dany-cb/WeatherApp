import { useEffect, useState } from "react";

const useLiveDate = (opt, optionalParam = null) => {
  const [initialMount, setInitialMount] = useState(true);
  const [state, setState] = useState(null);

  useEffect(() => {
    let timer = null;

    const updateDateTime = () => {
      const date = new Date();
      const dateArr = date.toString().split(" ");
      const timeArr = dateArr[4].split(":");
      const day =
        optionalParam === "FULL"
          ? getWeekDay(date.getDay())
          : getWeekDay(date.getDay()).slice(0, 3);

      switch (opt) {
        case 0:
          setState([dateArr[2], dateArr[1], dateArr[3], day]);
          break;
        case 1:
          setState(format12Hr(timeArr[0], timeArr[1]));
          break;
        case 2:
          setState({
            time: format12Hr(timeArr[0], timeArr[1]),
            date: [dateArr[2], dateArr[1], dateArr[3], day],
          });
          break;
        default:
          console.error("useLiveDate: Invalid option passed - ", opt);
      }
    };

    if (initialMount) {
      updateDateTime();
      setInitialMount(false);
    } else {
      if (opt != 0) timer = setTimeout(updateDateTime, 5000);
    }

    if (opt != 0)
      return () => {
        clearTimeout(timer);
        setInitialMount(true);
      };
  }, [state]);

  return state;
};

const getWeekDay = (dayNo) => {
  //Return the day based on the value of Date().getDay()
  switch (dayNo) {
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
      return "Saturday";
    default:
      throw new Error("Something wrong with Date() bro");
  }
};

const format12Hr = (hr, min) => {
  let intHr = parseInt(hr);
  if (min.length === 1) min = "0" + min;

  if (intHr < 12) {
    if (intHr === 0) intHr = 12; // Conversion of extremes since Hr ranges 0-23
    return [intHr, min, "am"];
  } else {
    if (intHr === 12) intHr = 24;
    return [intHr - 12, min, "pm"];
  }
};

const formatUTCToTime = (utcTime) => {
  const date = new Date(utcTime * 1000);
  const time = format12Hr(date.getHours(), date.getMinutes());
  return time;
};

export { useLiveDate as default, formatUTCToTime, getWeekDay };
