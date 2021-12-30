import { useLayoutEffect, useRef } from "react";
import {
  AutoCompleteDD,
  DateNTime,
  RandomQuote,
  SearchBar,
} from "../components";
import fetchURL from "../customHooks/fetchURL";
import useModReducer from "../customHooks/useModReducer";
import { openWeather } from "../data/API";
import wave_svg from "../data/wave_svg";

const HomePage = ({ appStoreDispatch }) => {
  useLayoutEffect(() => {
    document.body.classList.toggle("-bg-black");
    return () => document.body.classList.toggle("-bg-black");
  }, []);

  const init = {
    queryString: "",
    location: useRef(null),
    inputField: useRef(null),
  };

  const reducer = (store, { type, payload }) => {
    switch (type) {
      case "UPDATE_QUERY":
        return { ...store, queryString: payload };

      case "UPDATE_LOCATION":
        store.inputField.current.value = payload.placeholder;
        store.location.current = {
          lat: payload.lat,
          lon: payload.lon,
          loc: payload.name,
        };
        return { ...store, queryString: "" };

      case "SET_TEMP_LOCATION":
        store.location.current = {
          lat: payload.lat,
          lon: payload.lon,
          loc: payload.name,
        };
        console.log(store.location.current);
        return store;

      default:
        return store;
    }
  };

  const [store, storeDispatch] = useModReducer(reducer, init);

  const preventInput = (inputEl, btnEl, finalValue) => {
    inputEl.value = finalValue;
    inputEl.blur();
    inputEl.addEventListener("focus", (e) => e.target.blur());
    btnEl.disabled = true;
    //Remove listener after 10s
    setTimeout(
      () => inputEl.removeEventListener("focus", (e) => e.target.blur()),
      10000
    );
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.target[0].classList.remove("searchBar-input_error");
    if (!store.location.current) {
      setTimeout(() => e.target[0].classList.add("searchBar-input_error"), 400);
    } else {
      preventInput(e.target[0], e.target[1], store.location.current.loc);

      storeDispatch("UPDATE_QUERY", "");

      const weatherData = fetchURL(
        openWeather(store.location.current.lat, store.location.current.lon),
        () => appStoreDispatch("UPDATE_PAGE", 5)
      );
      weatherData.then((data) => {
        if (data)
          appStoreDispatch("UPDATE_GLOBAL_DATA", {
            ...data,
            name: store.location.current.loc,
          });
      });
    }
  };

  const onInputChange = (e) => {
    if (!store.inputField.current) {
      store.inputField.current = e.target;
    }
    store.location.current = null;
    console.log("Input Changed");
    const query = e.target.value;
    e.target.classList.remove("searchBar-input_error");

    if (query.length > 3) {
      storeDispatch("UPDATE_QUERY", query);
    } else {
      storeDispatch("UPDATE_QUERY", "");
    }
  };

  return (
    <>
      {wave_svg}
      <header className="l-waveWrap">
        <div className="l-searchBar -span-10-p -center">
          <SearchBar
            onInputChange={onInputChange}
            onSubmitHandler={onSubmitHandler}
          />
          {store.queryString ? (
            <AutoCompleteDD
              query={store.queryString}
              dispatch={storeDispatch}
            />
          ) : null}
        </div>
      </header>
      <main className="l-home -flex-c-nw bgImg -rel">
        <DateNTime>
          <RandomQuote />
        </DateNTime>
      </main>
    </>
  );
};

export default HomePage;
