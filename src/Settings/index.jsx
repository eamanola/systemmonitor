import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';

import { setSettings } from '../reducers/settings';
import { setBackground } from '../reducers/background';

import Form from './Form';
import Server from './Server';
import BackgroundSelector from './BackgroundSelector';

const Settings = ({
  onSave,
  onCancel,
  visible,
}) => {
  const settings = useSelector(({ settings: value }) => value);
  const [server, setServer] = useState(settings.server);
  const background = useSelector(({ background: value }) => value);

  const dispatch = useDispatch();

  const edited = { server, background };
  const hasChanges = (JSON.stringify(edited) === JSON.stringify(settings));

  const onServerUriChanged = (uri) => {
    setServer({ ...server, uri });
  };

  const onServerPollIntervalChanged = (pollInterval) => {
    setServer({ ...server, pollInterval });
  };

  const onBackgroundChanged = (newValue) => {
    dispatch(setBackground(newValue));
  };

  const save = () => {
    const newSettings = edited;
    dispatch(setSettings(newSettings));

    onSave(newSettings);
  };

  const cancel = () => {
    setServer(settings.server);
    onBackgroundChanged(settings.background);

    onCancel();
  };

  useEffect(() => {
    setServer(settings.server);
  }, [settings]);

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
          <Form onCancel={cancel} onSave={save} hasChanges={hasChanges}>
            <Server
              server={server}
              onUriChange={onServerUriChanged}
              onPollIntervalChange={onServerPollIntervalChanged}
            />

            <BackgroundSelector background={background} onChange={onBackgroundChanged} />
          </Form>
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
