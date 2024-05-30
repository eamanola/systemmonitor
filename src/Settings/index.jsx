import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';

import { settings as settingsProp } from '../prop-types';
import styles, { GAP, cancelButtonColor } from '../styles';

import ServerUri from './ServerUri';
import BackgroundSelector from './BackgroundSelector';

const Settings = ({
  onSave,
  onCancel,
  onBackgroundPreview,
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

  useEffect(() => {
    onBackgroundPreview(background);
  }, [background]);

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
              styles.overlay,
              { justifyContent: 'flex-start', gap: GAP, margin: (GAP * 3) },
            ]}
          >
            <View style={{ gap: GAP }}>
              <ServerUri value={serverUri} onChange={setServerUri} />

              <BackgroundSelector value={background} onChange={setBackground} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: GAP }}>
              <Button onPress={cancelHandler} title="Cancel" color={cancelButtonColor} />

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
  onBackgroundPreview: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  settings: settingsProp,
};

export default Settings;
