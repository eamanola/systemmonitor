import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, TextInput } from 'react-native';

import { serverUri as serverUriProps } from '../prop-types';
import styles from '../styles';

const ServerUri = ({ onChange, value = null }) => (
  <KeyboardAvoidingView>
    <TextInput
      placeholder="server uri"
      onChangeText={onChange}
      value={value}
      style={styles.fieldSet}
    />
  </KeyboardAvoidingView>
);

ServerUri.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: serverUriProps,
};

export default ServerUri;
