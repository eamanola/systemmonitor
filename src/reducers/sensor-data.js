import { fetchSensorData } from '../services/sensor-data';

const EMPTY_FIELD = [0, ''];
const INITIAL_STATE = {
  cpu: {
    name: '',
    fanspeed: EMPTY_FIELD,
    temperature: EMPTY_FIELD,
    utilization: EMPTY_FIELD,
  },
  fans: {
    front: EMPTY_FIELD,
    rear: EMPTY_FIELD,
  },
  gpu: {
    name: '',
    fanspeed: EMPTY_FIELD,
    memory: EMPTY_FIELD,
    temperature: EMPTY_FIELD,
    utilization: EMPTY_FIELD,
  },
};

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'SENSORDATA_SET':
      newState = action.payload || INITIAL_STATE;
      break;

    default:
      newState = state || INITIAL_STATE;
  }

  return newState;
};

export const update = ({ uri }) => async (dispatch) => {
  const response = await fetchSensorData(uri);

  dispatch({ type: 'SENSORDATA_SET', payload: response });

  return response !== null;
};

export default reducer;
