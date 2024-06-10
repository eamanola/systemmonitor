import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import useOrientation from '../util/use-orientation';
import { GAP } from '../styles';

import Fans from './Fans';
import Gauge from './Gauge';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    margin: GAP * 3,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  contentPOR: { flexDirection: '' },
});

const SensorData = ({ onPress }) => {
  const { cpu, gpu, fans } = useSelector(({ sensors }) => sensors);
  const { isPortrait } = useOrientation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.content, isPortrait && styles.contentPOR]}>
          {
            !!gpu && (
              <Gauge
                fanspeed={gpu.fanspeed}
                name={gpu.name}
                temperature={gpu.temperature}
                utilization={gpu.utilization}
                memory={gpu.memory}
              />
            )
          }

          {!!fans && <Fans fans={fans} />}

          {
            !!cpu && (
              <Gauge
                fanspeed={cpu.fanspeed}
                name={cpu.name}
                temperature={cpu.temperature}
                utilization={cpu.utilization}
              />
            )
          }
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

SensorData.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default SensorData;
