import React, {useMemo} from 'react';
import useMetricFilter from "../hooks/useMetricFilter";

export default function Footer() {

    const metrics = useMetricFilter();

    return useMemo(() => <footer>{metrics.length} metrics</footer>, [metrics.length])
}
