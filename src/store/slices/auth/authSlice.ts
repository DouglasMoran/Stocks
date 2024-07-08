import { createSlice } from '@reduxjs/toolkit';

import {
  loginWithCredentials,
  loginWithGoogle,
  clearCurrentSesion,
  getUserToken,
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
        console.log('getUserTokenStaus/fulfilled ::: STATE ::: ', state);
        console.log(
          'getUserTokenStaus/fulfilled ::: ACTION:::PAYLOAD ::: ',
          payload,
        );
        if (payload) {
          state.token === payload;
        }
      })
      .addCase(loginWithCredentials.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(loginWithCredentials.fulfilled, (state, action) => {
        if (action.payload.accessToken) {
          state.loading = 'succeeded';
          state.token = action.payload.accessToken;
        }
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
      })
      .addCase(clearCurrentSesion.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(clearCurrentSesion.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.token = null;
      });
  },
});

export const { setLoading } = authSlice.actions;

export default authSlice.reducer;
