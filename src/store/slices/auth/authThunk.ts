import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Credentials,
  WebAuthorizeParameters,
  WebAuthorizeOptions,
  ClearSessionParameters,
  ClearSessionOptions,
} from 'react-native-auth0';

import { TOKEN } from '@constants/index';

export const setUserToken = createAsyncThunk(
  'user/setUserTokenStatus',
  async (token: string, { rejectWithValue }) => {
    try {
      await AsyncStorage.setItem(TOKEN, token);
      return true;
    } catch (error) {
      rejectWithValue('Somenthing went wrong');
    }
  },
);

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

export const loginWithCredentials = createAsyncThunk<
  LoginResponse,
  {
    credentials: GoogleCredentials;
    authorize: (
      parameters?: WebAuthorizeParameters,
      options?: WebAuthorizeOptions,
    ) => Promise<Credentials | undefined>;
  },
  AsyncThunkConfig
>(
  'auth/loginWithCredentialsStatus',
  async ({ credentials, authorize }, { rejectWithValue }) => {
    try {
      console.log('CREDENTIALS ENTERED ::: ', credentials);
      const response = await authorize();

      if (response) {
        await AsyncStorage.setItem(TOKEN, response.accessToken);
        return { status: 'success', accessToken: response?.accessToken };
      }

      return { status: 'empty', accessToken: '' };
    } catch (error) {
      console.log('THUNK API ::: ', error, rejectWithValue);
      return rejectWithValue('error');
    }
  },
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogleStatus',
  async (_, { rejectWithValue }) => {
    try {
      console.log('GOOGLE SIGN IN ::: ', _);
      console.log('GOOGLE SIGN IN ::: THUNK API ::: ');
      return { status: 'success', data: 'Testing Thunk' };
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
