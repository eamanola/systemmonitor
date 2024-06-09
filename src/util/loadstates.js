import { setBackground } from '../reducers/background';
import { update as updateSensorData } from '../reducers/sensor-data';
import { checkConnection } from '../reducers/server-status';
import { init } from '../reducers/settings';

const loadStates = async (dispatch) => {
  const { background, server } = await dispatch(init());
  dispatch(setBackground(background));
  dispatch(updateSensorData(server));
  dispatch(checkConnection(server));
};

export default loadStates;
