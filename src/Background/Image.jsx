import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ flex: 1, resizeMode: 'cover' });

const Image = ({ uri }) => (
  <ImageBackground
    source={{ uri }}
    onError={(...e) => console.error(...e)}
    style={styles}
  />
);

Image.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Image;
