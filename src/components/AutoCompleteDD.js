import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import useWaitedFetch from "../customHooks/useWaitedFetch";
import { geoApify } from "../data/API";

export const AutoCompleteDD = ({ query, dispatch }) => {
  const response = useWaitedFetch(geoApify(query, 6));

  const DDGenerator = ({ data }) => {
    let temp_loc = {};

    useEffect(() => {
      dispatch("SET_TEMP_LOCATION", temp_loc);
    }, []);

    const dropDown = data.map((item, index) => {
      const key = uuid();
      console.log("Rendered ", key); //Test
      if (index === 0)
        temp_loc = {
          lat: item.lat,
          lon: item.lon,
          name: item.address_line1,
        };

      return (
        <button
          role="tab"
          className="dropdown-item"
          key={key}
          tabIndex={0}
          onClick={() => {
            console.log("Location Clicked ", item); //Test
            dispatch("UPDATE_LOCATION", {
              lat: item.lat,
              lon: item.lon,
              name: item.address_line1,
              placeholder: item.formatted,
            });
            const inputField = dispatch().inputField.current;
            inputField.classList.remove("searchBar-input_error");
            inputField.focus();
          }}
        >
          {item.address_line1}, {item.state}
          <span className="dropdown-country">{item.country}</span>
        </button>
      );
    });

    return (
      <div role="tablist" aria-label="locations" className="dropdown -abs">
        {dropDown}
      </div>
    );
  };

  return !response.loading && !response.error ? (
    <DDGenerator data={response.data.results} />
  ) : null;
};
