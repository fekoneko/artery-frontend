import { configureAuth } from 'react-query-auth';
import { getUserProfile, register, login, AuthResponse, logout, FetchError } from './api';
import { Client, Company } from '../@types/global';

export type LoginCredentials = {
  email: string;
  password: string;
  who: 'client' | 'company';
};

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
  who: 'client' | 'company';
};

const handleUserResponse = async <Who extends Client | Company>(data: AuthResponse<Who>) => {
  const { jwt, user } = data;
  window.localStorage.setItem('accessToken', JSON.stringify(jwt));
  return user;
};

const userFn = async () => {
  const { user } = await getUserProfile();
  return user;
};

const loginFn = async (data: LoginCredentials) => {
  const response = await login(data);
  const user = await handleUserResponse(response);
  return user;
};

const registerFn = async (data: RegisterCredentials) => {
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
  LoginCredentials,
  RegisterCredentials
>({
  userFn,
  loginFn,
  registerFn,
  logoutFn,
});

export const isClient = (user: Client | Company): user is Client => user.who === 'client';
export const isCompany = (user: Client | Company): user is Company => user.who === 'company';
