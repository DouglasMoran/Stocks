import { StyleSheet, Text, View } from 'react-native';

import { Divider, useTheme } from 'react-native-paper';

import InputText from '@components/atoms/forms/InpuText';
import PowerBy from '@components/molecules/PowerBy';
import Container from '@components/atoms/Container';
import Button from '@components/atoms/Button';

import GoogleIcon from '@assets/icons/ic-google.svg';

import { resize } from '@utils/scales';

const LoginScreen = () => {
  const theme = useTheme();

  return (
    <Container containerStyle={styles(theme).container}>
      <View style={styles(theme).header}>
        <Text style={styles(theme).title}>Welcome to Stocks-Li</Text>
      </View>
      <View style={styles(theme).formContainer}>
        <InputText
          label='Email address'
          type='email-address'
          placeholder='dev@gmail.com'
        />
        <InputText
          label='Password'
          type='visible-password'
          placeholder='**************'
        />
      </View>
      <Button
        type='solid'
        label='Next'
        onPress={() => console.log('PRESS NEXT BUTTON!!')}
      />
      <View style={styles(theme).dividerContainer}>
        <Divider style={styles(theme).divider} />
        <Text style={styles(theme).dividerText}>or</Text>
        <Divider style={styles(theme).divider} />
      </View>
      <Button
        type='outline'
        label='Continue with Google'
        icon={<GoogleIcon width={resize(24)} height={resize(24)} />}
        onPress={() => console.log('PRESS GOOGLE SIGN IN BUTTON!!')}
      />
      <PowerBy />
    </Container>
  );
};

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      gap: resize(12),
      paddingTop: theme.spacing.xxxlarge,
    },
    header: {
      marginBottom: theme.spacing.large,
    },
    formContainer: {
      marginBottom: theme.spacing.xsmall,
      gap: theme.spacing.small,
    },
    title: {
      color: theme.colors.primaryBase,
      fontFamily: theme.fonts.primary,
      fontSize: resize(24),
    },
    subtitle: {
      color: theme.colors.primaryDarkest,
      fontFamily: theme.fonts.primaryBold,
      fontSize: resize(18),
    },
    paragraph: {
      color: theme.colors.generalBlack,
      fontFamily: theme.fonts.secondaryLight,
      fontSize: resize(16),
    },
    highlightedText: {
      color: theme.colors.primaryDarkest,
      fontFamily: theme.fonts.secondaryMedium,
    },
    dividerContainer: {
      padding: 8,
      alignItems: 'center',
      flexDirection: 'row',
    },
    dividerText: {
      fontFamily: theme.fonts.secondaryLight,
      color: theme.colors.generalBlack,
      marginHorizontal: theme.spacing.xxsmall,
      fontSize: resize(16),
    },
    divider: {
      flex: 1,
    },
  });

export default LoginScreen;
