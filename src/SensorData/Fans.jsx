import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';

import { GAP } from '../styles';

import { valueArray } from '../prop-types';

import Fan from './Fan';
import useOrientation from '../../util/use-orientation';

const styles = StyleSheet.create({
  fans: {
    gap: GAP,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const Fans = ({ fans = null }) => {
  const { isPortrait, width, height } = useOrientation();

  const fansStyles = {
    maxWidth: isPortrait ? null : (width / 3),
    maxHeight: isPortrait ? (height / 3) : null,
    flexDirection: isPortrait ? '' : 'row',
  };

  return fans?.length
    ? (
      <View style={[styles.fans, fansStyles]}>
        {
          fans.map(({ name, speed }) => (
            <Fan key={Math.random()} name={name} speed={speed} />
          ))
        }
      </View>
    )
    : null;
};

Fans.propTypes = {
  fans: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    speed: valueArray.isRequired,
  })),
};

export default Fans;
