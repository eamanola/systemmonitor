import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import { pick, types } from 'react-native-document-picker';

import { background as backgroundProps } from '../prop-types';
import gstyles, { GAP, safeButtonColor, dangerButtonColor } from '../styles';
import logger from '../logger';

const styles = StyleSheet.create({
  ...gstyles.fieldSet,
  flexDirection: 'row',
  gap: GAP,
  alignItems: 'center',
});

const onSelectBackground = (onChange) => async () => {
  try {
    const [result] = await pick({
      mode: 'open',
      requestLongTermAccess: true,
      type: [types.video, types.images],
    });

    const { uri, type, name } = result;
    onChange({ uri, type, name });
  } catch (err) {
    logger.warn(err);
  }
};

const BackgroundSelector = ({ onChange, background }) => (
  <View style={styles}>
    <Button
      title="file"
      onPress={onSelectBackground(onChange)}
      color={safeButtonColor}
    />

    <Button
      title="remove"
      onPress={() => onChange(null)}
      color={dangerButtonColor}
    />

    <Text style={{ flex: 1 }}>{background.name}</Text>
  </View>
);

BackgroundSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  background: backgroundProps.isRequired,
};

export default BackgroundSelector;
