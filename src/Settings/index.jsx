import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles, { GAP, cancelButtonColor } from '../styles';
import { init as initSettings, setSettings } from '../reducers/settings';
import { setBackground as setBackgroundAction } from '../reducers/background';
import ServerUri from './ServerUri';
import BackgroundSelector from './BackgroundSelector';

const Settings = ({
  onSave,
  onCancel,
  visible,
}) => {
  const settings = useSelector(({ settings: value }) => value);
  const [serverUri, setServerUri] = useState(null);
  const [background, setBackground] = useState(null);
  const dispatch = useDispatch();

  const save = () => {
    const newSettings = { serverUri, background };
    dispatch(setSettings(newSettings));

    onSave(newSettings);
  };

  const cancel = () => {
    setServerUri(settings.serverUri);
    setBackground(settings.background);

    onCancel();
  };

  useEffect(() => {
    dispatch(initSettings());
  }, []);

  useEffect(() => {
    setBackground(settings.background);
    setServerUri(settings.serverUri);
  }, [settings]);

  useEffect(() => {
    dispatch(setBackgroundAction(background));
  }, [background]);

  return (
    <Modal
      transparent
      hardwareAccelerated
      animationType="slide"
      onRequestClose={cancel}
      visible={visible}
    >
      <TouchableWithoutFeedback onPress={cancel}>
        <View style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={() => null}>
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
                <Button onPress={cancel} title="Cancel" color={cancelButtonColor} />

                <Button onPress={save} title="Save" />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

Settings.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Settings;
