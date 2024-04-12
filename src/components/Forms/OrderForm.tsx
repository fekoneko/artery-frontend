import { useNavigate } from 'react-router-dom';
import Form, { FormFieldInfo } from './Form';
import { getAllPoints } from '../../lib/api';

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
      getAllPoints().then((points) =>
        (search ? points.filter((point) => point.name.includes(search)) : points).map((point) => ({
          value: point.id,
          label: point.name,
        })),
      ),
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
