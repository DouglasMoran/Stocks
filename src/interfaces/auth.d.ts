declare global {
  interface IAuthState {
    token: string | null;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  }
}

export {};
