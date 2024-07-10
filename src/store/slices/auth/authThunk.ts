import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth0, { PasswordRealmOptions } from 'react-native-auth0';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Credentials,
  WebAuthorizeParameters,
  WebAuthorizeOptions,
  ClearSessionParameters,
  ClearSessionOptions,
} from 'react-native-auth0';

import { TOKEN } from '@constants/index';
import { AUTH_CLIENT_ID, AUTH_DB, AUTH_DOMAIN } from '@env';

export const getUserToken = createAsyncThunk(
  'auth/getUserTokenStatus',
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      return token;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const loginWithGoogle = createAsyncThunk<
  LoginResponse,
  {
    authorize: (
      parameters?: WebAuthorizeParameters,
      options?: WebAuthorizeOptions,
    ) => Promise<Credentials | undefined>;
  },
  AsyncThunkConfig
>('auth/loginWithGoogleStatus', async ({ authorize }, { rejectWithValue }) => {
  try {
    const response = await authorize();

    if (response?.accessToken) {
      await AsyncStorage.setItem(TOKEN, response.accessToken);
      return { status: 'success', accessToken: response.accessToken };
    }

    return { status: 'empty', accessToken: '' };
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const loginWithCredentials = createAsyncThunk<
  LoginResponse,
  { credentials: GoogleCredentials },
  AsyncThunkConfig
>(
  'auth/loginWithCredentialsStatus',
  async ({ credentials: { email, password } }, { rejectWithValue }) => {
    try {
      const auth0 = new Auth0({
        domain: AUTH_DOMAIN,
        clientId: AUTH_CLIENT_ID,
      });

      const options = {
        username: email,
        password,
        realm: AUTH_DB,
        scope: 'openid profile email',
      } satisfies PasswordRealmOptions as PasswordRealmOptions;

      const response = await auth0.auth.passwordRealm(options);

      return { status: 'success', accessToken: response.accessToken };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const clearCurrentSesion = createAsyncThunk<
  boolean,
  {
    clearSession: (
      parameters?: ClearSessionParameters,
      options?: ClearSessionOptions,
    ) => Promise<void>;
  }
>(
  'auth/clearCurrentSesionStatus',
  async ({ clearSession }, { rejectWithValue }) => {
    try {
      await clearSession();
      await AsyncStorage.removeItem(TOKEN);
      return true;
    } catch (error) {
      console.error('Error clearing session:', error);
      return rejectWithValue(false);
    }
  },
);
