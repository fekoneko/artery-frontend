import { configureAuth } from 'react-query-auth';
import { register, login, logout, FetchError } from './api';
import { Client, Company } from '../@types/global';

// import { getUserProfile } from './mockApi'; // TODO:
import { getUserProfile } from './api';

const userFn = async () => {
  const user = await getUserProfile();
  return user;
};

const loginFn = async (data: [formData: FormData, who: 'client' | 'company']) => {
  await login(data);
  const user = await new Promise<Promise<Client | Company>>((resolve) =>
    setTimeout(() => resolve(getUserProfile()), 100),
  );
  return user;
};

const registerFn = async (data: [formData: FormData, who: 'client' | 'company']) => {
  await register(data);
  await new Promise<Promise<void>>((resolve) => setTimeout(() => resolve(login(data)), 100));
  const user = await new Promise<Promise<Client | Company>>((resolve) =>
    setTimeout(() => resolve(getUserProfile()), 100),
  );
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

export const isClient = (userData: Client | Company | undefined): userData is Client =>
  userData?.who === 'client';
export const isCompany = (userData: Client | Company | undefined): userData is Company =>
  userData?.who === 'company';
