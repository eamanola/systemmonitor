import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { checkConnection } from '../reducers/server-status';

import Ticker from './Ticker';

const Ping = ({ paused }, { interval = 5 * 1000 } = {}) => {
  const dispatch = useDispatch();
  const { server } = useSelector(({ settings }) => settings);
  const { reachable } = useSelector(({ serverStatus }) => serverStatus);

  const onTick = () => {
    dispatch(checkConnection(server));
  };

  return (
    <Ticker
      onTick={onTick}
      interval={interval}
      paused={paused}
      name="Ping"
      restartDeps={[reachable, server, paused]}
    />
  );
};

Ping.propTypes = {
  paused: PropTypes.bool.isRequired,
};

export default Ping;
