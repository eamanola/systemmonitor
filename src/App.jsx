import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, StatusBar } from 'react-native';

import loadStates from './util/loadstates';

import Background from './Background';
import SensorData from './SensorData';
import Settings from './Settings';
import Updater from './Updater';

const App = () => {
  const dispatch = useDispatch();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const onBackgroundPressed = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  useEffect(() => { loadStates(dispatch); }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />

      <Updater paused={isSettingsOpen} />

      <Background onPress={onBackgroundPressed} paused={isSettingsOpen} />

      <SensorData onPress={onBackgroundPressed} />

      <Settings onSave={closeSettings} onCancel={closeSettings} visible={isSettingsOpen} />
    </SafeAreaView>
  );
};

export default App;
