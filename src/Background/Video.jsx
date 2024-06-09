import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import VideoBackground from 'react-native-video';

const styles = StyleSheet.create({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const Video = ({ uri, onError, paused }) => (
  <VideoBackground
    source={{ uri }}
    paused={paused}
    style={styles}
    repeat
    muted
    resizeMode="cover"
    rate={1.0}
    ignoreSilentSwitch="obey"
    onError={onError}
  />
);

Video.propTypes = {
  uri: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired,
  onError: PropTypes.func.isRequired,
};

export default Video;
