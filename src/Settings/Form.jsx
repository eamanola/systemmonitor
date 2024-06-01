import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableWithoutFeedback,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import gstyles, { GAP, cancelButtonColor } from '../styles';
import { children as childrenProps } from '../prop-types';

const styles = StyleSheet.create({
  form: {
    ...gstyles.fieldSet,
    ...gstyles.overlay,
    justifyContent: 'flex-start',
    gap: GAP,
    margin: (GAP * 3),
  },
  content: { gap: GAP },
  buttonRow: { flexDirection: 'row', justifyContent: 'flex-end', gap: GAP },
});

const Form = ({
  onCancel,
  onSave,
  hasChanges,
  children = null,
}) => (
  <TouchableWithoutFeedback onPress={() => null}>
    <View style={styles.form}>
      <View style={styles.content}>
        {children}
      </View>

      <View style={styles.buttonRow}>
        <Button onPress={onCancel} title="Cancel" color={cancelButtonColor} />

        <Button onPress={onSave} disabled={hasChanges} title="Save" />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

Form.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  hasChanges: PropTypes.bool.isRequired,
  children: childrenProps,
};

export default Form;
