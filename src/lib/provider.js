import { Provider } from "react-redux";
import { createEffects } from "./createEffects";
import { effectsReducer } from "../reducer/effectsReducer";

export default class AppProvider extends Provider {
  constructor(props) {
    super(props);
    const { store } = props;
    this.effects = createEffects(effectsReducer, store.dispatch);
    this.state = { ...this.state, effects: this.effects };
  }

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);
    if (this.props.store !== prevProps.store) {
      this.setState({ ...this.state, effects: this.effects });
    }
  }
}
