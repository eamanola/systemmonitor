import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { server as serverProps } from '../prop-types';
import { update as updateSensorData } from '../reducers/sensor-data';
import logger from '../logger';

import Ticker from './Ticker';

const Poll = ({ server, paused, onFail }, { MAX_FAILS = 1 } = {}) => {
  const dispatch = useDispatch();

  const [fails, setFails] = useState(0);

  const interval = Math.max(server.pollInterval, 1) * 1000;

  const poll = async () => dispatch(updateSensorData(server));

  const onTick = async () => {
    const success = (await poll()) === true;
    setFails(success ? 0 : (fails + 1));
  };

  /* useEffect(() => { setFails(0); }, [server]); */

  useEffect(
    () => {
      logger.info('Poll Fails:', fails);

      if (fails >= MAX_FAILS) {
        onFail();
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
      restartDeps={[
        // server, // for now paused is always fired, before server change possible
        // paused, // paused explicitly declared in Ticker
        fails,
      ]}
    />
  );
};

Poll.propTypes = {
  server: serverProps.isRequired,
  paused: PropTypes.bool.isRequired,
  onFail: PropTypes.func.isRequired,
};

export default Poll;
