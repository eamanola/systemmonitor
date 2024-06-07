import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Ping from './Ping';
import Poll from './Poll';

const Updater = ({ paused }) => {
  const { server } = useSelector(({ settings }) => settings);

  const [hasConnection, setHasConnection] = useState(true);

  const onConnection = () => {
    setHasConnection(true);
  };

  const onFail = () => {
    setHasConnection(false);
  };

  /* useEffect(() => { setHasConnection(true); }, [server]); */

  /*
  useEffect(
    () => { console.log('connection:', hasConnection); },
    [hasConnection],
  );
  */

  return (
    hasConnection
      ? <Poll server={server} paused={paused} onFail={onFail} />
      : <Ping server={server} paused={paused} onConnection={onConnection} />
  );
};

Updater.propTypes = {
  paused: PropTypes.bool.isRequired,
};

export default Updater;
