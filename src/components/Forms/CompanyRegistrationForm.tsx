import { emailRegExp } from '../../lib/validation';
import Form, { FormFieldInfo } from './Form';

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
    label: 'Confirm the password',
    options: { required: 'Password confirmation is required' },
  },
];

const CompanyRegistrationForm = () => {
  return (
    <Form
      formFieldData={formFieldData}
      submitTitle="Зарегистрироваться"
      onSubmit={(data) => console.log(data)}
    />
  );
};
export default CompanyRegistrationForm;
