import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
declare global {
  interface ColorProp {
    color: AppColorsType;
  }

  interface SpacingProp {
    space: AppSpacingType;
  }

  interface FontProp {
    font: AppFontsType;
  }

  // Forms
  interface InpuTextProps {
    placeholder?: string;
    label?: string;
    type: KeyboardTypeOptions;
  }

  interface ButtonProps {
    label: string;
    type: ButtonType;
    icon?: React.ReactElement;
    iconRight?: boolean;
    color?: string;
    labelStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
  }
}

export {};
