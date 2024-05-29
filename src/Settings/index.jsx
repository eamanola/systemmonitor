import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Button,
  StyleSheet,
} from 'react-native';

import { GAP, GREY, BORDER_WIDTH } from '../constants';

import ServerUri from './ServerUri';
import BackgroundSelector from './BackgroundSelector';

const styles = StyleSheet.create({
  fieldSet: {
    padding: GAP,
    borderWidth: BORDER_WIDTH,
    borderColor: GREY,
    borderRadius: GAP,
  },
});

const Settings = ({
  onSave,
  onCancel,
  visible,
  settings = null,
}) => {
  const [serverUri, setServerUri] = useState(settings?.serverUri);
  const [background, setBackground] = useState(settings?.background);

  const saveHandler = () => {
    const newSettings = { serverUri, background };

    onSave(newSettings);
  };

  const cancelHandler = () => {
    setServerUri(settings?.serverUri);
    setBackground(settings?.background);

    onCancel();
  };

  return (
    <Modal
      transparent
      hardwareAccelerated
      animationType="slide"
      onRequestClose={cancelHandler}
      visible={visible}
    >
      <TouchableWithoutFeedback onPress={cancelHandler}>
        <View style={{ flex: 1 }}>
          <View
            style={[
              styles.fieldSet,
              {
                margin: (GAP * 3),
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                justifyContent: 'flex-start',
                gap: GAP,
              },
            ]}
          >
            <View style={{ gap: GAP }}>
              <ServerUri
                fieldSetStyle={styles.fieldSet}
                value={serverUri}
                onChange={setServerUri}
              />

              <BackgroundSelector
                fieldSetStyle={styles.fieldSet}
                value={background}
                onChange={setBackground}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: GAP,
              }}
            >
              <Button onPress={cancelHandler} title="Cancel" color={GREY} />

              <Button onPress={saveHandler} title="Save" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

Settings.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  settings: PropTypes.shape({
    serverUri: PropTypes.string,
    background: PropTypes.shape({
      name: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  }),
};

export default Settings;
