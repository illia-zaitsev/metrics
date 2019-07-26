import React, {useState, useMemo} from 'react';
import {selectMetrics} from "../reducer/storeReducer";
import {EFFECTS} from "../constants/constants";
import useObserve from "../lib/useObserve";
import Card from "./card";
import useSideEffectOnce from "../lib/useSideEffectOnce";
import useMetricFilter from "../hooks/useMetricFilter";

export default function Content() {

    // state

    const metrics = useMetricFilter();

    // actions

    useSideEffectOnce(EFFECTS.METRICS_LOAD, 50);

    return useMemo(() => (
            <main>{ metrics.map(m => (<Card metric={m} key={m.id}/>)) }</main>
), [metrics.length])
}
