import ping from '../services/ping';

const INITIAL_STATE = { reachable: false };

const reducer = (state, { type, payload }) => {
  let newState;

  switch (type) {
    case 'SERVERSTATUS_SET_REACHABLE':
      newState = { ...state, reachable: payload === true };
      break;

    default:
      newState = state || INITIAL_STATE;
  }

  return newState;
};

export const setReachable = (isReachable) => async (dispatch) => {
  dispatch({ type: 'SERVERSTATUS_SET_REACHABLE', payload: isReachable === true });
};

export const checkConnection = ({ uri }, options) => async (dispatch) => {
  const isReachable = (await ping(uri, options)) === true;

  dispatch(setReachable(isReachable));
};

export default reducer;
