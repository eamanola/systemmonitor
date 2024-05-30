import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (key, data) => AsyncStorage.setItem(key, data);
export const load = async (key) => AsyncStorage.getItem(key);

export default null;
