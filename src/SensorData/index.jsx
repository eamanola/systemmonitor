import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { GAP } from '../styles';

import Gauge from './Gauge';
import Poller from './Poller';

const styles = StyleSheet.create({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: GAP * 3,
});

const SensorData = ({ paused }) => {
  const { cpu, gpu /* , fans */ } = useSelector(({ sensors }) => sensors);

  return (
    <View style={styles}>
      <Poller paused={paused} />

      <Gauge
        fanspeed={gpu.fanspeed}
        name={gpu.name}
        temperature={gpu.temperature}
        utilization={gpu.utilization}
      />

      <View />

      <Gauge
        fanspeed={cpu.fanspeed}
        name={cpu.name}
        temperature={cpu.temperature}
        utilization={cpu.utilization}
      />
    </View>
  );
};

SensorData.propTypes = {
  paused: PropTypes.bool.isRequired,
};

export default SensorData;
