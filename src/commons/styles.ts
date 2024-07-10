import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { Colors } from './themes';
import { resize } from '@utils/scales';

interface ButtonStyle {
  label: StyleProp<TextStyle>;
  button: StyleProp<ViewStyle>;
}

const buttonSolidStyle: ButtonStyle = {
  label: {
    color: Colors.generalWhite,
  },
  button: {
    backgroundColor: Colors.primaryBase,
  },
};

const buttonOutlineStyle: ButtonStyle = {
  label: {
    color: Colors.generalBlack,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: resize(1),
  },
};

const buttonTextStyle: ButtonStyle = {
  label: {
    color: Colors.generalBlack,
  },
  button: {
    backgroundColor: 'transparent',
  },
};

export { buttonSolidStyle, buttonOutlineStyle, buttonTextStyle };
