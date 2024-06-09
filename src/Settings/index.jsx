import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';

import { setBackground } from '../reducers/background';
import { setSettings } from '../reducers/settings';

import BackgroundSelector from './BackgroundSelector';
import Form from './Form';
import Server from './Server';

const Settings = ({
  onSave,
  onCancel,
  visible,
}) => {
  const dispatch = useDispatch();

  // persisted values
  const settings = useSelector(({ settings: value }) => value);

  // temporary values
  const background = useSelector(({ background: value }) => value);
  const [server, setServer] = useState(settings.server);

  const hasChanges = (JSON.stringify({ server, background }) === JSON.stringify(settings));

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
    const newSettings = { server, background };
    dispatch(setSettings(newSettings));

    onSave();
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
