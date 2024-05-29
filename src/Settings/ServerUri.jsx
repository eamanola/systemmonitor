import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, TextInput } from 'react-native';

const ServerUri = ({ onChange, value = null, fieldSetStyle = null }) => (
  <KeyboardAvoidingView>
    <TextInput
      placeholder="server uri"
      onChangeText={onChange}
      value={value}
      style={fieldSetStyle}
    />
  </KeyboardAvoidingView>
);

ServerUri.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  fieldSetStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default ServerUri;
