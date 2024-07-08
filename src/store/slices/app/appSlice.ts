import { createSlice } from '@reduxjs/toolkit';

import { getWatchlist } from '@store/slices/app/appThunk';

const initialState = {
  watchlist: [],
} satisfies AppState as AppState;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWatchlist.rejected, (state, action) => {
      // console.log('appSlice ::: rejected ::: STATE ::: ', state);
      console.log('appSlice ::: rejected ::: WATCHLIST:REJECT ::: ', action);
    });
    builder.addCase(getWatchlist.fulfilled, (state, { payload }) => {
      console.log(
        'appSlice ::: fulfilled ::: WATCHLIST:PAYLOAD ::: ',
        payload?.result,
      );
    });
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
