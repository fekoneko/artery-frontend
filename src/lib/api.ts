import { AxiosResponse } from 'axios';
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

export const handleApiResponse = async (response: AxiosResponse) => {
  if (response.status >= 400 || response.data.ok === false)
    throw new FetchError(response.data, `The request was rejected`);
  return response.data;
};

export const getUserProfile = async (): Promise<Client | Company> => {
  return axiosInstance.get('/api/me/').then(handleApiResponse);
};

export const login = (data: [formData: FormData, who: 'client' | 'company']): void => {
  const [formData, who] = data;
  axiosInstance.post('/api/login/' + who + '/', formData).then(handleApiResponse);
};

export const register = (data: [formData: FormData, who: 'client' | 'company']): void => {
  const [formData, who] = data;
  axiosInstance.post('/api/register/' + who + '/', formData).then(handleApiResponse);
};

export const logout = (): void => {
  axiosInstance.post('/api/logout/').then(handleApiResponse);
};
