import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { server as serverProps } from '../prop-types';
import gstyles, {
  safeButtonColor,
  GAP,
  GREEN,
  RED,
} from '../styles';
import ping from '../services/ping';

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

const PING_STATES = {
  NONE: 0,
  SUCCESS: 1,
  FAIL: 2,
};

const Server = ({ onUriChange, onPollIntervalChange, server }) => {
  const [pingState, setPingState] = useState(PING_STATES.NONE);

  const pingHandler = async () => {
    const success = (await ping(server.uri)) === true;
    setPingState(success ? PING_STATES.SUCCESS : PING_STATES.FAIL);
  };

  const uriChangeHandler = (newValue) => {
    setPingState(PING_STATES.NONE);

    onUriChange(newValue);
  };

  const pollIntervalChangeHandler = (newValue) => {
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
          onChangeText={uriChangeHandler}
          value={server.uri}
          style={[
            styles.textInput,
            pingState !== PING_STATES.NONE
              && { borderColor: (pingState === PING_STATES.SUCCESS ? GREEN : RED) },
          ]}
          inputMode="url"
        />

        <TextInput
          placeholder="poll interval (s)"
          onChangeText={pollIntervalChangeHandler}
          value={String(server.pollInterval || '')}
          style={styles.pollInput}
          inputMode="numeric"
        />

        <Button onPress={pingHandler} title="test" color={safeButtonColor} />
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
