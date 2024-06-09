import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { update as updateSensorData } from '../reducers/sensor-data';
import { setReachable } from '../reducers/server-status';
import logger from '../util/logger';

import Ticker from './Ticker';

const Poll = ({ paused }, { MAX_FAILS = 3 } = {}) => {
  const dispatch = useDispatch();
  const { server } = useSelector(({ settings }) => settings);

  const [fails, setFails] = useState(0);

  const interval = Math.max(server.pollInterval, 1) * 1000;

  const onTick = () => {
    dispatch(updateSensorData(server))
      .then((success) => { setFails(success ? 0 : (fails + 1)); });
  };

  useEffect(
    () => {
      logger.info('Poll Fails:', fails);

      if (fails >= MAX_FAILS) {
        dispatch(setReachable(false));
      }
    },
    [fails],
  );

  return (
    <Ticker
      onTick={onTick}
      interval={interval}
      paused={paused}
      name="Poll"
      restartDeps={[fails, server, paused]}
    />
  );
};

Poll.propTypes = {
  paused: PropTypes.bool.isRequired,
};

export default Poll;
