import React from 'react';
import useMetricFilter from "../hooks/useMetricFilter";

export default function Footer() {

    const metrics = useMetricFilter();

    return <footer>{metrics.length} metrics</footer>
}
