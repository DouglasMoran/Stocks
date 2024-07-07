import { Colors, Fonts, Spacing } from '@commons/themes';

declare global {
  type DimensionType = 'width' | 'w' | 'height' | 'h';
  type AppColorsType = keyof typeof Colors;
  type AppSpacingType = keyof typeof Spacing;
  type AppFontsType = keyof typeof Fonts;
}
