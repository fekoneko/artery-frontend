import { LoginCredentials, RegisterCredentials } from './auth';

export interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export async function handleApiResponse(response: Response) {
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    console.error(JSON.stringify(data, null, 2));
    return Promise.reject(data);
  }
}

export function getUserProfile(): Promise<{ user: User | undefined }> {
  const jwt = JSON.parse(window.localStorage.getItem('token') || 'null');
  return fetch(import.meta.env.VITE_API_URL + '/auth/me', {
    headers: {
      Authorization: jwt,
    },
  }).then(handleApiResponse);
}

export function login(data: LoginCredentials): Promise<AuthResponse> {
  return fetch(import.meta.env.VITE_API_URL + '/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(handleApiResponse);
}

export function register(data: RegisterCredentials): Promise<AuthResponse> {
  return fetch(
    import.meta.env.VITE_API_URL + '/auth/register/' + (data.isCompany ? 'company' : 'user'),
    {
      method: 'POST',
      body: JSON.stringify(data),
    },
  ).then(handleApiResponse);
}

export function logout(): Promise<{ message: string }> {
  return fetch(import.meta.env.VITE_API_URL + '/auth/logout', { method: 'POST' }).then(
    handleApiResponse,
  );
}
