import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Ping from './Ping';
import Poll from './Poll';

const Updater = ({ paused }) => {
  const { reachable } = useSelector(({ serverStatus }) => serverStatus);

  return (
    reachable
      ? <Poll paused={paused} />
      : <Ping paused={paused} />
  );
};

Updater.propTypes = {
  paused: PropTypes.bool.isRequired,
};

export default Updater;
