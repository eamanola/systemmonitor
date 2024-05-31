import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import loadStates from './loadstates';

import Settings from './Settings';
import Background from './Background';

const App = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const dispatch = useDispatch();

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

      <Background
        onPress={onBackgroundPressed}
        paused={isSettingsOpen}
      />

      <Settings
        onSave={closeSettings}
        onCancel={closeSettings}
        visible={isSettingsOpen}
      />
    </SafeAreaView>
  );
};

export default App;
