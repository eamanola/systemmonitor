import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

import { valueArray } from '../prop-types';
import gstyles from '../styles';

import CircularProgress from './CircularProgress';

const styles = StyleSheet.create({
  gauge: gstyles.overlay,
  temperatureRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  textStyle: { textAlign: 'center' },
});

const TEMPERATURE_WIDTH = 10;
const UTILIZATION_WIDTH = 20;
const MEMORY_WIDTH = 5;
const DEFAULT_SIZE = 160
  + (2 * TEMPERATURE_WIDTH)
  + (2 * UTILIZATION_WIDTH)
  + (2 * MEMORY_WIDTH);

const temperatureSize = (size) => size;
const temperatureThickness = () => TEMPERATURE_WIDTH;
const temperatureProgress = (temperature) => (temperature[0] / 100) * 100;

const memorySize = (size) => temperatureSize(size) - 2 * temperatureThickness();
const memoryThickness = (memory) => (memory[0] ? MEMORY_WIDTH : 0);
const memoryProgress = (memory) => memory[0];

const utilizationSize = (size, memory) => memorySize(size) - 2 * memoryThickness(memory);
const utilizationThickness = () => UTILIZATION_WIDTH;
const utilizationProgress = (utilization) => utilization[0];

const Gauge = ({
  temperature = [0, ''],
  utilization = [0, ''],
  name = '',
  fanspeed = [0, ''],
  memory = [0, ''],
  size = DEFAULT_SIZE,
}) => (
  <View style={[styles.gauge, { width: size, height: size, borderRadius: (size / 2) }]}>
    <CircularProgress
      size={temperatureSize(size)}
      thickness={temperatureThickness()}
      progress={temperatureProgress(temperature)}
      color="orange"
      colorSecondary={temperature[0] > 70 ? '#ff0000' : ''}
      backgroundColor={temperature[0] > 0 ? 'yellow' : ''}
    >
      <CircularProgress
        size={memorySize(size)}
        thickness={memoryThickness(memory)}
        progress={memoryProgress(memory)}
        color="blue"
      >
        <CircularProgress
          size={utilizationSize(size, memory)}
          thickness={utilizationThickness()}
          progress={utilizationProgress(utilization)}
          color="#00FF00"
        >
          <View>
            { !!temperature[0] && (
              <View style={styles.temperatureRow}>
                <Text style={[styles.textStyle, { fontSize: 42 }]}>
                  {temperature[0].toFixed(1)}
                </Text>
                <Text style={[styles.textStyle, { fontSize: 24 }]}>
                  {temperature[1]}
                </Text>
              </View>
            )}
            { !!name && (
              <Text style={[styles.textStyle, { fontSize: 12 }]}>
                {name}
              </Text>
            )}
            {!!fanspeed[0] && (
              <View>
                <Text style={[styles.textStyle, { fontSize: 24 }]}>
                  {fanspeed.join(' ')}
                </Text>
                <Text style={[styles.textStyle, { fontSize: 12 }]}>
                  Fan
                </Text>
              </View>
            )}
          </View>
        </CircularProgress>
      </CircularProgress>
    </CircularProgress>
  </View>
);

Gauge.propTypes = {
  size: PropTypes.number,
  temperature: valueArray,
  utilization: valueArray,
  name: PropTypes.string,
  fanspeed: valueArray,
  memory: valueArray,
};

export default Gauge;
