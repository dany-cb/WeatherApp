import useLiveDate from "../customHooks/useLiveDate";
import { IoChevronDownOutline } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import ForecastPanel from "../components/ForecastPanel";
import { useEffect } from "react";

const InfoPage = ({ weatherData, toNextPage }) => {
  const date = useLiveDate(0);

  const scrollHandler = (e) => {
    if (e.deltaY > 0) {
      toNextPage();
    }
  };

  useEffect(() => {
    document.onwheel = scrollHandler;
    return () => (document.onwheel = null);
  }, []);

  return (
    <>
      <BiMenu className="i-hamburger" />
      <div className="title">
        <h2 className="title-place">{weatherData.name.toLowerCase()}</h2>
        <h4 className="title-date">
          {date && `${date[1]} ${date[0]}, ${date[2]}`}
        </h4>
      </div>
      <div className="l-fPanel -span-7-p">
        <ForecastPanel data={weatherData.current} />
      </div>
      <IoChevronDownOutline
        onClick={() => {
          toNextPage();
        }}
        className="i-arrowDown"
        preserveAspectRatio="none"
      />
    </>
  );
};

export default InfoPage;
