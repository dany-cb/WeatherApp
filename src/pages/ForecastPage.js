import { useEffect, useState } from "react";
import {
  DaySelectMenu,
  ForecastDetails,
  ForecastPanel,
  HourlyForecastTable,
  WeeklyForecastTable,
} from "../components";

const ForecastPage = (props) => {
  const [opt, setOpt] = useState(props.opt);

  return (
    <div className="l-container -flex-c-nw">
      <div className="l-daySelectMenu -span-8 -rel">
        <DaySelectMenu
          blockName="dayMenu"
          ariaLabel="Day select menu"
          items={["Today", "Tomrw", "Week"]}
          opt={opt}
          setOpt={setOpt}
        />
      </div>
      <div className="l-wrap -flex-c-nw -rel">
        <Content {...props} opt={opt} />
      </div>
    </div>
  );
};

const Content = (props) => {
  const [hourlyData, setHourlyData] = useState(null);
  const [weekDay, setWeekDay] = useState(0);

  useEffect(() => {
    //To split the hourly object into Today and Tomorrow
    const _hourlyData = ((hourlyData, maxEntries) => {
      const unixTime = hourlyData[0].dt;
      const hr = new Date(unixTime * 1000).getHours();
      const todayEnd = (24 - hr) % 24;
      return [
        hourlyData.slice(0, todayEnd),
        hourlyData.slice(todayEnd, todayEnd + maxEntries),
      ];
    })(props.hourly, 12);

    setHourlyData(_hourlyData);
  }, []);

  switch (props.opt) {
    case 0:
    case 1:
      return (
        <>
          <div className="l-forecast -span-10-p -flex-r-nw">
            <ForecastPanel
              xtraClassName="fPanel_small"
              data={props.daily[props.opt]}
            />
            <ForecastDetails {...props.daily[props.opt]} />
          </div>
          {hourlyData ? (
            <HourlyForecastTable data={hourlyData[props.opt]} />
          ) : null}
        </>
      );

    case 2:
      return (
        <>
          <WeeklyForecastTable
            data={props.daily.slice(0, 7)}
            setWeekDay={setWeekDay}
          />
          <div className="l-forecast -span-10-p -flex-r-nw">
            <ForecastPanel
              xtraClassName="fPanel_small"
              data={props.daily[weekDay]}
            />
            <ForecastDetails {...props.daily[weekDay]} />
          </div>
        </>
      );
  }
};

export default ForecastPage;
