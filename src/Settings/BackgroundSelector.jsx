import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
  Text,
} from 'react-native';
import { pick, types } from 'react-native-document-picker';

import { GAP } from '../constants';
import { style as styleProps, background as backgroundProps } from '../prop-types';

const BackgroundSelector = ({ onChange, value = null, fieldSetStyle = null }) => {
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
    <View
      style={[
        fieldSetStyle,
        {
          flexDirection: 'row',
          gap: GAP,
          alignItems: 'center',
        },
      ]}
    >
      <Button
        title="select background"
        onPress={onSelectBackground}
        color="#0F0"
      />

      <Button
        title="remove background"
        onPress={() => onChange(null)}
        color="#F00"
      />
      <Text style={{ flex: 1 }}>
        { value?.name || '' }
      </Text>
    </View>
  );
};

BackgroundSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: backgroundProps,
  fieldSetStyle: styleProps,
};

export default BackgroundSelector;
