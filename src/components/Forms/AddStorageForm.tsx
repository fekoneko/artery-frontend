import { useUser } from '../../lib/auth';
import Form, { FormFieldInfo } from './Form';
import { addCompanyPoint, getAllPoints } from '../../lib/api';
import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export interface FormFields {
  point: string;
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
];

const AddStorageForm = () => {
  const user = useUser();
  const queryClient = useQueryClient();

  const onSubmit = useCallback(
    (data: FormFields) => {
      if (!user.data) return;
      addCompanyPoint(user.data.id, +data.point);
      setTimeout(() => queryClient.invalidateQueries({ queryKey: ['companyPoints'] }), 100);
    },
    [user.data, queryClient],
  );

  if (!user.data) return null;

  return <Form formFieldData={formFieldData} submitTitle="Добавить склад" onSubmit={onSubmit} />;
};
export default AddStorageForm;
