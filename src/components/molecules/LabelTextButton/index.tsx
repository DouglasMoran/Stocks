import { Text, TextStyle, View, ViewStyle } from 'react-native';

import Button from '@components/atoms/Button';

import { useTheme } from 'react-native-paper';

import { styles } from './styles';

type LabelTextButtonProps = {
  label: string;
  labelButton: string;
  labelStyles?: string;
  labelButtonStyles?: string;
  onPress: () => void;
};

const LabelTextButton = ({
  label,
  labelButton,
  onPress,
}: LabelTextButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <View style={styles(theme).header}>
      <Text style={styles(theme).titleCard}>{label}</Text>
      <Button
        type='text'
        label={labelButton}
        onPress={onPress}
        labelStyle={styles(theme).textButotn as TextStyle}
        containerStyle={styles(theme).addButtonContainer as ViewStyle}
        contentContainerStyle={styles(theme).contentContainerButton}
      />
    </View>
  );
};

export default LabelTextButton;
