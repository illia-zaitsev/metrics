import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export default function useDispatch(action_type) {
  const store = useContext(ReactReduxContext).store;
  return payload => {
    store.dispatch({ type: action_type, payload: payload });
  };
}
