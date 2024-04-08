declare module 'react-query-auth' {
  export { AuthProviderProps, ReactQueryAuthConfig, configureAuth };
}

interface ReactQueryAuthConfig<User, LoginCredentials, RegisterCredentials> {
  userFn: import('@tanstack/react-query').QueryFunction<
    User,
    import('@tanstack/react-query').QueryKey
  >;
  loginFn: import('@tanstack/react-query').MutationFunction<User, LoginCredentials>;
  registerFn: import('@tanstack/react-query').MutationFunction<User, RegisterCredentials>;
  logoutFn: import('@tanstack/react-query').MutationFunction<unknown, unknown>;
  userKey?: import('@tanstack/react-query').QueryKey;
}
interface AuthProviderProps {
  children: React.ReactNode;
}
declare function configureAuth<User, Error, LoginCredentials, RegisterCredentials>(
  config: ReactQueryAuthConfig<User, LoginCredentials, RegisterCredentials>,
): {
  useUser: (
    options?: Omit<
      import('@tanstack/react-query').UseQueryOptions<
        User,
        Error,
        User,
        import('@tanstack/react-query').QueryKey
      >,
      'queryKey' | 'queryFn'
    >,
  ) => import('@tanstack/react-query').UseQueryResult<User, Error>;
  useLogin: (
    options?: Omit<UseMutationOptions<User, Error, LoginCredentials>, 'mutationFn'>,
  ) => import('@tanstack/react-query').UseMutationResult<User, Error, LoginCredentials, unknown>;
  useRegister: (
    options?: Omit<UseMutationOptions<User, Error, RegisterCredentials>, 'mutationFn'>,
  ) => import('@tanstack/react-query').UseMutationResult<User, Error, RegisterCredentials, unknown>;
  useLogout: (
    options?: import('@tanstack/react-query').UseMutationOptions<unknown, Error, unknown>,
  ) => import('@tanstack/react-query').UseMutationResult<unknown, Error, unknown, unknown>;
  AuthLoader: ({
    children,
    renderLoading,
    renderUnauthenticated,
    renderError,
  }: {
    children: React.ReactNode;
    renderLoading: () => JSX.Element;
    renderUnauthenticated?: (() => JSX.Element) | undefined;
    renderError?: ((error: Error) => JSX.Element) | undefined;
  }) => JSX.Element | null;
};
