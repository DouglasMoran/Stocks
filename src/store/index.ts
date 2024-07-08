// Store
import { configureStore, combineSlices } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Slice(Reducer)
import authSlice from '@store/slices/auth/authSlice';
import appSlice from '@store/slices/app/appSlice';

import { getUserToken } from './slices/auth/authThunk';

const rootReducer = combineSlices({
  auth: authSlice,
  app: appSlice,
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

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
