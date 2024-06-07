export const EMPTY_BACKGROUND = {
  type: 'unhandled-type',
  uri: '',
  name: '',
};

const INITIAL_STATE = EMPTY_BACKGROUND;

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'BACKGROUND_SET':
      newState = action.payload || INITIAL_STATE;
      break;

    case 'BACKGROUND_RM':
      newState = INITIAL_STATE;
      break;

    default:
      newState = state || INITIAL_STATE;
  }

  return newState;
};

export const setBackground = (background) => (dispatch) => {
  dispatch({ type: 'BACKGROUND_SET', payload: background });
};

export const removeBackground = () => (dispatch) => {
  dispatch({ type: 'BACKGROUND_RM' });
};

export default reducer;
