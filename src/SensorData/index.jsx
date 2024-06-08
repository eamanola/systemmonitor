import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import { GAP } from '../styles';

import Gauge from './Gauge';
import Fans from './Fans';
import useOrientation from '../../util/use-orientation';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: GAP * 3,
  },
  containerPOR: {
    left: null,
    top: 0,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  contentPOR: { flexDirection: '' },
});

/*
const testData = {
  temperature: [20, '*C'],
  utilization: [20, 'rpm'],
  name: '111111ssssssssssssssssssss111111111',
  fanspeed: [1000, 'rpm'],
  memory: [20, '%'],
};
const useTestData = () => ({
  cpu: testData,
  gpu: testData,
  fans: [
    { name: 'fan 1', speed:[888, 'rpm'] },
    { name: 'fan 2', speed:[888, 'rpm'] },
    { name: 'fan 3', speed:[888, 'rpm'] },
    { name: 'fan 4', speed:[888, 'rpm'] },
    { name: 'fan 5', speed:[888, 'rpm'] },
    { name: 'fan 6', speed:[888, 'rpm'] },
    { name: 'fan 7', speed:[888, 'rpm'] },
    { name: 'fan 8', speed:[888, 'rpm'] },
    { name: 'fan 9', speed:[888, 'rpm'] },
    { name: 'fan 10', speed:[888, 'rpm'] },
    { name: 'fan 11', speed:[888, 'rpm'] },
    { name: 'fan 12', speed:[888, 'rpm'] },
  ]
});
*/

const SensorData = ({ onPress }) => {
  // const { cpu, gpu, fans } = useTestData();
  const { cpu, gpu, fans } = useSelector(({ sensors }) => sensors);
  const { isPortrait } = useOrientation();

  return (
    <View style={[styles.container, isPortrait && styles.containerPOR]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.content, isPortrait && styles.contentPOR]}>
          <Gauge
            fanspeed={gpu.fanspeed}
            name={gpu.name}
            temperature={gpu.temperature}
            utilization={gpu.utilization}
            memory={gpu.memory}
          />

          <Fans fans={fans.filter(({ speed }) => speed[0] > 0)} />

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
