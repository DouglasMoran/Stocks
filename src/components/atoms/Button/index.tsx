import { Text, View, StyleProp, ViewStyle } from 'react-native';

import { useTheme } from 'react-native-paper';

import styles from './styles';
import {
  buttonOutlineStyle,
  buttonSolidStyle,
  buttonTextStyle,
} from '@commons/styles';
import Touchable from '../Touchable';

const Button = ({
  label,
  icon,
  iconRight,
  color,
  type,
  contentContainerStyle,
  containerStyle,
  labelStyle,
  onPress,
}: ButtonProps): JSX.Element => {
  const theme = useTheme();

  const getButtonStyle = () => {
    switch (type) {
      case 'outline':
        return buttonOutlineStyle;
      case 'text':
        return buttonTextStyle;
      default:
        return buttonSolidStyle;
    }
  };

  const cBtnStyle = getButtonStyle();

  const iconPositionStyle: StyleProp<ViewStyle> = {
    start: '95%',
  };

  return (
    <Touchable
      containerStyle={[cBtnStyle.button, contentContainerStyle]}
      onPress={onPress}
    >
      <View style={[styles(theme).button, containerStyle]}>
        {!!icon && (
          <View
            style={[
              styles(theme).iconContainer,
              iconRight && iconPositionStyle,
            ]}
          >
            {icon}
          </View>
        )}
        <Text style={[styles(theme).buttonText, cBtnStyle.label, labelStyle]}>
          {label}
        </Text>
      </View>
    </Touchable>
  );
};

export default Button;
