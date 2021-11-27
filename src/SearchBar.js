import { IoSearch } from "react-icons/io5";
import LocationsDropDown from "./LocationsDropDown";
import { useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        name: action.payload.label,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    case "RESET":
      return initialState;
  }
};

const initialState = { name: null, latitude: null, longitude: null };

function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [coordinateData, setCoordinate] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   setCoordinate({ type: "RESET" });
  // }, [location]);

  return (
    <div className="search-bar-wrap">
      <div className="search-bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLocation("");
            navigate(
              "/loc?lat=" +
                coordinateData.latitude +
                "&lon=" +
                coordinateData.longitude
            );
          }}
        >
          <input
            className="search-bar__field"
            type="text"
            name="location"
            value={location}
            onChange={(e) => {
              console.log("Location State changed");
              setLocation(e.target.value);
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
      {location.length > 3 ? (
        <LocationsDropDown
          location={location}
          setLocation={setLocation}
          setCoordinate={setCoordinate}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchBar;
