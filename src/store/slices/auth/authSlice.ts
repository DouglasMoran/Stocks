import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

import {
  loginWithCredentials,
  getUserToken,
  setUserToken,
} from '@store/slices/auth/authThunk';

const initialState = {
  token: null,
  loading: 'idle',
} satisfies IAuthState as IAuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    initializeToken: (state) => {
      const USER_TOKEN = AsyncStorage.getItem('token');

      console.log('initializeToken ::: USER TOKEN ::: ', USER_TOKEN);
      if (USER_TOKEN) {
        state.token === USER_TOKEN;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithCredentials.pending, (state, action) => {
        console.log(
          'loginWithCredentials/pending ::: INITAL STATE ::: ',
          state.loading,
        );
        console.log('loginWithCredentials/pending ::: ACTION ::: ', action);
      })
      .addCase(loginWithCredentials.fulfilled, (state, action) => {
        console.log('loginWithCredentials/fulfilled ::: STATE ::: ', state);
        console.log('loginWithCredentials/fulfilled ::: ACTION ::: ', action);
        console.log(
          'loginWithCredentials ::: INITIAL STATE TOKEN ::: ',
          state.token,
        );
      })
      .addCase(getUserToken.fulfilled, (state, { payload }) => {
        console.log('getUserToken/fulfilled ::: STATE ::: ', state);
        console.log(
          'getUserToken/fulfilled ::: ACTION:::PAYLOAD ::: ',
          payload,
        );
        if (payload) {
          state.token === payload;
        }
      })
      .addCase(setUserToken.rejected, (state, action) => {
        console.log('setUserToken/fulfilled ::: STATE ::: ', state);
        console.log('setUserToken/rejected ::: ACTION ::: ', action);
      });
  },
});

export const { setLoading, initializeToken } = authSlice.actions;

export default authSlice.reducer;
