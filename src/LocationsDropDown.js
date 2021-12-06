// import { useEffect } from "react";
import useFetchData from "./useFetchData";
import { v4 as uuid } from "uuid";
import React, { useEffect } from "react";

const QUERY_LIMIT = 6;
const ACCESS_KEY = "af79882b02ef99d9f1cc5bdcafc88053";
const API = `http://api.positionstack.com/v1/forward?access_key=${ACCESS_KEY}&limit=${QUERY_LIMIT}`;

// eslint-disable-next-line react/display-name
const DropDownList = React.memo(({ data, setCoordinate, dispatchLocation }) => {
  useEffect(() => {
    setCoordinate({
      name: data[0].name,
      latitude: data[0].latitude,
      longitude: data[0].longitude,
    });
  }, [data]);
  const ddItems = data.map((item) => {
    const key = uuid();
    console.log("Rendered ", key);
    return (
      <button
        role="tab"
        className="dropdown__item"
        key={key}
        tabIndex={0}
        onClick={() => {
          setCoordinate({
            name: item.name,
            latitude: item.latitude,
            longitude: item.longitude,
          });
          dispatchLocation({ type: "NO_DROPDOWN", payload: item.label });
          document.querySelector(".search-bar__field").focus();
        }}
      >
        {item.name}, {item.region}
        <p className="country">{item.country}</p>
      </button>
    );
  });
  return (
    <div role="tablist" aria-label="locations" className="dropdown">
      {ddItems}
    </div>
  );
});

const LocationsDropDown = ({ location, dispatchLocation, setCoordinate }) => {
  const URL = API + `&query=${location}`;

  const response = useFetchData(URL);

  return !response.loading && !response.error ? (
    <DropDownList
      data={response.data.data}
      setCoordinate={setCoordinate}
      dispatchLocation={dispatchLocation}
    />
  ) : (
    ""
  );
};

export default LocationsDropDown;
