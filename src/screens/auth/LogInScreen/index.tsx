import { Text, View } from 'react-native';

import { Divider, useTheme } from 'react-native-paper';

import PasswordInput from '@components/atoms/forms/PasswordInput';
import InputText from '@components/atoms/forms/InpuText';
import PowerBy from '@components/molecules/PowerBy';
import Container from '@components/atoms/Container';
import Button from '@components/atoms/Button';

import GoogleIcon from '@assets/icons/ic_google.svg';

import useAuth from '@hooks/useAuth';

import { resize } from '@utils/scales';

import styles from './styles';

const LoginScreen = () => {
  const theme = useTheme();

  const {
    passwordInputRef,
    passwordEntered,
    emailEntered,
    setPasswordEntered,
    setEmailEntered,
    onLoginWithCredentials,
    onLoginWithGoogle,
    onSubmitEditing,
  } = useAuth();

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
          autoCapitalize='none'
          blurOnSubmit={false}
          value={emailEntered}
          isClearable
          onClean={() => setEmailEntered('')}
          onChangeText={setEmailEntered}
          onSubmitEditing={onSubmitEditing}
        />
        <PasswordInput
          label='Password'
          ref={passwordInputRef}
          value={passwordEntered}
          onChangeText={setPasswordEntered}
        />
      </View>
      <Button type='solid' label='Next' onPress={onLoginWithCredentials} />
      <View style={styles(theme).dividerContainer}>
        <Divider style={styles(theme).divider} />
        <Text style={styles(theme).dividerText}>or</Text>
        <Divider style={styles(theme).divider} />
      </View>
      <Button
        type='outline'
        label='Continue with Google'
        icon={<GoogleIcon width={resize(24)} height={resize(24)} />}
        onPress={onLoginWithGoogle}
      />
      <PowerBy />
    </Container>
  );
};

export default LoginScreen;
