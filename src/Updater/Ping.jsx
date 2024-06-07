import React from 'react';
import PropTypes from 'prop-types';

import { server as serverProps } from '../prop-types';
import ping from '../services/ping';
import Ticker from './Ticker';

const Ping = ({ server, paused, onConnection }, { interval = 5 * 1000 } = {}) => {
  const onTick = async () => {
    if ((await ping(server.uri)) === true) {
      onConnection();
    }
  };

  return (
    <Ticker
      onTick={onTick}
      interval={interval}
      paused={paused}
      name="Ping"
      restartDeps={[
        // server, // for now paused is always fired, before server change possible
        // paused, // paused explicitly declared in Ticker
      ]}
    />
  );
};

Ping.propTypes = {
  server: serverProps.isRequired,
  paused: PropTypes.bool.isRequired,
  onConnection: PropTypes.func.isRequired,
};

export default Ping;
