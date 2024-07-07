import {
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  TextInputProps,
} from 'react-native';
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
  interface InpuTextProps extends TextInputProps {
    placeholder?: string;
    label?: string;
    type: KeyboardTypeOptions;
    value: string;
    isClearable?: boolean;
    onClean?: () => void;
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
