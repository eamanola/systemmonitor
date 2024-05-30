import { StyleSheet } from 'react-native';

export const GAP = 10;
export const BORDER_WIDTH = 2;
export const GREY = '#ddd';
export const selectBGButtonColor = '#0F0';
export const removeBGButtonColor = '#F00';
export const cancelButtonColor = GREY;

export default StyleSheet.create({
  fieldSet: {
    padding: GAP,
    borderWidth: BORDER_WIDTH,
    borderColor: GREY,
    borderRadius: GAP,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
