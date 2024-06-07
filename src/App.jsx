import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import loadStates from './loadstates';

import Settings from './Settings';
import Background from './Background';
import SensorData from './SensorData';
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
      <Updater paused={isSettingsOpen} />

      <StatusBar hidden />

      <Background onPress={onBackgroundPressed} paused={isSettingsOpen} />

      <SensorData onPress={onBackgroundPressed} />

      <Settings onSave={closeSettings} onCancel={closeSettings} visible={isSettingsOpen} />
    </SafeAreaView>
  );
};

export default App;
