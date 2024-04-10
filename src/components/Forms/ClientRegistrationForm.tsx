import { useCallback } from 'react';
import { useRegister } from '../../lib/auth';
import { emailRegExp } from '../../lib/validation';
import Form, { FormFieldInfo } from './Form';
import { SubmitHandler } from 'react-hook-form';

export interface FormFields {
  email: string;
  name: string;
  password: string;
  confirmation: string;
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
  {
    name: 'confirmation',
    type: 'password',
    label: 'Confirm password',
    options: { required: 'Password confirmation is required' },
  },
];

const ClientRegistrationForm = () => {
  const register = useRegister();

  const onSubmit = useCallback<SubmitHandler<FormFields>>(
    (formData) => {
      register.mutate({
        email: formData.email,
        name: formData.name,
        password: formData.password,
        who: 'client',
      });
    },
    [register],
  );

  return (
    <Form formFieldData={formFieldData} submitTitle="Зарегистрироваться" onSubmit={onSubmit} />
  );
};
export default ClientRegistrationForm;
