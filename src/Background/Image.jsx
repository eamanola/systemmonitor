import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ flex: 1, resizeMode: 'cover' });

const Image = ({ uri, onError }) => (
  <ImageBackground source={{ uri }} style={styles} onError={onError} />
);

Image.propTypes = {
  uri: PropTypes.string.isRequired,
  onError: PropTypes.func.isRequired,
};

export default Image;
