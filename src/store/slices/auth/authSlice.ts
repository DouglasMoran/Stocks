import { createSlice } from '@reduxjs/toolkit';

import {
  loginWithCredentials,
  loginWithGoogle,
  getUserToken,
  setUserToken,
} from '@store/slices/auth/authThunk';

const initialState = {
  token: null,
  loading: 'idle',
} satisfies AuthState as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
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
      })
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
      .addCase(loginWithGoogle.pending, (state, action) => {
        console.log(
          'loginWithGoogle/pending ::: INITAL STATE ::: ',
          state.loading,
        );
        console.log('loginWithGoogle/pending ::: ACTION ::: ', action);
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        console.log('loginWithGoogle/fulfilled ::: STATE ::: ', state);
        console.log('loginWithGoogle/fulfilled ::: ACTION ::: ', action);
        console.log(
          'loginWithGoogle ::: INITIAL STATE TOKEN ::: ',
          state.token,
        );
      });
  },
});

export const { setLoading } = authSlice.actions;

export default authSlice.reducer;
