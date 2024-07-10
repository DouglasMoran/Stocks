import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { useTheme } from 'react-native-paper';

type CardProps = {
  children: React.ReactNode;
  contentStyles?: StyleProp<ViewStyle>;
};

const Card = ({ children, contentStyles }: CardProps): JSX.Element => {
  const theme = useTheme();

  return (
    <View style={[styles(theme).container, contentStyles]}>{children}</View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.generalWhite,
      paddingHorizontal: theme.spacing.large,
      paddingBottom: theme.spacing.xlarge,
      paddingTop: theme.spacing.medium,
      borderRadius: theme.spacing.medium,
    },
  });

export default Card;
