import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, TextInput } from 'react-native';

import { server as serverProps } from '../prop-types';
import styles from '../styles';

const Server = ({ onUriChange, onPollIntervalChange, value }) => (
  <KeyboardAvoidingView>
    <TextInput
      placeholder="server uri"
      onChangeText={onUriChange}
      value={value.uri}
      style={styles.fieldSet}
      TODO={onPollIntervalChange}
    />
  </KeyboardAvoidingView>
);

Server.propTypes = {
  onUriChange: PropTypes.func.isRequired,
  onPollIntervalChange: PropTypes.func.isRequired,
  value: serverProps.isRequired,
};

export default Server;
