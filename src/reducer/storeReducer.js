import {ACTIONS} from "../constants/constants";

const initialState = {
    metrics: [],
    filter: '',
};

// selectors

export const selectMetrics = state => state.metrics;
export const selectFilter = state => state.filter;
export const selectMetric = (id) => state => state.metrics.find((metric) => metric.id === id);

// reducer

export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_METRICS:
            return {
                ...state,
                metrics: [...state.metrics.slice(0), ...action.payload],
            };
        case ACTIONS.REMOVE_METRIC:
            return {
                ...state,
                metrics: state.metrics.filter((item) => item.id !== action.payload)
            };
        case ACTIONS.UPDATE_METRIC:
            return {
                ...state,
                metrics: updateMetrics(state.metrics, action.payload)
            };
        case ACTIONS.FILTER_CHANGED:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

const updateMetrics = (metrics, updates) => {
    for (let i=0, l=metrics.length; i<l; i++) {
        let metric = metrics[i];
        for (let j=0, ll=updates.length; j<ll; j++) {
            const updated = updates[j];
            if (metric.id === updated.id) {
                const prev = metric.value;
                metrics[i] =  {...metric, ...updated, prev:prev};
                break;
            }
        }
    }
    return metrics;
};
