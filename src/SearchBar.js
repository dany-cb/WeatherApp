import { IoSearch } from "react-icons/io5";
import LocationsDropDown from "./LocationsDropDown";
import { useReducer, useState } from "react";
import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        location: action.payload,
        dropdown: action.payload.length > 3,
      };
    case "NO_DROPDOWN":
      return {
        location: action.payload,
        dropdown: false,
      };
    case "RESET":
      return initialState;
    default:
      throw new Error("Location");
  }
};

const initialState = { location: "", dropdown: false };

// eslint-disable-next-line react/display-name
const SearchBar = React.forwardRef((props, ref) => {
  const [{ location, dropdown }, dispatch] = useReducer(reducer, initialState);
  const [coordinateData, setCoordinate] = useState({
    name: null,
    latitude: null,
    longitude: null,
  });

  // Animating after recieving the coordinates

  // useEffect(() => {
  //   setCoordinate({ type: "RESET" });
  // }, [location]);

  return (
    <div className="search-bar-wrap" ref={ref}>
      <div className="search-bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (coordinateData.name) {
              dispatch({ type: "RESET" });
              e.target[0].blur();
              props.triggerAnimation(coordinateData);
            }
            // navigate(
            //   "/loc?lat=" +
            //     coordinateData.latitude +
            //     "&lon=" +
            //     coordinateData.longitude
            // );
          }}
        >
          <input
            className="search-bar__field"
            type="text"
            name="location"
            value={location}
            onChange={(e) => {
              console.log("Location State changed");
              setCoordinate({
                name: null,
                latitude: null,
                longitude: null,
              });
              dispatch({ type: "UPDATE", payload: e.target.value });
            }}
            //Should find a better way than this ig
            style={{ backgroundColor: location ? "#ffffffb3" : "" }}
          />
          <label
            className={location ? "search-bar__btn active" : "search-bar__btn"}
          >
            <input type="submit" />
            <IoSearch />
          </label>
        </form>
      </div>
      {dropdown ? (
        <LocationsDropDown
          location={location}
          dispatchLocation={dispatch}
          setCoordinate={setCoordinate}
        />
      ) : (
        ""
      )}
    </div>
  );
});

export default SearchBar;
