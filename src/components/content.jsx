import React, { useMemo } from "react";
import Card from "./card";
import useMetricFilter from "../hooks/useMetricFilter";

export default function Content() {

  const metrics = useMetricFilter();

  return useMemo(
    () => (
      <main>
        {metrics.map(m => (<Card metric={m} key={m.id} />))}
      </main>
    ),
    [metrics]
  );
}
