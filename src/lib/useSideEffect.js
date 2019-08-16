import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export default function useSideEffect(type) {
  const effects = useContext(ReactReduxContext).effects;
  return params => {
    effects({ type: type, params: params });
  };
}
