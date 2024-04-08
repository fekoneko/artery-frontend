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
  id: string;
  email: string;
  name?: string;
}

export const handleApiResponse = async (response: Response) => {
  const data = await response.json();

  if (response.ok) return data;
  else
    throw new FetchError(response, `The request is rejected with status code ${response.status}`);
};

export const getUserProfile = async (): Promise<{ user: User }> => {
  const jwt = JSON.parse(window.localStorage.getItem('token') || 'null');

  return fetch(import.meta.env.VITE_API_URL + '/auth/me', {
    headers: {
      Authorization: jwt,
    },
  }).then(handleApiResponse);
};

export const login = (data: LoginCredentials): Promise<AuthResponse> => {
  return fetch(import.meta.env.VITE_API_URL + '/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const register = (data: RegisterCredentials): Promise<AuthResponse> => {
  return fetch(
    import.meta.env.VITE_API_URL + '/auth/register/' + (data.isCompany ? 'company' : 'user'),
    {
      method: 'POST',
      body: JSON.stringify(data),
    },
  ).then(handleApiResponse);
};

export const logout = (): Promise<{ message: string }> => {
  return fetch(import.meta.env.VITE_API_URL + '/auth/logout', { method: 'POST' }).then(
    handleApiResponse,
  );
};
