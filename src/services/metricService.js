export default class MetricService {

  constructor() {
    this.list = [];
    this.interval = null;
  }

  genNum(bot, top) {
    return Math.floor(Math.random() * (1 + top - bot)) + bot;
  }

  generateMetricsHandler(num = 50) {
    const names = ["All trips", "Cancelled", "EAT", "Eyeballs"];
    const genName = () => names[this.genNum(0, names.length - 1)];
    return Array.from({ length: num }).map(() => ({
      id: this.genNum(0, 99999999999),
      name: genName()
    }));
  }

  restartUpdatesHandler(params, dispatch) {
    const { count, interval } = params;

    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.interval = setInterval(() => {
      const randomUpdates = [];
      for (let i = 0; i < count; i++) {
        const index = this.genNum(0, this.list.length - 1);
        const id = this.list[index];
        if (id) {
          const newMetric = { id: id, value: this.genNum(1, 100) };
          randomUpdates.push(newMetric);
        }
      }
      if (randomUpdates.length) dispatch(randomUpdates);
    }, interval);
  }

  subscribeMetricUpdatesHandler(id) {
    if (this.list.indexOf(id) === -1) {
      this.list.push(id);
    } else {
      console.error("Subscription is already exist");
    }
  }

  unSubscribeMetricUpdatesHandler(id) {
    this.list = this.list.filter(metricId => metricId !== id);
  }
}
