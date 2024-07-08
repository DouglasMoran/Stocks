import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiService } from '@api/index';

export const getWatchlist = createAsyncThunk(
  'app/getWatchListStatus',
  async (data, { rejectWithValue }) => {
    try {
      const response = await ApiService.get({
        url: '/stock/symbol?exchange=US',
      });
      return response;
    } catch (error: any) {
      rejectWithValue(error);
    }
  },
);
