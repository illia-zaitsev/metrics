import {ACTIONS, EFFECTS} from "../constants/constants";
import MetricService from "../services/metricService";

// side effect cases

export async function effectsReducer (effect, dispatch) {

    switch (effect.type) {
        case EFFECTS.METRICS_LOAD:
            const result = await MetricService.generateMetricsHandler(effect.params);
            dispatch(ACTIONS.ADD_METRICS)(result);
            break;
        case EFFECTS.METRIC_SUBSCRIBE_UPDATES:
            MetricService.subscribeMetricUpdatesHandler(effect.params);
            break;
        case EFFECTS.METRIC_UNSUBSCRIBE_UPDATES:
            MetricService.unSubscribeMetricUpdatesHandler(effect.params);
            break;
        case EFFECTS.METRIC_RESTART_UPDATES:
            MetricService.restartUpdatesHandler(effect.params, dispatch);
            break;
        default:
            console.warn(`Effect ${effect.type} not found`);
    }
}
