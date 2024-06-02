import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { poll, ping } from '../reducers/sensor-data';

const Poller = ({ paused }) => {
  const { server } = useSelector(({ settings }) => settings);
  const [failedPolls, setFailedPolls] = useState(0);
  const dispatch = useDispatch();

  const MAX_FAILS = 3;
  const PING_INTERVAL = 60;

  const startPolling = () => {
    const { uri, pollInterval } = server;
    const interval = Math.max(pollInterval, 1) * 1000;
    const doPoll = async () => {
      const success = await dispatch(poll(uri));
      setFailedPolls(success ? 0 : failedPolls + 1);
    };

    const intervalId = setInterval(doPoll, interval);
    console.log(`Poller start poll(${interval}ms)`, intervalId);

    return intervalId;
  };

  const startPinging = () => {
    const { uri } = server;
    const interval = PING_INTERVAL * 1000;
    const doPing = async () => {
      const success = await ping(uri) === true;
      setFailedPolls(success ? 0 : failedPolls);
    };

    const intervalId = setInterval(doPing, interval);
    console.log(`Poller start pinging(${interval}ms)`, intervalId);

    return intervalId;
  };

  const stopInterval = (intervalId) => () => {
    if (intervalId) {
      console.log('Poller stop interval', intervalId);
      clearInterval(intervalId);
    }
  };

  useEffect(
    () => { setFailedPolls(0); },
    [paused],
  );

  useEffect(
    () => { console.log(`Poller Fails: ${failedPolls}`); },
    [failedPolls],
  );

  useEffect(() => {
    let intervalId;
    const canPoll = !paused && server && server.uri;

    if (canPoll) {
      if (failedPolls < MAX_FAILS) {
        intervalId = startPolling();
      } else {
        intervalId = startPinging();
      }
    }

    return stopInterval(intervalId);
  }, [server, paused, failedPolls]);

  return null;
};

Poller.propTypes = {
  paused: PropTypes.bool.isRequired,
};

export default Poller;
