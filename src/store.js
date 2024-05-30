import { createStore, combineReducers, applyMiddleware } from 'redux';
import { withExtraArgument } from 'redux-thunk';

import background from './reducers/background';
import settings from './reducers/settings';

export default createStore(
  combineReducers({
    background,
    settings,
  }),
  undefined,
  applyMiddleware(withExtraArgument()),
);
