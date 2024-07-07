import {
  Text,
  View,
  TouchableNativeFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { useTheme } from 'react-native-paper';

import styles from './styles';
import {
  buttonOutlineStyle,
  buttonSolidStyle,
  buttonTextStyle,
} from '@commons/styles';

const Button = ({
  label,
  icon,
  iconRight,
  color,
  type,
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
    <View style={[styles(theme).outerButtonContainer, cBtnStyle.button]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          theme.colors.surfaceVariant,
          false,
        )}
        style={styles(theme).touchable}
        onPress={onPress}
      >
        <View style={styles(theme).button}>
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
          <Text style={[styles(theme).buttonText, cBtnStyle.label]}>
            {label}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default Button;
