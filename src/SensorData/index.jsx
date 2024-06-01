import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gauge from './Gauge';

import { GAP } from '../styles';

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

const SensorData = () => {
  const testData = {
    cpu: {
      fanspeed: [508, 'rpm'],
      name: 'AMD Ryzen 7 5800X 8-Core Processor',
      temperature: [40, '°C'],
      utilization: [30, '%'],
    },
    fans: {
      front: [483, 'rpm'],
      rear: [415, 'rpm'],
    },
    gpu: {
      fanspeed: [10, '%'],
      memory: [16, '%'],
      name: 'NVIDIA GeForce RTX 4060',
      temperature: [44, '°C'],
      utilization: [20, '%'],
    },
  };

  return (
    <View
      style={styles}
    >
      <Gauge
        fanspeed={testData.gpu.fanspeed}
        name={testData.gpu.name}
        temperature={testData.gpu.temperature}
        utilization={testData.gpu.utilization}
      />

      <View />

      <Gauge
        fanspeed={testData.cpu.fanspeed}
        name={testData.cpu.name}
        temperature={testData.cpu.temperature}
        utilization={testData.cpu.utilization}
      />
    </View>
  );
};

export default SensorData;
