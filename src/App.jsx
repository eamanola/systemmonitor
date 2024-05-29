import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Settings from './Settings';
import Background from './Background';

const App = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // TODO: read persisted
  const [settings, setSettings] = useState(null);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const onBackgroundPressed = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const onSave = (newSettings) => {
    setSettings(newSettings);
    setIsSettingsOpen(false);
  };

  const onCancel = () => {
    setIsSettingsOpen(false);
  };

  useEffect(() => {
    // TODO: persist
    console.log(settings);
  }, [settings]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar hidden />
      <Background
        onPress={onBackgroundPressed}
        uri={settings?.background?.uri}
        type={settings?.background?.type}
        paused={isSettingsOpen}
      />
      <Settings
        onSave={onSave}
        onCancel={onCancel}
        visible={isSettingsOpen}
        settings={settings}
      />
    </SafeAreaView>
  );
};

export default App;
