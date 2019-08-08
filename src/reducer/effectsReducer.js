import {ACTIONS, EFFECTS} from "../constants/constants";
import MetricService from "../services/metricService";

const metricService = new MetricService();

export async function effectsReducer (effect, dispatch) {

    // side effect cases

    switch (effect.type) {
        case EFFECTS.METRICS_LOAD:
            dispatch(ACTIONS.ADD_METRICS)(metricService.generateMetricsHandler(effect.params));
            break;
        case EFFECTS.METRIC_SUBSCRIBE_UPDATES:
            metricService.subscribeMetricUpdatesHandler(effect.params);
            break;
        case EFFECTS.METRIC_UNSUBSCRIBE_UPDATES:
            metricService.unSubscribeMetricUpdatesHandler(effect.params);
            break;
        case EFFECTS.METRIC_RESTART_UPDATES:
            metricService.restartUpdatesHandler(effect.params, dispatch);
            break;
        default:
            console.warn(`Effect ${effect.type} not found`);
    }
}
