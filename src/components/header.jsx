import React, {useState} from 'react';
import {ACTIONS, EFFECTS} from "../constants/constants";
import useSideEffect from "../lib/useSideEffect";
import useDispatch from "../lib/useDispatch";
import useObserve from "../lib/useObserve";
import {selectFilter} from "../reducer/storeReducer";

export default function Header () {

    const [count, setCount] = useState(5);
    const [interval, setInterval] = useState(100);
    const [filter, setFilter] = useState('');

    // store
    useObserve(selectFilter, setFilter);

    // side effects
    const loadQuotesSideEffect = useSideEffect(EFFECTS.METRICS_LOAD);
    useSideEffect(EFFECTS.METRIC_RESTART_UPDATES)({count, interval});

    // dispatch
    const filterChangedHandler = useDispatch(ACTIONS.FILTER_CHANGED);

    return (
        <React.Fragment>
            <header>Metrics lookup</header>
            <div className={'search'}>
                Filter metrics:
                <input type="string" value={filter} onChange={(e) => filterChangedHandler(e.target.value) }/>
                <input type="button" value="add 10 new metrics" onClick={() => loadQuotesSideEffect() }/>
                Update random
                <input type="number" value={count} onChange={(e) => setCount(parseInt(e.target.value)) }/>
                metrics every
                <input type="number" value={interval} onChange={(e) => setInterval(parseInt(e.target.value)) }/>
                ms.
            </div>
        </React.Fragment>
    );
}
