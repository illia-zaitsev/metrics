export const createEffects = (reducer, dispatch) => {

  const curryDispatch = type => payload => {
    dispatch({ type: type, payload: payload });
  };

  return effect => {
    reducer(effect, curryDispatch);
  };
};
