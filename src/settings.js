import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async (key, data) => AsyncStorage.setItem(key, data);
const load = async (key) => AsyncStorage.getItem(key);
const SETTINGS_KEY = 'settings';

export const saveSettings = async (settings = {}, options = { key: SETTINGS_KEY }) => {
  try {
    await save(options.key, JSON.stringify(settings));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const loadSettings = async (options = { key: SETTINGS_KEY }) => {
  try {
    const settings = JSON.parse(await load(options.key));
    return settings;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default null;
