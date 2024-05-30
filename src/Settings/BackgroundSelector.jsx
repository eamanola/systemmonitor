import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'react-native';
import { pick, types } from 'react-native-document-picker';

import { background as backgroundProps } from '../prop-types';
import styles, { GAP, selectBGButtonColor, removeBGButtonColor } from '../styles';

const BackgroundSelector = ({ onChange, value = null }) => {
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
    <View style={[styles.fieldSet, { flexDirection: 'row', gap: GAP, alignItems: 'center' }]}>
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

      <Text style={{ flex: 1 }}>{ value?.name || '' }</Text>
    </View>
  );
};

BackgroundSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: backgroundProps,
};

export default BackgroundSelector;
