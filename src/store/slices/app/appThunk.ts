import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiService } from '@api/index';

export const getStockSymbols = createAsyncThunk(
  'app/getStockSymbolsStatus',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApiService.get({
        url: '/stock/symbol?exchange=US',
      });
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const getStockProfile = createAsyncThunk(
  'app/getStockProfileStatus',
  async (symbol, { rejectWithValue }) => {
    try {
      const response = await ApiService.get({
        url: `/stock/profile2?symbol=${symbol}`,
      });
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
