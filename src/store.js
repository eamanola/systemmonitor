import { createStore, combineReducers, applyMiddleware } from 'redux';
import { withExtraArgument } from 'redux-thunk';

import background from './reducers/background';
import settings from './reducers/settings';
import sensors from './reducers/sensor-data';

export default createStore(
  combineReducers({
    background,
    settings,
    sensors,
  }),
  undefined,
  applyMiddleware(withExtraArgument()),
);
