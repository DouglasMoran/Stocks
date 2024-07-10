import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type ContainerProps = {
  children: React.ReactNode;
  containerStyle?: any;
};
const Container = ({
  children,
  containerStyle,
}: ContainerProps): JSX.Element => {
  const theme = useTheme();

  return (
    <View style={{ ...styles(theme).content, ...containerStyle }}>
      {children}
    </View>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    content: {
      backgroundColor: theme.colors.placeholder,
      paddingHorizontal: theme.spacing.medium,
      flex: 1,
    },
  });

export default Container;
