import { createSlice } from '@reduxjs/toolkit';

import {
  loginWithCredentials,
  loginWithGoogle,
  clearCurrentSesion,
  getUserToken,
} from '@store/slices/auth/authThunk';

const initialState = {
  token: null,
  errorMessage: '',
  loading: 'idle',
} satisfies AuthState as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserToken.fulfilled, (state, { payload }) => {
        if (payload) {
          state.token = payload;
        }
      })
      .addCase(loginWithCredentials.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(loginWithCredentials.fulfilled, (state, action) => {
        if (action.payload) {
          state.loading = 'succeeded';
          state.token = action.payload.accessToken;
        }
      })
      .addCase(loginWithCredentials.rejected, (state, { payload }) => {
        state.loading = 'failed';
        if (payload?.message) {
          state.errorMessage = payload.message;
          return;
        }

        state.errorMessage = 'Sorry something went wrong!';
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.token = action.payload.accessToken;
      })
      .addCase(loginWithGoogle.rejected, (state, { payload }) => {
        state.loading = 'failed';
        if (payload?.message) {
          state.errorMessage = payload.message;
          return;
        }

        state.errorMessage = 'Sorry something went wrong!';
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

export const { setLoading, setErrorMessage } = authSlice.actions;

export default authSlice.reducer;
