import { ACTIONS } from "../constants/constants";

const initialState = {
  metrics: [],
  filter: ''
};

// selectors

export const selectMetrics = state => state.metrics;
export const selectFilter = state => state.filter;

// reducer

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_METRICS:
      return {
        ...state,
        metrics: [...state.metrics.slice(0), ...action.payload]
      };
    case ACTIONS.REMOVE_METRIC:
      return {
        ...state,
        metrics: state.metrics.filter(item => item.id !== action.payload)
      };
    case ACTIONS.UPDATE_METRIC:
      return {
        ...state,
        metrics: state.metrics.map(metric => {
          const newMetric = action.payload.find(m => m.id === metric.id);
          return newMetric ? { ...metric, ...newMetric, prev: metric.value } : metric;
        })
      };
    case ACTIONS.FILTER_CHANGED:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
