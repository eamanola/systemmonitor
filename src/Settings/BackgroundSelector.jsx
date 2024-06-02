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
import gstyles, { GAP, selectBGButtonColor, removeBGButtonColor } from '../styles';

const styles = StyleSheet.create({
  ...gstyles.fieldSet,
  flexDirection: 'row',
  gap: GAP,
  alignItems: 'center',
});

const BackgroundSelector = ({ onChange, background }) => {
  const onSelectBackground = async () => {
    try {
      const [result] = await pick({
        mode: 'open',
        requestLongTermAccess: true,
        type: [types.video, types.images],
      });

      const { uri, type, name } = result;
      onChange({ uri, type, name });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles}>
      <Button
        title="select background"
        onPress={onSelectBackground}
        color={selectBGButtonColor}
      />

      <Button
        title="remove background"
        onPress={() => onChange(null)}
        color={removeBGButtonColor}
      />

      <Text style={{ flex: 1 }}>{background.name}</Text>
    </View>
  );
};

BackgroundSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  background: backgroundProps.isRequired,
};

export default BackgroundSelector;
