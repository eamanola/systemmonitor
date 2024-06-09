import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet } from 'react-native';

import logger from '../util/logger';

const styles = StyleSheet.create({ flex: 1, resizeMode: 'cover' });

const Image = ({ uri }) => (
  <ImageBackground source={{ uri }} style={styles} onError={logger.warn} />
);

Image.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Image;
