import React from 'react';
import {useState, useMemo} from 'react';
import useQuoteSubscribe from "../hooks/useQuoteSubscribe";
import useObserve from "../lib/useObserve";
import {selectMetric} from "../reducer/storeReducer";
import useDispatch from "../lib/useDispatch";
import {ACTIONS} from "../constants/constants";
import oval from '../oval.svg';

export default function Card (props) {

    // state

    const [metric, setMetric] = useState(props.metric);

    // var

    const isUp = metric.prev < metric.value;

    // trigger side effects

    useQuoteSubscribe(metric.id);

    // store

    useObserve(selectMetric(metric.id), setMetric);

    // actions

    const removeMetric = useDispatch(ACTIONS.REMOVE_METRIC);

    // render

    return useMemo(() => (
        <div>
            <p>{metric.name}<span className="delete" onClick={() => {removeMetric(metric.id);}}>❌</span></p>
            { (!metric.value) ?
                <img src={oval} width="15" alt="" /> :
                <span className={isUp ? 'up' : 'down'}>〽️ {metric.value} {isUp ? '+️' : '-️' }</span>
            }
        </div>
    ), [metric.value]);
};