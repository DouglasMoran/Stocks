import { Dimensions, Platform } from 'react-native';

const MAX_PERCENTAGE_VALUE: number = 100;

// UI SCALE - Guideline sizes are based on standard ~5" screen mobile device
const GUIDELINE_BASE_WIDTH: number = 414;
const GUIDELINE_BASE_HEIGHT: number = 896;

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  Platform.OS === 'ios' ? 'screen' : 'window',
);

export const resize = (size: number, type: DimensionType = 'width'): number => {
  const currentSize =
    type === 'width' || type === 'w'
      ? GUIDELINE_BASE_WIDTH
      : GUIDELINE_BASE_HEIGHT;

  const deviceSize =
    type === 'width' || type === 'w' ? SCREEN_WIDTH : SCREEN_HEIGHT;

  const percent = (size * MAX_PERCENTAGE_VALUE) / currentSize;

  const percentJS = percent / MAX_PERCENTAGE_VALUE;

  return deviceSize * percentJS;
};
