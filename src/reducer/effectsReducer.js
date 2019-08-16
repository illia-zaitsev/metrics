import { ACTIONS, EFFECTS } from "../constants/constants";
import MetricService from "../services/metricService";

const metricService = new MetricService();

export async function effectsReducer(effect, dispatch) {
  switch (effect.type) {
    case EFFECTS.METRICS_LOAD:
      const m = metricService.generateMetricsHandler(effect.params);
      dispatch(ACTIONS.ADD_METRICS)(m);
      break;
    case EFFECTS.METRIC_SUBSCRIBE_UPDATES:
      metricService.subscribeMetricUpdatesHandler(effect.params);
      break;
    case EFFECTS.METRIC_UNSUBSCRIBE_UPDATES:
      metricService.unSubscribeMetricUpdatesHandler(effect.params);
      break;
    case EFFECTS.METRIC_RESTART_UPDATES:
      const callback = payload => dispatch(ACTIONS.UPDATE_METRIC)(payload);
      metricService.restartUpdatesHandler(effect.params, callback);
      break;
    default:
      console.warn(`Effect ${effect.type} not found`);
  }
}
