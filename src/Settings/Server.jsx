import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { ping } from '../services/sensor-data';

import { server as serverProps } from '../prop-types';
import gstyles, {
  selectBGButtonColor,
  GAP,
  GREEN,
  RED,
} from '../styles';

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: GAP,
    alignItems: 'center',
  },
  textInput: { ...gstyles.fieldSet, flex: 1 },
  pollInput: gstyles.fieldSet,
  rowStyles: { flexDirection: 'row', gap: GAP },
});

const Server = ({ onUriChange, onPollIntervalChange, value }) => {
  const NO_PING = 0;
  const SUCCESS_PING = 1;
  const FAIL_PING = 2;

  const [pingSuccess, setPingSuccess] = useState(NO_PING);

  const onPing = async () => {
    setPingSuccess(await ping(value.uri) ? SUCCESS_PING : FAIL_PING);
  };

  const handleUriChange = (newValue) => {
    setPingSuccess(NO_PING);
    onUriChange(newValue);
  };

  return (
    <View style={styles.rowStyles}>
      <KeyboardAvoidingView style={styles.textInputContainer}>
        <TextInput
          placeholder="server uri"
          onChangeText={handleUriChange}
          value={value.uri}
          style={[
            styles.textInput,
            pingSuccess !== NO_PING
              && { borderColor: (pingSuccess === SUCCESS_PING ? GREEN : RED) },
          ]}
          TODO={onPollIntervalChange}
        />
        <TextInput
          placeholder="sec"
          onChangeText={onPollIntervalChange}
          value={value.pollInterval}
          style={styles.pollInput}
          inputMode="numeric"
        />

        <Button onPress={onPing} title="test" color={selectBGButtonColor} />
      </KeyboardAvoidingView>

    </View>
  );
};

Server.propTypes = {
  onUriChange: PropTypes.func.isRequired,
  onPollIntervalChange: PropTypes.func.isRequired,
  value: serverProps.isRequired,
};

export default Server;
