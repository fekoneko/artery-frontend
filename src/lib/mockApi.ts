import { LoginCredentials, RegisterCredentials } from './auth';

export class FetchError extends Error {
  constructor(
    public response: Response,
    message?: string,
  ) {
    super(message);
  }
}

export interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  id: number;
  email: string;
  name?: string;
}

export const getUserProfile = async (): Promise<{ user: User }> => {
  return new Promise<{ user: User }>((resolve) =>
    resolve({ user: { id: 1, email: 'test@example.com', name: 'Name' } }),
  );
};

export const login = (data: LoginCredentials): Promise<AuthResponse> => {
  return new Promise<AuthResponse>((resolve) =>
    resolve({ user: { id: 1, email: 'test@example.com', name: 'Name' }, jwt: data.password }),
  );
};

export const register = (data: RegisterCredentials): Promise<AuthResponse> => {
  return new Promise<AuthResponse>((resolve) =>
    resolve({ user: { id: 1, email: 'test@example.com', name: 'Name' }, jwt: data.password }),
  );
};

export const logout = (): Promise<{ message: string }> => {
  return new Promise<{ message: string }>((resolve) => resolve({ message: '' }));
};
