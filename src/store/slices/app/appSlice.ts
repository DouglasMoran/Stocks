import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getStockSymbols, getStockProfile } from '@store/slices/app/appThunk';

const initialState = {
  watchTrades: [],
  previousPrices: {},
  popularStockSymbols: [],
  stockSymbols: [],
} satisfies AppState as AppState;

const toggleIsWatched = (
  stockSymbols: IStockSymbol[],
  symbol: string,
): IStockSymbol[] => {
  return stockSymbols.map((prevStock: IStockSymbol) => {
    if (prevStock.symbol === symbol) {
      return {
        ...prevStock,
        isWatched: !prevStock.isWatched,
      };
    }
    return prevStock;
  });
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTrades: (state, action: PayloadAction<IWatchTrade>) => {
      action.payload.data.forEach((newTrade) => {
        const previousPrice = state.previousPrices[newTrade.s] || newTrade.p;
        state.previousPrices[newTrade.s] = newTrade.p;

        const index = state.watchTrades.findIndex(
          (trade) => trade.s === newTrade.s,
        );
        if (index >= 0) {
          // Update existing trade
          state.watchTrades[index] = newTrade;
        } else {
          // Add new trade
          state.watchTrades.push(newTrade);
        }
      });

      // console.log('*************');
      // // console.log('updateTrades ::: STATE ::: ', state);
      // console.log('updateTrades ::: ACTION:::PAYLOAD ::: ', action.payload);

      // const trade = action.payload.data;

      // const isWatchlistEmpty = state.watchTrades.length === 0;

      // if (Array.isArray(trade) && trade.length > 0) {
      //   if (isWatchlistEmpty) {
      //     state.watchTrades = state.watchTrades.concat(trade);
      //     return;
      //   }

      //   // const watchlistSymbols = state.watchTrades.map(
      //   //   (item: IDatumTrade) => item.s,
      //   // );
      //   // console.log('WATCHLIST SYMBOLS LIST ::: ', watchlistSymbols);
      //   trade.forEach((cTrade: IDatumTrade) => {
      //     const tradePosition = state.watchTrades.findIndex(
      //       (t: IDatumTrade) => t.s === cTrade.s,
      //     );

      //     if (tradePosition >= 0) {
      //       state.watchTrades[tradePosition] = cTrade;
      //     }

      //     if (tradePosition < 0) {
      //       console.log('NEW SYMBOL ::: TRADE POSITION ::: ', tradePosition);
      //       console.log(
      //         'NEW SYMBOL ::: CURRENT TRADE UPDATED ::: ',
      //         cTrade.s,
      //         // state.watchTrades,
      //       );
      //     }
      //   });
      // }

      // if (Array.isArray(state.watchTrades) && state.watchTrades.length === 0) {
      //   state.watchTrades = state.watchTrades.concat(trade);
      //   console.log('ADD THE FIRST TRADE!! ', state.watchTrades[0].data);
      //   return;
      // }

      // if (Array.isArray(trade.data) && trade.data.length > 0) {
      //   // console.log('CURRENTLY 1 TRADE ADDED ::: ', state.watchTrades.length);
      //   // console.log('LOGIC TO HANDLE ADD AND UPDATE TRADES ::: ', trade);
      //   action.payload.data.forEach((newTrade) => {
      //     let tradeUpdated = false;

      //     state.watchTrades.forEach((watchTrade) => {
      //       const index = watchTrade.data.findIndex(
      //         (trade: IDatumTrade) => trade.s === newTrade.s,
      //       );
      //       if (index >= 0) {
      //         // Update existing trade in the data array
      //         watchTrade.data[index] = newTrade;
      //         tradeUpdated = true;
      //       }
      //     });

      //     if (!tradeUpdated) {
      //       // If no matching trade found, add the new trade to the first watchTrade or create a new watchTrade entry
      //       if (state.watchTrades.length > 0) {
      //         state.watchTrades[0].data.push(newTrade);
      //       } else {
      //         state.watchTrades.push({
      //           data: [newTrade],
      //           type: action.payload.type,
      //         });
      //       }
      //     }
      //   });
      // }

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
    watchStockSymbol: (
      state,
      {
        payload: { symbol, type },
      }: PayloadAction<{ type: 'popular' | 'stocks'; symbol: string }>,
    ) => {
      if (!!symbol) {
        if (type === 'popular') {
          const updatedPopularStockSymbols = toggleIsWatched(
            state.popularStockSymbols,
            symbol,
          );

          state.popularStockSymbols = updatedPopularStockSymbols;
          return;
        }

        const updatedStockSymbols = toggleIsWatched(state.stockSymbols, symbol);

        state.stockSymbols = updatedStockSymbols;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStockSymbols.fulfilled, (state, { payload }) => {
      if (Array.isArray(payload?.result) && payload.result.length > 0) {
        const symbols = payload?.result;
        const populars = symbols.slice(0, 3);
        state.popularStockSymbols = populars;
        state.stockSymbols = symbols;
      }
    });
    builder.addCase(getStockProfile.fulfilled, (state, { payload }) => {
      console.log('appSlice ::: fulfilled ::: getStockProfile ::: ', payload);
    });
  },
});

export const { updateTrades, watchStockSymbol } = appSlice.actions;

export default appSlice.reducer;
