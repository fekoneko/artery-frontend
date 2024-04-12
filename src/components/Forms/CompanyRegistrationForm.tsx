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
  description?: string;
  phone: string;
  image?: string;
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
    label: 'Название организации',
    options: { required: requiredMessage },
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Описание',
  },
  {
    name: 'phone',
    type: 'phone',
    label: 'Номер телефона',
    options: { required: requiredMessage },
  },
  {
    name: 'image',
    type: 'url',
    label: 'Ссылка на аватар',
  },
];

const CompanyRegistrationForm = () => {
  const register = useRegister();

  const onSubmit = useCallback<SubmitHandler<FormFields>>(
    (data) => {
      const formData = new FormData();
      formData.append('who', 'client');
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('name', data.name);
      if (data.description) formData.append('description', data.description);
      formData.append('phone', data.phone);
      if (data.image) formData.append('image', data.image);

      register.mutate([formData, 'company']);
    },
    [register],
  );

  return (
    <Form formFieldData={formFieldData} submitTitle="Зарегистрироваться" onSubmit={onSubmit} />
  );
};
export default CompanyRegistrationForm;
