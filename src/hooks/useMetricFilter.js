import { useSelector } from "react-redux";
import { selectMetrics, selectFilter } from "../reducer/storeReducer";

export default function useMetricFilter() {
  const metrics = useSelector(selectMetrics);
  const filter = useSelector(selectFilter);

  return metrics.filter(
    metric =>
      metric.name.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
  );
}
