import { DefaultTheme, MD3Theme } from 'react-native-paper';

import { LIGHT_PALETTE } from '@commons/palettes';

import { resize } from '@utils/scales';

export const Colors = {
  primaryBase: LIGHT_PALETTE.PRIMARY_BASE,
  primaryLightest: LIGHT_PALETTE.PRIMARY_LIGHTEST,
  primaryLight: LIGHT_PALETTE.PRIMARY_LIGHT,
  primaryDark: LIGHT_PALETTE.PRIMARY_DARK,
  primaryDarkest: LIGHT_PALETTE.PRIMARY_DARKEST,
  secondaryBase: LIGHT_PALETTE.SECONDARY_BASE,
  secondaryLightest: LIGHT_PALETTE.SECONDARY_LIGHTEST,
  secondaryLight: LIGHT_PALETTE.SECONDARY_LIGHT,
  secondaryDark: LIGHT_PALETTE.SECONDARY_DARK,
  secondaryDarkest: LIGHT_PALETTE.SECONDARY_DARKEST,
  brandBase: LIGHT_PALETTE.BRAND_BASE,
  brandLightest: LIGHT_PALETTE.BRAND_LIGHTEST,
  brandLight: LIGHT_PALETTE.BRAND_LIGHT,
  brandDark: LIGHT_PALETTE.BRAND_DARK,
  brandDarkest: LIGHT_PALETTE.BRAND_DARKEST,
  grayBase: LIGHT_PALETTE.GRAY_BASE,
  grayLightest: LIGHT_PALETTE.GRAY_LIGHTEST,
  grayLight: LIGHT_PALETTE.GRAY_LIGHT,
  grayDark: LIGHT_PALETTE.GRAY_DARK,
  grayDarkest: LIGHT_PALETTE.GRAY_DARKEST,
  alertBase: LIGHT_PALETTE.ALERT_BASE,
  alertLight: LIGHT_PALETTE.ALERT_LIGHT,
  alertDark: LIGHT_PALETTE.ALERT_DARK,
  successBase: LIGHT_PALETTE.SUCCESS_BASE,
  successLight: LIGHT_PALETTE.SUCCESS_LIGHT,
  successDark: LIGHT_PALETTE.SUCCESS_DARK,
  warningBase: LIGHT_PALETTE.WARNING_BASE,
  warningLight: LIGHT_PALETTE.WARNING_LIGHT,
  warningDark: LIGHT_PALETTE.WARNING_DARK,
  generalBlack: LIGHT_PALETTE.BLACK_WOODSMOKE_500,
  generalWhite: LIGHT_PALETTE.WHITE_500,
  black: LIGHT_PALETTE.BLACK,
};

export const Spacing = {
  xxsmall: resize(4),
  xsmall: resize(8),
  small: resize(12),
  medium: resize(16),
  large: resize(24),
  xlarge: resize(32),
  xxlarge: resize(48),
  xxxlarge: resize(64),
  big: resize(72),
};

export const Fonts = {
  primary: 'Poppins-ExtraBold',
  primaryBold: 'Poppins-Bold',
  primaryExtraBold: 'Poppins-ExtraBold',
  primaryMedium: 'Poppins-Medium',
  secondary: 'Roboto-Medium',
  secondaryMedium: 'Roboto-Medium',
  secondaryBold: 'Roboto-Bold',
  secondaryLight: 'Roboto-Light',
};

export const lightTheme: Partial<MD3Theme> = {
  colors: { ...DefaultTheme.colors, ...Colors },
  fonts: { ...DefaultTheme.fonts, ...Fonts },
};

export const customDefaultTheme = {
  ...DefaultTheme,
  ...lightTheme,
  placeholder: LIGHT_PALETTE.GRAY_DARKEST,
  spacing: Spacing,
};
