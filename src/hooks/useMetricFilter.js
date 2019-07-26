import { useState } from 'react';
import useObserve from "../lib/useObserve";
import {selectMetrics, selectFilter} from "../reducer/storeReducer";

export default function useMetricFilter() {

    const [metrics, setMetrics] = useState([]);
    const [filter, setFilter] = useState('');

    useObserve(selectMetrics, setMetrics);
    useObserve(selectFilter, setFilter);

    return metrics.filter(metric => metric.name.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1);
}



