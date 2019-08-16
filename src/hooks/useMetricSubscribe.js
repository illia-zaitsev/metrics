import { useEffect } from "react";
import useSideEffect from "../lib/useSideEffect";
import { EFFECTS } from "../constants/constants";

export default function useMetricSubscribe(id) {

  const subscribe = useSideEffect(EFFECTS.METRIC_SUBSCRIBE_UPDATES);
  const unSubscribe = useSideEffect(EFFECTS.METRIC_UNSUBSCRIBE_UPDATES);

  useEffect(() => {
    subscribe(id);
    return () => unSubscribe(id);
  }, [id]);
}
