import { useRef } from 'react';

import { TextInput } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@store/index';
import {
  loginWithCredentials,
  loginWithGoogle,
} from '@store/slices/auth/authThunk';

import { googleCredentialsSchema } from '@utils/validations';

const useAuth = () => {
  const dispatch = useAppDispatch();

  const passwordInputRef = useRef<TextInput>(null);

  const form = useForm<GoogleCredentials>({
    resolver: yupResolver(googleCredentialsSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onCleanEmailValue = () => form.setValue('email', '');

  const onSubmit = form.handleSubmit((data) => {
    dispatch(loginWithCredentials(data));
  });

  const onLoginWithGoogle = () => dispatch(loginWithGoogle());

  const onSubmitEditing = () => {
    if (passwordInputRef) {
      passwordInputRef.current?.focus();
    }
  };

  return {
    passwordInputRef,
    form,
    onLoginWithGoogle,
    onCleanEmailValue,
    onSubmitEditing,
    onSubmit,
    dispatch,
  };
};

export default useAuth;
