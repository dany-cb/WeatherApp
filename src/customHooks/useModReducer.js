import { useReducer } from "react";

const useModReducer = (reducer, init) => {
  const [state, dispatch] = useReducer(reducer, init);
  const handler = (type = null, payload) => {
    if (type) {
      dispatch({ type, payload });
    } else return state;
  };
  return [state, handler];
};

export default useModReducer;
