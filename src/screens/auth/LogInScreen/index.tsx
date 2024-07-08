import { Text, View } from 'react-native';

import { Divider, useTheme } from 'react-native-paper';
import { Controller } from 'react-hook-form';

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
    form,
    onLoginWithGoogle,
    onCleanEmailValue,
    onSubmitEditing,
    onSubmit,
  } = useAuth();

  return (
    <Container containerStyle={styles(theme).container}>
      <View style={styles(theme).header}>
        <Text style={styles(theme).title}>Welcome to Stocks-Li</Text>
      </View>
      <View style={styles(theme).formContainer}>
        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label='Email address'
              type='email-address'
              placeholder='dev@gmail.com'
              returnKeyType='next'
              autoCapitalize='none'
              blurOnSubmit={false}
              value={value}
              isClearable
              onClean={onCleanEmailValue}
              onSubmitEditing={onSubmitEditing}
              onChangeText={onChange}
              onBlur={onBlur}
              haveError={!!form.formState.errors.email?.message}
              error={form.formState.errors.email?.message}
            />
          )}
          name='email'
        />
        <Controller
          control={form.control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PasswordInput
              label='Password'
              ref={passwordInputRef}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              haveError={!!form.formState.errors.password?.message}
              error={form.formState.errors.password?.message}
            />
          )}
          name='password'
        />
      </View>
      <Button type='solid' label='Next' onPress={onSubmit} />
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
