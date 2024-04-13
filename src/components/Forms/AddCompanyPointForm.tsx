import { useUser } from '../../lib/auth';
import Form, { FormFieldInfo } from './Form';
import { addCompanyPoint, getAllPoints } from '../../lib/api';
import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export interface FormFields {
  point: string;
  isStorage: boolean;
}

const formFieldData: FormFieldInfo<FormFields>[] = [
  {
    name: 'point',
    type: 'select',
    label: 'Выберите город',
    options: { required: 'Это обязательное поле' },
    getOptions: (search) =>
      getAllPoints().then((points) =>
        (search ? points.filter((point) => point.name.includes(search)) : points).map((point) => ({
          value: point.id,
          label: point.name,
        })),
      ),
  },
  {
    name: 'isStorage',
    type: 'checkbox',
    label: 'Сделать складом',
  },
];

const AddCompanyPointForm = () => {
  const user = useUser();
  const queryClient = useQueryClient();

  const onSubmit = useCallback(
    (data: FormFields) => {
      if (!user.data) return;
      addCompanyPoint(user.data.id, +data.point, data.isStorage);
      setTimeout(() => queryClient.invalidateQueries({ queryKey: ['companyPoints'] }), 100);
    },
    [user.data, queryClient],
  );

  if (!user.data) return null;

  return <Form formFieldData={formFieldData} submitTitle="Добавить пункт" onSubmit={onSubmit} />;
};
export default AddCompanyPointForm;
