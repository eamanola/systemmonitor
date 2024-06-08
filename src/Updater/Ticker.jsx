import { useEffect } from 'react';
import PropTypes from 'prop-types';

import logger from '../logger';

const Ticker = ({
  onTick,
  interval,
  paused = false,
  restartDeps = [],
  name = 'Ticker',
}) => {
  const start = () => {
    const intervalId = setInterval(onTick, interval);

    logger.info(name, 'start', `(${interval}ms)`, intervalId);

    return intervalId;
  };

  const stop = (intervalId) => {
    clearInterval(intervalId);

    logger.info(name, 'stop', intervalId);
  };

  useEffect(() => {
    if (!paused) {
      const intervalId = start();

      return () => stop(intervalId);
    }

    return () => null;
  }, [paused, ...restartDeps]);

  return null;
};

Ticker.propTypes = {
  onTick: PropTypes.func.isRequired,
  interval: PropTypes.number.isRequired,
  paused: PropTypes.bool,
  restartDeps: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ])),
  name: PropTypes.string,
};

export default Ticker;
