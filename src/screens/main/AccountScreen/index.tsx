import { StyleSheet, Text, View } from 'react-native';

import Container from '@components/atoms/Container';
import { useTheme } from 'react-native-paper';
import { resize } from '@utils/scales';
import Button from '@components/atoms/Button';
import useAuth from '@hooks/useAuth';

const AccountScreen = () => {
  const theme = useTheme();

  const { onSignout } = useAuth();

  return (
    <Container>
      <View style={styles(theme).content}>
        <Text style={styles(theme).title}>Account Screen</Text>
      </View>
      <View style={styles(theme).footer}>
        <Button label='Sign out' type='solid' onPress={onSignout} />
      </View>
    </Container>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    title: {
      fontSize: resize(24),
      fontFamily: theme.fonts.primary,
      color: theme.colors.primaryBase,
    },
    content: {
      flex: 5,
      paddingTop: theme.spacing.xlarge,
    },
    footer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: theme.spacing.xxlarge,
    },
  });

export default AccountScreen;
