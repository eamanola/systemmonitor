import React, { useRef, useEffect, useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  TouchableWithoutFeedback,
  /*
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  Dimensions,
  Text,
  ScrollView,
  */
} from 'react-native';

import Video from 'react-native-video';

import {
  Colors,
  /*
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  */
} from 'react-native/Libraries/NewAppScreen';

import Settings from './Settings';
import background from '../media/video.mp4';

/*
function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
*/

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const App = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const videoRef = useRef();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const onBackgroundPressed = () => {
    console.log('onBackgroundPressed');
    setIsSettingsOpen(!isSettingsOpen);
  };

  const onSave = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const onCancel = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  useEffect(() => {
    const { current: player } = videoRef;
    if (isSettingsOpen) {
      player.pause();
    } else {
      player.resume();
    }
  }, [isSettingsOpen]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar hidden />
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={onBackgroundPressed}
      >
        <Video
          source={background}
          style={styles.backgroundVideo}
          repeat
          muted
          resizeMode="cover"
          rate={1.0}
          ignoreSilentSwitch="obey"
          onError={(...e) => console.log(...e)}
          ref={videoRef}
        />
      </TouchableWithoutFeedback>
      <Settings onSave={onSave} onCancel={onCancel} visible={isSettingsOpen} />
    </SafeAreaView>
  );
  /*
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.jsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
    */
};
/*
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/

export default App;
