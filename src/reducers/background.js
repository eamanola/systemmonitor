export const EMPTY_BACKGROUND = {
  type: 'unhandled-type',
  uri: '',
  name: '',
};

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'BACKGROUND_SET':
      newState = action.payload || EMPTY_BACKGROUND;
      break;

    case 'BACKGROUND_RM':
      newState = EMPTY_BACKGROUND;
      break;

    default:
      newState = state || EMPTY_BACKGROUND;
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
