import { emailRegExp } from '../../lib/validation';
import Form, { FormFieldInfo } from './Form';

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

const LoginForm = () => {
  return (
    <Form
      formFieldData={formFieldData}
      submitTitle="Войти"
      onSubmit={(data) => console.log(data)}
    />
  );
};
export default LoginForm;
