import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
import { useSelector } from 'react-redux';

export const isVideo = (type) => type && /^video/i.test(type);
export const isImage = (type) => type && /^image/i.test(type);

const Background = ({
  onPress,
  paused = false,
}) => {
  let content = null;

  const background = useSelector(({ background: value }) => value);

  if (background) {
    const { uri, type } = background;

    if (isVideo(type)) {
      content = (
        <Video
          source={{ uri }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          repeat
          muted
          resizeMode="cover"
          rate={1.0}
          ignoreSilentSwitch="obey"
          onError={(...e) => console.log(...e)}
          paused={paused}
        />
      );
    } else if (isImage(type)) {
      content = <ImageBackground source={{ uri }} style={{ flex: 1, resizeMode: 'cover' }} />;
    }
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
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool,
};

export default Background;
