import { AxiosRequestConfig } from 'axios';

import { axiosApi, newAbortSignal } from '@utils/services';

import { API_KEY, API_URL } from '@env';

export class ApiService {
  protected static TIME_OUT = 3000000; // 180000ms <=> 3 minutes

  public static BASE_URL = API_URL;
  public static API_TOKEN = API_KEY;

  private static async request<T>(
    options: AxiosRequestConfig,
  ): Promise<AxiosResponseAPIProps<T>> {
    const response = await axiosApi(options);

    const responseJson =
      typeof response.data === 'string'
        ? JSON.parse(response.data)
        : response.data;

    const result = {
      errorCode: responseJson.error,
      message: responseJson.message,
      result: responseJson,
    };

    return result;
  }

  public static async get<T>({ url = '' }): Promise<AxiosResponseAPIProps<T>> {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: `${this.BASE_URL}${url}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Finnhub-Token': this.API_TOKEN,
      },
      signal: newAbortSignal(this.TIME_OUT),
      timeout: this.TIME_OUT,
    };

    return this.request<T>(options);
  }

  public static async post<T>({
    url = '',
    body = {},
    token = '',
  }): Promise<AxiosResponseAPIProps<T>> {
    const options: AxiosRequestConfig = {
      method: 'POST',
      url: `${this.BASE_URL}${url}`,
      data: body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      signal: newAbortSignal(this.TIME_OUT),
      timeout: this.TIME_OUT,
    };

    return this.request<T>(options);
  }
}
