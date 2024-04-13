import Form, { FormFieldInfo } from './Form';
import { changeClientCity, getAllPoints } from '../../lib/api';
import { useUser } from '../../lib/auth';
import { useQueryClient } from '@tanstack/react-query';

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

const ChangeOrderDestinationForm = () => {
  const user = useUser();
  const queryClient = useQueryClient();

  if (!user.data) return null;

  return (
    <Form
      formFieldData={formFieldData}
      submitTitle="Сменить город доставки"
      onSubmit={(data) => {
        changeClientCity(user.data.id, +data.city);
        queryClient.invalidateQueries();
      }}
    />
  );
};
export default ChangeOrderDestinationForm;
