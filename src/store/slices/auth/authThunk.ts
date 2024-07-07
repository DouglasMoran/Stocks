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

export const loginWithCredentials = createAsyncThunk(
  'auth/loginWithCredentialsStatus',
  async (credentials, thunkAPI) => {
    console.log('CREDENTIALS ::: ', credentials);
    console.log('THUNK API ::: ', thunkAPI);
    return { status: 'success', data: 'Testing Thunk' };
  },
);
