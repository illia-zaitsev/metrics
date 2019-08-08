import React from 'react';
import {EFFECTS} from "../constants/constants";
import Card from "./card";
import useSideEffectOnce from "../lib/useSideEffectOnce";
import useMetricFilter from "../hooks/useMetricFilter";

export default React.memo(function Content() {
    const metrics = useMetricFilter();

    // actions
    useSideEffectOnce(EFFECTS.METRICS_LOAD, 50);

    return (<main>{ metrics.map(m => (<Card metric={m} key={m.id}/>)) }</main>)
});
