import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, TextInput } from 'react-native';

import { style as styleProps, serverUri as serverUriProps } from '../prop-types';

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
  value: serverUriProps,
  fieldSetStyle: styleProps,
};

export default ServerUri;
