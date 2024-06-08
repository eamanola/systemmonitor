import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import gstyles, { GAP } from '../styles';
import { valueArray } from '../prop-types';

const styles = StyleSheet.create({
  fans: { gap: GAP, flexDirection: 'row' },
  fan: {
    ...gstyles.overlay,
    flexDirection: '',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: GAP,
  },
});

const Fans = ({ fans = null }) => (
  (fans?.length)
    ? (
      <View style={styles.fans}>
        {
          fans.map(({ name, speed }) => (
            <View key={Math.random()} style={styles.fan}>
              <Text style={{ fontSize: 12 }}>{`${name.toUpperCase()}:`}</Text>
              <Text style={{ fontSize: 24 }}>{speed[0]}</Text>
              <Text style={{ fontSize: 12 }}>{speed[1]}</Text>
            </View>
          ))
        }
      </View>
    )
    : null
);

Fans.propTypes = {
  fans: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    speed: valueArray.isRequired,
  })),
};

export default Fans;
