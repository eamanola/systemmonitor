import { init } from './reducers/settings';
import { setBackground } from './reducers/background';

const loadStates = async (dispatch) => {
  const settings = await dispatch(init());
  dispatch(setBackground(settings?.background));
};

export default loadStates;
