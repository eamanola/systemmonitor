import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { checkConnection } from '../reducers/server-status';
import { server as serverProps } from '../prop-types';
import gstyles, {
  safeButtonColor,
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

const PING_STATES = {
  NONE: 0,
  SUCCESS: 1,
  FAIL: 2,
};

const Server = ({ onUriChange, onPollIntervalChange, server }) => {
  const dispatch = useDispatch();
  const { reachable } = useSelector(({ serverStatus }) => serverStatus);
  const [pingState, setPingState] = useState(PING_STATES.NONE);

  const pingHandler = async () => {
    dispatch(checkConnection(server));
  };

  const uriChangedHandler = (newValue) => {
    setPingState(PING_STATES.NONE);

    onUriChange(newValue);
  };

  const pollIntervalChangedHandler = (newValue) => {
    const validValue = Number(newValue)
      || Number(newValue.slice(0, -1))
      || 0;

    onPollIntervalChange(validValue);
  };

  useEffect(() => {
    setPingState(reachable ? PING_STATES.SUCCESS : PING_STATES.FAIL);
  }, [reachable]);

  return (
    <View style={styles.rowStyles}>
      <KeyboardAvoidingView style={styles.textInputContainer}>
        <TextInput
          placeholder="server uri"
          onChangeText={uriChangedHandler}
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
          onChangeText={pollIntervalChangedHandler}
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
