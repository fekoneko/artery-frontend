import { AxiosResponse } from 'axios';
import { LoginCredentials, RegisterCredentials } from './auth';
import axiosInstance from './axios';
import { Client, Company } from '../@types/global';

export class FetchError extends Error {
  constructor(
    public response: AxiosResponse,
    message?: string,
  ) {
    super(message);
  }
}

export interface AuthResponse<Who extends Client | Company> {
  user: Who;
  jwt: string;
}

export const handleApiResponse = async (response: AxiosResponse) => {
  if (response.status >= 400)
    throw new FetchError(response, `The request is rejected with status code ${response.status}`);

  if (response.data?.jwt) localStorage.setItem('accessToken', response.data.jwt);
  return response.data;
};

export const getUserProfile = async (): Promise<{ user: Client | Company }> => {
  return axiosInstance.get('/api/me').then(handleApiResponse);
};

export const login = <Who extends Client | Company>(
  data: LoginCredentials,
): Promise<AuthResponse<Who>> => {
  return axiosInstance.post('/api/login/' + data.who, data).then(handleApiResponse);
};

export const register = <Who extends Client | Company>(
  data: RegisterCredentials,
): Promise<AuthResponse<Who>> => {
  return axiosInstance.post('/api/register/' + data.who, data).then(handleApiResponse);
};

export const logout = (): void => {
  localStorage.removeItem('accessToken');
};
