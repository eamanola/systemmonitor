import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';

export const isVideo = (type) => type && /^video/i.test(type);
export const isImage = (type) => type && /^image/i.test(type);

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
  },
});

const Background = ({
  onPress,
  type = null,
  uri = null,
  paused = false,
}) => {
  let content = null;
  if (isVideo(type)) {
    content = (
      <Video
        source={{ uri }}
        style={styles.backgroundVideo}
        repeat
        muted
        resizeMode="cover"
        rate={1.0}
        ignoreSilentSwitch="obey"
        onError={(...e) => console.log(...e)}
        paused={paused}
      />
    );
  }

  if (isImage(type)) {
    content = (
      <ImageBackground
        source={{ uri }}
        style={styles.backgroundImage}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ flex: 1 }}>
        {content}
      </View>
    </TouchableWithoutFeedback>
  );
};

Background.propTypes = {
  type: PropTypes.string,
  uri: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool,
};

export default Background;
