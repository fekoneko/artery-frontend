import { configureAuth } from 'react-query-auth';
import { getUserProfile, register, login, AuthResponse, logout, FetchError } from './api';
import { Client, Company } from '../@types/global';

const handleUserResponse = async <Who extends Client | Company>(data: AuthResponse<Who>) => {
  const { jwt, user } = data;
  if (jwt) localStorage.setItem('accessToken', JSON.stringify(jwt));
  return user;
};

const userFn = async () => {
  const { user } = await getUserProfile();
  return user;
};

const loginFn = async (data: [formData: FormData, who: 'client' | 'company']) => {
  const response = await login(data);
  const user = await handleUserResponse(response);
  return user;
};

const registerFn = async (data: [formData: FormData, who: 'client' | 'company']) => {
  const response = await register(data);
  const user = await handleUserResponse(response);
  return user;
};

const logoutFn = async () => {
  await logout();
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth<
  Client | Company,
  (Error & Partial<FetchError>) | null,
  [formData: FormData, who: 'client' | 'company'],
  [formData: FormData, who: 'client' | 'company']
>({
  userFn,
  loginFn,
  registerFn,
  logoutFn,
});

export const isClient = (user: Client | Company): user is Client => user.who === 'client';
export const isCompany = (user: Client | Company): user is Company => user.who === 'company';
