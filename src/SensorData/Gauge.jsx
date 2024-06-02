import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import gstyles from '../styles';

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    borderColor: 'red',
  },
});

const Gauge = ({
  temperature = [0, ''],
  utilization = [0, ''],
  name = '',
  fanspeed = [0, ''],
  size = 220,
}) => (
  <View
    style={{
      ...gstyles.overlay,
      borderRadius: (size / 2),
      width: size,
      height: size,
    }}
  >
    <AnimatedCircularProgress
      size={size}
      width={5}
      prefill={0}
      fill={(temperature[0] / 100) * 100}
      tintColor="orange"
      backgroundColor="yellow"
      tintColorSecondary="#ff0000"
      duration={2000}
      rotation={180}
    >
      {
        (/* fill */) => (
          <AnimatedCircularProgress
            size={size - 10}
            width={20}
            prefill={0}
            fill={utilization[0]}
            tintColor="#00FF00"
            duration={2000}
            rotation={180}
          >
            {
              (/* fill */) => (
                <View>
                  <Text style={{ ...styles.textStyle, fontSize: 42 }}>
                    {temperature[0] ? [temperature[0].toFixed(1), temperature[1]].join(' ') : null}
                  </Text>
                  <Text style={{ ...styles.textStyle, fontSize: 12 }}>
                    {name}
                  </Text>
                  <Text style={{ ...styles.textStyle, fontSize: 24 }}>
                    {fanspeed[0] ? `Fan: ${fanspeed.join(' ')}` : null}
                  </Text>
                </View>
              )
            }
          </AnimatedCircularProgress>
        )
      }
    </AnimatedCircularProgress>
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
};

export default Gauge;
