import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableWithoutFeedback } from 'react-native';

import { setBackground } from '../reducers/background';
import logger from '../util/logger';

import Image from './Image';
import Video from './Video';

const isVideo = (type) => /^video/i.test(type);
const isImage = (type) => /^image/i.test(type);

const Background = ({ onPress, paused }) => {
  const dispatch = useDispatch();
  const { uri, type } = useSelector(({ background }) => background);

  const onError = (...args) => {
    logger.warn('lost file permission, set background again', ...args);
    dispatch(setBackground(null));
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ flex: 1 }}>
        { isVideo(type) && <Video uri={uri} onError={onError} paused={paused} /> }
        { isImage(type) && <Image uri={uri} onError={onError} /> }
      </View>
    </TouchableWithoutFeedback>
  );
};

Background.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
};

export default Background;
