import { useRef } from 'react';

import { TextInput } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth0 } from 'react-native-auth0';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@store/index';
import { MainState } from '@store/index';
import {
  loginWithCredentials,
  clearCurrentSesion,
  loginWithGoogle,
} from '@store/slices/auth/authThunk';

import { googleCredentialsSchema } from '@utils/validations';

const useAuth = () => {
  const dispatch = useAppDispatch();

  const token = useSelector((state: MainState) => state.auth.token);

  const { authorize, clearSession } = useAuth0();

  const passwordInputRef = useRef<TextInput>(null);

  const form = useForm<GoogleCredentials>({
    resolver: yupResolver(googleCredentialsSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isSignin = !!token;

  const onCleanEmailValue = () => form.setValue('email', '');

  const onSubmit = form.handleSubmit((data) => {
    dispatch(loginWithCredentials({ credentials: data, authorize }));
  });

  const onLoginWithGoogle = () => dispatch(loginWithGoogle());

  const onSignout = () => dispatch(clearCurrentSesion({ clearSession }));

  const onSubmitEditing = () => {
    if (passwordInputRef) {
      passwordInputRef.current?.focus();
    }
  };

  return {
    passwordInputRef,
    isSignin,
    form,
    onLoginWithGoogle,
    onCleanEmailValue,
    onSubmitEditing,
    onSignout,
    onSubmit,
    dispatch,
  };
};

export default useAuth;
