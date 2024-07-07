import { useState, useRef } from 'react';

import { TextInput } from 'react-native';

import { useAppDispatch } from '@store/index';
import {
  loginWithCredentials,
  loginWithGoogle,
} from '@store/slices/auth/authThunk';

const useAuth = () => {
  const dispatch = useAppDispatch();

  const passwordInputRef = useRef<TextInput>(null);

  const [passwordEntered, setPasswordEntered] = useState<string>('');
  const [emailEntered, setEmailEntered] = useState<string>('');

  const credentials = {
    email: emailEntered,
    password: passwordEntered,
  } satisfies GoogleCredentials as GoogleCredentials;

  const onLoginWithCredentials = () =>
    dispatch(loginWithCredentials(credentials));

  const onLoginWithGoogle = () => dispatch(loginWithGoogle());

  const onSubmitEditing = () => {
    if (passwordInputRef) {
      passwordInputRef.current?.focus();
    }
  };

  return {
    passwordInputRef,
    passwordEntered,
    emailEntered,
    setPasswordEntered,
    setEmailEntered,
    onSubmitEditing,
    onLoginWithCredentials,
    onLoginWithGoogle,
    dispatch,
  };
};

export default useAuth;
