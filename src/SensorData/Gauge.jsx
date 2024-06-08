import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

import gstyles from '../styles';

import CircularProgress from './CircularProgress';

const styles = StyleSheet.create({
  textStyle: { textAlign: 'center' },
  temperatureRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
});

const TEMPERATURE_WIDTH = 5;
const UTILIZATION_WIDTH = 30;
const MEMORY_WIDTH = 5;
const DEFAULT_SIZE = 160
  + (2 * TEMPERATURE_WIDTH)
  + (2 * UTILIZATION_WIDTH)
  + (2 * MEMORY_WIDTH);

const memoryThickness = (memory) => (memory[0] ? MEMORY_WIDTH : 0);

const Gauge = ({
  temperature = [0, ''],
  utilization = [0, ''],
  name = '',
  fanspeed = [0, ''],
  memory = [0, ''],
  size = DEFAULT_SIZE,
}) => (
  <View
    style={{
      ...gstyles.overlay,
      borderRadius: (size / 2),
      width: size,
      height: size,
    }}
  >
    <CircularProgress
      size={size}
      thickness={TEMPERATURE_WIDTH}
      progress={(temperature[0] / 100) * 100}
      color="orange"
      colorSecondary={temperature[0] > 70 ? '#ff0000' : ''}
      backgroundColor={temperature[0] > 0 ? 'yellow' : ''}
    >
      <CircularProgress
        size={size - (TEMPERATURE_WIDTH * 2)}
        thickness={memoryThickness(memory)}
        progress={memory[0]}
        color="blue"
      >
        <CircularProgress
          size={size - (2 * TEMPERATURE_WIDTH) - (2 * memoryThickness(memory))}
          thickness={UTILIZATION_WIDTH}
          progress={utilization[0]}
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
            <Text style={[styles.textStyle, { fontSize: 12 }]}>
              {name}
            </Text>
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

const validProp = (value) => (
  value.length === 2
  && typeof (value[0]) === 'number'
  && typeof (value[1]) === 'string'
);

Gauge.propTypes = {
  size: PropTypes.number,
  temperature: PropTypes.arrayOf(validProp),
  utilization: PropTypes.arrayOf(validProp),
  name: PropTypes.string,
  fanspeed: PropTypes.arrayOf(validProp),
  memory: PropTypes.arrayOf(validProp),
};

export default Gauge;
