import { useCallback } from 'react';
import { useRegister } from '../../lib/auth';
import { emailRegExp } from '../../lib/validation';
import Form, { FormFieldInfo } from './Form';
import { SubmitHandler } from 'react-hook-form';
import { getAllPoints } from '../../lib/api';

export interface FormFields {
  email: string;
  password: string;
  confirmation: string;
  name: string;
  surname: string;
  patronymic?: string;
  city: string;
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
      getAllPoints().then((points) =>
        (search ? points.filter((point) => point.name.includes(search)) : points).map((point) => ({
          value: point.id,
          label: point.name,
        })),
      ),
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

const ClientRegistrationForm = () => {
  const register = useRegister();

  const onSubmit = useCallback<SubmitHandler<FormFields>>(
    (data) => {
      const formData = new FormData();
      formData.append('who', 'client');
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('name', data.name);
      formData.append('surname', data.surname);
      if (data.patronymic) formData.append('patronymic', data.patronymic);
      formData.append('city', data.city);
      formData.append('phone', data.phone);
      if (data.image) formData.append('image', data.image);

      register.mutate([formData, 'client']);
    },
    [register],
  );

  return (
    <Form formFieldData={formFieldData} submitTitle="Зарегистрироваться" onSubmit={onSubmit} />
  );
};
export default ClientRegistrationForm;
