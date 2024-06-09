import { useWindowDimensions } from 'react-native';

const useOrientation = () => {
  const { width, height } = useWindowDimensions();

  return { width, height, isPortrait: width < height };
};

export default useOrientation;
