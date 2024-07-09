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
    updateTrades: (state, { payload: trade }: PayloadAction<IDatumTrade[]>) => {
      console.log('*******************************');

      if (Array.isArray(trade) && trade.length > 0) {
        // console.log('ADD THIS TRADE ::: LENGTH ::: ', trade.length);
        // console.log('ADD THIS TRADE TO WATCHLIST ::: ', trade);
        trade.forEach((trade) => {
          const index = state.watchTrades.findIndex(
            (item) => item.s === trade.s,
          );

          if (index !== -1) {
            // Update existing trade
            state.watchTrades[index] = trade;
            // console.log(
            //   '::::: state.watchTrades[index] ::::: ',
            //   state.watchTrades[index],
            // );
          } else {
            // Add new trade
            // console.log('WATCHTRADES LENGTH ::: ', state.watchTrades.length);
            // console.log('THIS ONE WILL BE ADD ::: ', trade);
            // state.watchTrades.push(trade);
            state.watchTrades = state.watchTrades.concat(trade);
          }
        });
        return;
      }

      // console.log('IS TREND EMPTY ::: ', typeof trade, trade);
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
