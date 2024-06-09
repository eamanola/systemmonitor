import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { View, TouchableWithoutFeedback } from 'react-native';

import Image from './Image';
import Video from './Video';

const isVideo = (type) => /^video/i.test(type);
const isImage = (type) => /^image/i.test(type);

const Background = ({ onPress, paused }) => {
  const { uri, type } = useSelector(({ background }) => background);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ flex: 1 }}>
        { isVideo(type) && <Video uri={uri} paused={paused} /> }
        { isImage(type) && <Image uri={uri} /> }
      </View>
    </TouchableWithoutFeedback>
  );
};

Background.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
};

export default Background;
