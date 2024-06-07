import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import { GAP } from '../styles';

import Gauge from './Gauge';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: GAP * 3,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const SensorData = ({ onPress }) => {
  const { cpu, gpu /* , fans */ } = useSelector(({ sensors }) => sensors);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.content}>

          <Gauge
            fanspeed={gpu.fanspeed}
            name={gpu.name}
            temperature={gpu.temperature}
            utilization={gpu.utilization}
          />

          <Gauge
            fanspeed={cpu.fanspeed}
            name={cpu.name}
            temperature={cpu.temperature}
            utilization={cpu.utilization}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

SensorData.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default SensorData;
