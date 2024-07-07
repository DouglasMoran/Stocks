// Store
import { configureStore, combineSlices } from '@reduxjs/toolkit';
// Reducer
import authSlice from './slices/auth/authSlice';

import { getUserToken } from './slices/auth/authThunk';

const rootReducer = combineSlices({
  auth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.dispatch(getUserToken());

export type MainState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
