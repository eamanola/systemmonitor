import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import { valueArray } from '../prop-types';
import gstyles, { GAP, GREY } from '../styles';

const styles = StyleSheet.create({
  bg: { ...gstyles.overlay, borderColor: GREY, borderWidth: GAP / 2 },
  fan: { alignItems: 'center', justifyContent: 'center', aspectRatio: 1 },
});

const innerCircleWidth = (outerCircleWidth) => outerCircleWidth - (2 * styles.bg.borderWidth);

const Fan = ({ name, speed, width = 90 }) => (
  <View style={[styles.bg, { width, borderRadius: width / 2 }]}>
    <View
      key={Math.random()}
      style={[
        styles.fan,
        { width: innerCircleWidth(width), borderRadius: innerCircleWidth(width) / 2 },
      ]}
    >
      <Text style={{ fontSize: 12 }}>{name.toUpperCase()}</Text>
      <Text style={{ fontSize: 24 }}>{speed[0]}</Text>
      <Text style={{ fontSize: 12 }}>{speed[1]}</Text>
    </View>
  </View>
);

Fan.propTypes = {
  name: PropTypes.string.isRequired,
  speed: valueArray.isRequired,
  width: PropTypes.number,
};

export default Fan;
