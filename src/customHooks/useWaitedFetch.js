import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return { loading: false, data: action.payload.data, error: null };
    case "ERROR":
      return { loading: false, data: {}, error: action.payload.error };
    case "RESET":
      return initialState;
    default:
      console.error("useWaitedFetch: Reducer recieved Unexpected Action.type");
  }
};

const initialState = {
  loading: true,
  data: {},
  error: null,
};

let prevTimeout = null;

/**
 * Fetches the data from url and returns a state comprised of the current state of the fetch
 * Cancels the previous request if the next request is called within 600ms
 * @param {string} url
 * @returns {(string|Object)} {loading, data, error}
 */
const useWaitedFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "RESET" });
    if (prevTimeout) clearTimeout(prevTimeout);

    prevTimeout = setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else throw Error(response.statusText);
        })
        .then((data) => {
          dispatch({ type: "COMPLETE", payload: { data } });
        })
        .catch((error) => {
          dispatch({ type: "ERROR", payload: { error } });
        });
    }, 600);

    return () => {
      clearTimeout(prevTimeout);
    };
  }, [url]);

  return state;
};

export default useWaitedFetch;
