declare global {
  interface AuthState {
    token: string | null;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  }

  interface GoogleCredentials {
    email: string;
    password: string;
  }

  interface LoginResponse {
    status: string;
    accessToken: string;
  }

  interface AsyncThunkConfig {
    state: any;
    dispatch: any;
    extra: any;
    rejectValue: any;
    serializedErrorType: any;
  }
}

// Declare export like above like measure of recognize auth.d.ts like a module
export {};
