import { createStore, combineReducers, applyMiddleware } from 'redux';
import { withExtraArgument } from 'redux-thunk';

import background from './reducers/background';
import settings from './reducers/settings';
import sensors from './reducers/sensor-data';
import serverStatus from './reducers/server-status';

export default createStore(
  combineReducers({
    background,
    settings,
    sensors,
    serverStatus,
  }),
  undefined,
  applyMiddleware(withExtraArgument()),
);
