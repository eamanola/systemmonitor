import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet } from 'react-native';

import logger from '../logger';

const styles = StyleSheet.create({ flex: 1, resizeMode: 'cover' });

const Image = ({ uri }) => (
  <ImageBackground
    source={{ uri }}
    onError={(...err) => logger.error(...err)}
    style={styles}
  />
);

Image.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Image;
