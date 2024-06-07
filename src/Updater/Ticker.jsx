import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Ticker = ({
  onTick,
  interval,
  paused = false,
  restartDeps = [],
  name = 'Ticker',
}) => {
  const start = () => {
    const intervalId = setInterval(onTick, interval);

    console.info(name, 'start', `(${interval}ms)`, intervalId);

    return intervalId;
  };

  const stop = (intervalId) => {
    clearInterval(intervalId);

    console.info(name, 'stop', intervalId);
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
