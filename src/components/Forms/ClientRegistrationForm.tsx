import { useCallback } from 'react';
import { useRegister } from '../../lib/auth';
import { emailRegExp } from '../../lib/validation';
import Form, { FormFieldInfo } from './Form';
import { SubmitHandler } from 'react-hook-form';

export interface FormFields {
  email: string;
  password: string;
  confirmation: string;
  name: string;
  surname: string;
  patronymic?: string;
  city: string;
  phone: string;
  // image?: string;
}

const requiredMessage = 'Это обязательное поле';

const formFieldData: FormFieldInfo<FormFields>[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Электронная почта',
    options: {
      required: requiredMessage,
      pattern: { value: emailRegExp, message: 'Введён некорректный адрес' },
    },
  },
  {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    options: { required: requiredMessage },
  },
  {
    name: 'confirmation',
    type: 'password',
    label: 'Повторите пароль',
    options: { required: requiredMessage },
  },
  {
    name: 'name',
    type: 'text',
    label: 'Имя',
    options: { required: requiredMessage },
  },
  {
    name: 'surname',
    type: 'text',
    label: 'Фамилия',
    options: { required: requiredMessage },
  },
  {
    name: 'patronymic',
    type: 'text',
    label: 'Отчество',
  },
  {
    name: 'city',
    type: 'select',
    label: 'Ваш город',
    options: { required: requiredMessage },
    getOptions: (search) =>
      new Promise((resolve) => resolve(search ? [{ value: search, label: search }] : [])),
    // TODO: Put an actual api fetch here
  },
  {
    name: 'phone',
    type: 'phone',
    label: 'Номер телефона',
    options: { required: requiredMessage },
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
