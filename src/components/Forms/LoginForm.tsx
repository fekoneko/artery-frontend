import { useCallback } from 'react';
import { useLogin } from '../../lib/auth';
import { emailRegExp } from '../../lib/validation';
import Form, { FormFieldInfo } from './Form';
import { SubmitHandler } from 'react-hook-form';

export interface FormFields {
  email: string;
  password: string;
}

const formFieldData: FormFieldInfo<FormFields>[] = [
  {
    name: 'email',
    type: 'text',
    label: 'Email',
    options: {
      required: 'Email is required',
      pattern: { value: emailRegExp, message: 'Enter valid email' },
    },
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    options: { required: 'Password is required' },
  },
];

interface LoginFormProps {
  who: 'client' | 'company';
}
const LoginForm = ({ who }: LoginFormProps) => {
  const login = useLogin();

  const onSubmit = useCallback<SubmitHandler<FormFields>>(
    (formData) => {
      login.mutate({ email: formData.email, password: formData.password, who });
    },
    [login, who],
  );

  return <Form formFieldData={formFieldData} submitTitle="Войти" onSubmit={onSubmit} />;
};
export default LoginForm;
