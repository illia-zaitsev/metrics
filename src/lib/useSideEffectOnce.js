import { useContext, useEffect } from "react";
import { ReactReduxContext } from "react-redux";

export default function useSideEffectOnce(type, params) {
  const effects = useContext(ReactReduxContext).effects;

  useEffect(() => {
    effects({ type: type, params: params });
  }, [type, params, effects]);
}
