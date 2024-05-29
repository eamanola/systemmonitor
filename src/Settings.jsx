import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';

const Settings = ({ onSave, onCancel, visible }) => (
  <Modal
    transparent
    animationType="slide"
    visible={visible}
    hardwareAccelerated
    onRequestClose={onCancel}
  >
    <TouchableWithoutFeedback onPress={onCancel}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            margin: 30,
            borderWidth: 2,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            justifyContent: 'flex-start',
            gap: 10,
          }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: 'green',
            }}
          >
            <KeyboardAvoidingView>
              <TextInput
                placeholder="server uri"
                style={{
                  borderWidth: 2,
                  borderColor: 'blue',
                }}
              />
            </KeyboardAvoidingView>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'green',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              gap: 10,
            }}
          >
            <Button onPress={onCancel} title="Cancel" color="#ddd" />
            <Button onPress={onSave} title="Save" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

Settings.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Settings;
