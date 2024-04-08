import { LoginCredentials, RegisterCredentials } from './auth';
import { User } from './mockApi';

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

export const handleApiResponse = async (response: Response) => {
  const data = await response.json();

  if (response.ok) {
    if (data?.jwt) localStorage.setItem('accessToken', data.jwt);
    return data;
  } else
    throw new FetchError(response, `The request is rejected with status code ${response.status}`);
};

export const getUserProfile = async (): Promise<{ user: User }> => {
  const jwt = JSON.parse(window.localStorage.getItem('accessToken') || 'null');

  return fetch(import.meta.env.VITE_API_URL + '/api/me', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }).then(handleApiResponse);
};

export const login = (data: LoginCredentials): Promise<AuthResponse> => {
  return fetch(import.meta.env.VITE_API_URL + '/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(handleApiResponse);
};

export const register = (data: RegisterCredentials): Promise<AuthResponse> => {
  return fetch(
    import.meta.env.VITE_API_URL + '/api/register/' + (data.isCompany ? 'company' : 'client'),
    {
      method: 'POST',
      body: JSON.stringify(data),
    },
  ).then(handleApiResponse);
};

export const logout = (): void => {
  localStorage.removeItem('accessToken');
};
