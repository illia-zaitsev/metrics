import {ACTIONS} from "../constants/constants";

export default class MetricService {

    static list = [];
    static interval = null;

    static names = ['All trips', 'Cancelled', 'EAT', 'Eyeballs'];
    static genName = () => this.names[this.genIndex(0, this.names.length-1)];
    static genIndex = (bot, top) => Math.floor(Math.random() * (1 + top - bot)) + bot;

    static async generateMetricsHandler(num) {
        const arr = [];
        num = num ? num : 10;
        for (let i=0; i<num; i++) arr.push({ id : this.genIndex(0, 9999999), name: this.genName()});
        return arr;
    }

    static restartUpdatesHandler(params, dispatch) {
        const {count, interval} = params;

        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }

        this.interval = setInterval(() => {
            const randomUpdates = [];
            for (let i=0; i<count; i++) {
                const index = this.genIndex(0, this.list.length - 1);
                const id  = this.list[index];
                const newMetric = {id: id, value: this.genIndex(1, 100)};
                randomUpdates.push(newMetric);
            }
            dispatch(ACTIONS.UPDATE_METRIC)(randomUpdates);
        }, interval)

    }

    static subscribeMetricUpdatesHandler(id) {
        if (this.list.indexOf(id) === -1) {
            this.list.push(id);
        } else {
            console.error('Subscription is already exist');
        }
    };

    static unSubscribeMetricUpdatesHandler(id) {
        this.list = this.list.filter(metricId => metricId !== id)
    };
}
