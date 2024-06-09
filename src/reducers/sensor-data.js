import { fetchSensorData } from '../services/sensor-data';

const INITIAL_STATE = { cpu: null, fans: null, gpu: null };

const reducer = (state, { type, payload }) => {
  let newState;

  switch (type) {
    case 'SENSORDATA_SET':
      newState = payload ? { ...payload } : INITIAL_STATE;
      break;

    default:
      newState = state || INITIAL_STATE;
  }

  return newState;
};

export const update = ({ uri }, options) => async (dispatch) => {
  const response = await fetchSensorData(uri, options);

  dispatch({ type: 'SENSORDATA_SET', payload: response });

  return response !== null;
};

export default reducer;
