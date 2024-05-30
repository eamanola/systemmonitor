import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { loadSettings, saveSettings } from './settings';
import Settings from './Settings';
import Background from './Background';

const App = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState(null);
  const [backgroundPreview, setBackgroundPreview] = useState(null);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const onBackgroundPressed = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const onBackgroundPreview = (preview) => {
    setBackgroundPreview(preview);
  };

  const onSave = (newSettings) => {
    saveSettings(newSettings);
    setSettings(newSettings);
    setIsSettingsOpen(false);
  };

  const onCancel = () => {
    setIsSettingsOpen(false);
  };

  useEffect(() => {
    const loadPersistedSettings = async () => {
      setSettings(await loadSettings());
    };
    loadPersistedSettings();
  }, []);

  useEffect(() => {
    if (!isSettingsOpen) {
      setBackgroundPreview(null);
    }
  }, [isSettingsOpen]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar hidden />
      <Background
        onPress={onBackgroundPressed}
        background={backgroundPreview || settings?.background}
        paused={isSettingsOpen}
      />
      <Settings
        onSave={onSave}
        onCancel={onCancel}
        onBackgroundPreview={onBackgroundPreview}
        visible={isSettingsOpen}
        settings={settings}
      />
    </SafeAreaView>
  );
};

export default App;
