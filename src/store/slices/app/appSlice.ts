import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getStockSymbols, getStockProfile } from '@store/slices/app/appThunk';

const initialState = {
  symbolWatches: [],
  watchTrades: [],
  previousPrices: {},
  popularStockSymbols: [
    'AAPL',
    'BINANCE:BTCUSDT',
    'IC MARKETS:1',
    'AMZN',
    'MSFT',
    'BTC',
    'ETH',
    'EUR',
    'GBP',
  ],
  stockSymbols: [],
  webSocketServiceRef: null,
  isLoadingStockSymbols: 'idle',
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
    setWebSocketRef: (state, { payload }) => {
      state.webSocketServiceRef = payload;
    },
    updateTrades: (state, { payload: trade }: PayloadAction<IDatumTrade[]>) => {
      if (Array.isArray(trade) && trade.length > 0) {
        trade.forEach((trade) => {
          const index = state.watchTrades.findIndex(
            (item) => item.s === trade.s,
          );

          if (index !== -1) {
            state.watchTrades[index] = trade;
          } else {
            state.watchTrades = state.watchTrades.concat(trade);
          }
        });
        return;
      }
    },
    watchStockSymbol: (state, { payload: symbol }: PayloadAction<string>) => {
      if (!!symbol) {
        const updatedStockSymbols = toggleIsWatched(state.stockSymbols, symbol);

        state.stockSymbols = updatedStockSymbols;

        state.symbolWatches = updatedStockSymbols
          .filter((stock: IStockSymbol) => stock.isWatched && stock.symbol)
          .map((stock: IStockSymbol) => stock.symbol);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStockSymbols.pending, (state) => {
      state.isLoadingStockSymbols = 'pending';
    });
    builder.addCase(getStockSymbols.fulfilled, (state, { payload }) => {
      if (Array.isArray(payload?.result) && payload.result.length > 0) {
        const symbols = payload?.result;
        state.stockSymbols = symbols;
        state.isLoadingStockSymbols = 'succeeded';
      }
    });
    builder.addCase(getStockSymbols.rejected, (state) => {
      state.isLoadingStockSymbols = 'failed';
    });
    builder.addCase(getStockProfile.fulfilled, (state, { payload }) => {
      console.log('appSlice ::: fulfilled ::: getStockProfile ::: ', payload);
    });
  },
});

export const { updateTrades, watchStockSymbol, setWebSocketRef } =
  appSlice.actions;

export default appSlice.reducer;
