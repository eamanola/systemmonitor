import React, { useRef, useEffect, useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  /*
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

import background from './media/video.mp4';

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

const Settings = ({ onSave, onCancel, visible }) => (
  <Modal
    transparent
    animationType="slide"
    visible={visible}
    hardwareAccelerated
    onRequestClose={onCancel}
  >
    <TouchableWithoutFeedback onPress={onCancel}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            margin: 30,
            borderWidth: 2,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            justifyContent: 'flex-start',
            gap: 10,
          }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: 'green',
            }}
          >
            <KeyboardAvoidingView>
              <TextInput
                placeholder="server uri"
                style={{
                  borderWidth: 2,
                  borderColor: 'blue',
                }}
              />
            </KeyboardAvoidingView>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'green',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              gap: 10,
            }}
          >
            <Button onPress={onCancel} title="Cancel" color="#ddd" />
            <Button onPress={onSave} title="Save" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

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
          resizeMode='cover'
          rate={1.0}
          ignoreSilentSwitch='obey'
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
