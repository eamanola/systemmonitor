import React from 'react';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { children as childrenProps } from '../prop-types';

const CircularProgress = ({
  size,
  thickness,
  progress,
  color,
  colorSecondary = '',
  backgroundColor = '',
  duration = 2000,
  rotation = 180,
  children = null,
}) => (
  <AnimatedCircularProgress
    size={size}
    width={thickness}
    prefill={0}
    fill={progress}
    tintColor={color}
    tintColorSecondary={colorSecondary}
    backgroundColor={backgroundColor}
    duration={duration}
    rotation={rotation}
  >
    {(/* fill */) => children}
  </AnimatedCircularProgress>
);

CircularProgress.propTypes = {
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  colorSecondary: PropTypes.string,
  backgroundColor: PropTypes.string,
  duration: PropTypes.number,
  rotation: PropTypes.number,
  children: childrenProps,
};

export default CircularProgress;
