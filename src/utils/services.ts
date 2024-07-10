import axios, { AxiosInstance } from 'axios';

import store from '@store/index';

const axiosApi: AxiosInstance = axios.create();

axiosApi.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

const newAbortSignal = (timeoutMs: number) => {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
};

export { axiosApi, newAbortSignal };
