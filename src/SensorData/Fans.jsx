import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import useOrientation from '../util/use-orientation';
import { valueObj } from '../prop-types';
import { GAP } from '../styles';

import Fan from './Fan';

const styles = StyleSheet.create({
  fans: { gap: GAP, flexWrap: 'wrap', justifyContent: 'center' },
});

const Fans = ({ fans }) => {
  const { isPortrait, width, height } = useOrientation();

  const fansStyles = {
    maxWidth: isPortrait ? null : (width / 3),
    maxHeight: isPortrait ? (height / 3) : null,
    flexDirection: isPortrait ? '' : 'row',
  };

  const activeFans = fans.filter(({ speed }) => speed.value > 0);

  return activeFans.length > 0 && (
    <View style={[styles.fans, fansStyles]}>
      {activeFans.map(({ name, speed }) => (
        <Fan key={Math.random()} name={name} speed={speed} />
      ))}
    </View>
  );
};

Fans.propTypes = {
  fans: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    speed: valueObj.isRequired,
  })).isRequired,
};

export default Fans;
