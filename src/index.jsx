import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { setIdleTimerDisabled } from 'react-native-idle-timer';

import store from './store';

import App from './App';

const Main = () => {
  useEffect(() => {
    setIdleTimerDisabled(true);

    return () => setIdleTimerDisabled(false);
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
