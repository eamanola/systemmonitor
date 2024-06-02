import { load, save } from '../persist';
import { EMPTY_BACKGROUND } from './background';

const INITIAL_STATE = {
  background: EMPTY_BACKGROUND,
  server: { uri: 'http://192.168.1.151:8080init', pollInterval: 10 },
};

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'SETTINGS_SET':
      newState = action.payload || INITIAL_STATE;
      break;

    default:
      newState = state || INITIAL_STATE;
  }

  return newState;
};

const SETTINGS_KEY = 'settings';

const saveSettings = async (settings) => {
  try {
    await save(SETTINGS_KEY, JSON.stringify(settings));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const loadSettings = async () => {
  try {
    const settings = JSON.parse(await load(SETTINGS_KEY));
    return settings;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const setSettings = (settings) => async (dispatch) => {
  await saveSettings(settings);
  dispatch({ type: 'SETTINGS_SET', payload: settings });
};

export const init = () => async (dispatch) => {
  // await dispatch(setSettings(null));

  const settings = await loadSettings();
  await dispatch({ type: 'SETTINGS_SET', payload: settings });
  return settings;
};

export default reducer;
