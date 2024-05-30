import React, { useEffect, useState } from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import { loadSettings, saveSettings } from './settings';
import Settings from './Settings';
import Background from './Background';

const App = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState(null);
  const [backgroundPreview, setBackgroundPreview] = useState(null);

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
    <SafeAreaView style={{ flex: 1 }}>
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
