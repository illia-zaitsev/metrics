// trigger actions

export const ACTIONS = {
    ADD_METRICS: 'ADD_METRICS',
    REMOVE_METRIC: 'REMOVE_METRIC',
    UPDATE_METRIC: 'UPDATE_METRIC',
    FILTER_CHANGED: 'FILTER_CHANGED',
};

// trigger side effects

export const EFFECTS = {
    METRICS_LOAD: 'METRICS_LOAD',
    METRIC_SUBSCRIBE_UPDATES: 'METRIC_SUBSCRIBE_UPDATES',
    METRIC_UNSUBSCRIBE_UPDATES: 'METRIC_UNSUBSCRIBE_UPDATES',
    METRIC_RESTART_UPDATES: 'METRIC_RESTART_UPDATES',
};
