import { configureAuth } from 'react-query-auth';
import { getUserProfile, register, login, AuthResponse, logout, User, FetchError } from './mockApi';
// TODO change back!!!

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
  isCompany: boolean;
};

async function handleUserResponse(data: AuthResponse) {
  const { jwt, user } = data;
  window.localStorage.setItem('accessToken', JSON.stringify(jwt));
  return user;
}

async function userFn() {
  const { user } = await getUserProfile();
  return user;
}

async function loginFn(data: LoginCredentials) {
  const response = await login(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  const response = await register(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  await logout();
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth<
  User,
  (Error & Partial<FetchError>) | null,
  LoginCredentials,
  RegisterCredentials
>({
  userFn,
  loginFn,
  registerFn,
  logoutFn,
});
