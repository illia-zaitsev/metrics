import React from "react";
import useMetricSubscribe from "../hooks/useMetricSubscribe";
import useDispatch from "../lib/useDispatch";
import { ACTIONS } from "../constants/constants";
import oval from "../oval.svg";

export default React.memo(function Card(props) {

  const metric = props.metric;
  const isUp = metric.prev < metric.value;
  const removeMetricHandler = useDispatch(ACTIONS.REMOVE_METRIC);

  // trigger side effects
  useMetricSubscribe(metric.id);

  return (
    <div>
      <p>
        {metric.name}
        <span className="delete" onClick={() => removeMetricHandler(metric.id)}>
          ❌
        </span>
      </p>
      {!metric.value ? (
        <img src={oval} width="15" alt="" />
      ) : (
        <span className={isUp ? "up" : "down"}>
          〽️ {metric.value} {isUp ? "+️" : "-️"}
        </span>
      )}
    </div>
  );
});
