import { HomePage, InfoPage, ForecastPage } from "./pages";
import useModReducer from "./customHooks/useModReducer";

const App = () => {
  const handler = (state, { type, payload }) => {
    switch (type) {
      case "UPDATE_GLOBAL_DATA":
        return { page: 1, weatherData: payload };
      case "UPDATE_PAGE":
        return { ...state, page: payload };
    }
  };

  const [store, storeDispatch] = useModReducer(handler, {
    page: 0,
    weatherData: {},
  });

  switch (store.page) {
    case 0:
      return <HomePage appStoreDispatch={storeDispatch} />;

    case 1:
      return (
        <InfoPage
          toNextPage={() => storeDispatch("UPDATE_PAGE", 2)}
          weatherData={store.weatherData}
        />
      );

    case 2:
      console.log(store.weatherData);
      return (
        <ForecastPage
          opt={0}
          current={store.weatherData.current}
          daily={store.weatherData.daily}
          hourly={store.weatherData.hourly}
        />
      );

    case 5:
      return <h1>Error Page Here</h1>;

    default:
      console.error("Switch Error: Invalid page value. Nothing to show");
      break;
  }
};

export default App;
