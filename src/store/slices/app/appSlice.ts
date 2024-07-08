import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getWatchlist } from '@store/slices/app/appThunk';

const initialState = {
  watchTrades: [],
} satisfies AppState as AppState;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTrades: (state, action: PayloadAction<IWatchTrade>) => {
      // console.log('updateTrades ::: STATE ::: ', state);
      // console.log('updateTrades ::: ACTION:::PAYLOAD ::: ', action.payload);
      const trade = action.payload;

      if (Array.isArray(state.watchTrades) && state.watchTrades.length === 0) {
        state.watchTrades = state.watchTrades.concat(trade);
        console.log('ADD THE FIRST TRADE!! ', state.watchTrades[0].data);
        return;
      }

      if (Array.isArray(trade.data) && trade.data.length > 0) {
        // console.log('CURRENTLY 1 TRADE ADDED ::: ', state.watchTrades.length);
        // console.log('LOGIC TO HANDLE ADD AND UPDATE TRADES ::: ', trade);
        action.payload.data.forEach((newTrade) => {
          let tradeUpdated = false;

          state.watchTrades.forEach((watchTrade) => {
            const index = watchTrade.data.findIndex(
              (trade: IDatumTrade) => trade.s === newTrade.s,
            );
            if (index >= 0) {
              // Update existing trade in the data array
              watchTrade.data[index] = newTrade;
              tradeUpdated = true;
            }
          });

          if (!tradeUpdated) {
            // If no matching trade found, add the new trade to the first watchTrade or create a new watchTrade entry
            if (state.watchTrades.length > 0) {
              state.watchTrades[0].data.push(newTrade);
            } else {
              state.watchTrades.push({
                data: [newTrade],
                type: action.payload.type,
              });
            }
          }
        });
      }

      // updatedTrade.data.forEach((newTrade: IDatumTrade) => {
      //   let tradeUpdated = false;
      //   state.watchTrades.forEach((watchTrade: IWatchTrade) => {
      //     const index = watchTrade.data.findIndex(
      //       (datumTrade: IDatumTrade) => datumTrade.s === newTrade.s,
      //     );

      //     if (index >= 0) {
      //       watchTrade.data[index] = newTrade;
      //       tradeUpdated = true;
      //     }
      //   });

      //   if (!tradeUpdated) {
      //     if (state.watchTrades.length > 0) {
      //       state.watchTrades[0].data.push(newTrade);
      //     } else {
      //       state.watchTrades.push({
      //         data: [newTrade],
      //         type: action.payload.type,
      //       });
      //     }
      //   }
      // });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWatchlist.rejected, (state, action) => {
      // console.log('appSlice ::: rejected ::: STATE ::: ', state);
      console.log('appSlice ::: rejected ::: WATCHLIST:REJECT ::: ', action);
    });
    builder.addCase(getWatchlist.fulfilled, (state, { payload }) => {
      console.log(
        'appSlice ::: fulfilled ::: WATCHLIST:PAYLOAD ::: ',
        // payload?.result,
      );
    });
  },
});

export const { updateTrades } = appSlice.actions;

export default appSlice.reducer;
