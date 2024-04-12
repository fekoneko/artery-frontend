import { useNavigate } from 'react-router-dom';
import Form, { FormFieldInfo } from './Form';

interface FormFields {
  city: string;
}

const formFieldData: FormFieldInfo<FormFields>[] = [
  {
    name: 'city',
    type: 'select',
    label: 'Ваш город',
    options: { required: 'Choose the city' },
    getOptions: (search) =>
      new Promise((resolve) => resolve(search ? [{ value: 1, label: search }] : [])),
    // TODO: Put an actual api fetch here
  },
];

const OrderForm = () => {
  const navigate = useNavigate();

  return (
    <Form
      formFieldData={formFieldData}
      submitTitle="Confirm order"
      onSubmit={() => navigate('/payment')}
    />
  );
};
export default OrderForm;
