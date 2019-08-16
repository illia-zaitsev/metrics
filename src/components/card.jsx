import React from 'react';
import useQuoteSubscribe from "../hooks/useQuoteSubscribe";
import {selectMetric} from "../reducer/storeReducer";
import { useSelector } from 'react-redux'
import useDispatch from "../lib/useDispatch";
import {ACTIONS} from "../constants/constants";
import oval from '../oval.svg';

export default React.memo(function Card (props) {

    const id = (props && props.metric) ? props.metric.id : null;
    const metric = useSelector(selectMetric(id));
    const isUp = metric.prev < metric.value;

    // actions
    const removeMetric = useDispatch(ACTIONS.REMOVE_METRIC);

    // trigger side effects
    useQuoteSubscribe(id);

    return (
        <div>
            <p>{metric.name}<span className="delete" onClick={() => removeMetric(id)}>❌</span></p>
            { (!metric.value) ?
                <img src={oval} width="15" alt="" /> :
                <span className={isUp ? 'up' : 'down'}>〽️ {metric.value} {isUp ? '+️' : '-️' }</span>
            }
        </div>
    );
});
