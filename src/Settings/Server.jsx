import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import ping from '../services/ping';

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

const Server = ({ onUriChange, onPollIntervalChange, server }) => {
  const NO_PING = 0;
  const SUCCESS_PING = 1;
  const FAIL_PING = 2;

  const [pingSuccess, setPingSuccess] = useState(NO_PING);

  const onPing = async () => {
    const success = await ping(server.uri);
    setPingSuccess(success ? SUCCESS_PING : FAIL_PING);
  };

  const handleUriChange = (newValue) => {
    setPingSuccess(NO_PING);
    onUriChange(newValue);
  };

  const pollIntervalChangedHandler = (newValue) => {
    const validValue = Number(newValue)
      || Number(newValue.slice(0, -1))
      || 0;

    onPollIntervalChange(validValue);
  };

  return (
    <View style={styles.rowStyles}>
      <KeyboardAvoidingView style={styles.textInputContainer}>
        <TextInput
          placeholder="server uri"
          onChangeText={handleUriChange}
          value={server.uri}
          style={[
            styles.textInput,
            pingSuccess !== NO_PING
              && { borderColor: (pingSuccess === SUCCESS_PING ? GREEN : RED) },
          ]}
          inputMode="url"
        />

        <TextInput
          placeholder="poll interval (s)"
          onChangeText={pollIntervalChangedHandler}
          value={String(server.pollInterval || '')}
          style={styles.pollInput}
          inputMode="numeric"
          keyboardType="numeric"
        />

        <Button onPress={onPing} title="test" color={selectBGButtonColor} />
      </KeyboardAvoidingView>

    </View>
  );
};

Server.propTypes = {
  onUriChange: PropTypes.func.isRequired,
  onPollIntervalChange: PropTypes.func.isRequired,
  server: serverProps.isRequired,
};

export default Server;
