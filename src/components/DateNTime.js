import useLiveDate from "../customHooks/useLiveDate";

export const DateNTime = (props) => {
  const dateTime = useLiveDate(2, "FULL");
  if (dateTime)
    return (
      <>
        <div className="time">
          {dateTime.time[0]}:{dateTime.time[1]}
          {dateTime.time[2]}
        </div>
        {props.children}
        <div className="dateWrap">
          <div className="day">{dateTime.date[3]}</div>
          <div className="date">
            {dateTime.date[0]} {dateTime.date[1]}, {dateTime.date[2]}
          </div>
        </div>
      </>
    );
  else return null;
};
