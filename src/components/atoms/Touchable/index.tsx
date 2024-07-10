import { View, TouchableNativeFeedback } from 'react-native';

import { useTheme } from 'react-native-paper';

import { styles } from './styles';

const Touchable = ({
  children,
  touchableStyle,
  containerStyle,
  rippleColor,
  onPress,
}: TouchableProps): JSX.Element => {
  const theme = useTheme();

  return (
    <View style={[styles(theme).container, containerStyle]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          rippleColor ?? theme.colors.surfaceVariant,
          false,
        )}
        style={[styles(theme).touchable, touchableStyle]}
        onPress={onPress}
      >
        {children}
      </TouchableNativeFeedback>
    </View>
  );
};

export default Touchable;
