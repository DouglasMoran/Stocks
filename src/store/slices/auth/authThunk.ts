import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { TOKEN } from '@constants/index';

export const setUserToken = createAsyncThunk(
  'user/setUserTokenStatus',
  async (token: string, { rejectWithValue }) => {
    try {
      await AsyncStorage.setItem(TOKEN, token);
    } catch (error) {
      console.log('setUserToken ::: CATCH ::: ', error);
      rejectWithValue('Somenthing went wrong');
    }
  },
);

export const getUserToken = createAsyncThunk(
  'auth/getUserTokenStatus',
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      console.log('getUserToken ::: ', token);
      return token;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const loginWithCredentials = createAsyncThunk<
  LoginResponse,
  GoogleCredentials,
  AsyncThunkConfig
>(
  'auth/loginWithCredentialsStatus',
  async (credentials: GoogleCredentials, { rejectWithValue }) => {
    try {
      console.log('CREDENTIALS ::: ', credentials);
      return { status: 'success', data: 'Testing Thunk' };
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
