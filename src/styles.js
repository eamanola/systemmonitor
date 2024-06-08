import { StyleSheet } from 'react-native';

const BORDER_WIDTH = 2;
export const GREY = '#ddd';
const DARK_GREY = '#999';
const TRANLUCENT_WHITE = 'rgba(255, 255, 255, 0.7)';
export const GAP = 10;
export const RED = '#F00';
export const GREEN = '#0F0';
export const safeButtonColor = GREEN;
export const dangerButtonColor = RED;
export const discardButtonColor = DARK_GREY;

export default StyleSheet.create({
  fieldSet: {
    padding: GAP,
    borderWidth: BORDER_WIDTH,
    borderColor: GREY,
    borderRadius: GAP,
  },
  overlay: {
    backgroundColor: TRANLUCENT_WHITE,
  },
  debug: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
