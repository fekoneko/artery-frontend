import { useUser } from '../../lib/auth';
import Form, { FormFieldInfo } from './Form';
import { addCompanyRoad } from '../../lib/api';
import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { TransportType } from '../../@types/global';

export interface FormFields {
  startPoint: string;
  endPoint: string;
  transportType: TransportType;
  time: string;
  cost: string;
  distance: string;
}

const formFieldData: FormFieldInfo<FormFields>[] = [
  {
    name: 'startPoint',
    type: 'select',
    label: 'Начальный пункт',
    options: { required: 'Это обязательное поле' },
    getOptions: (search) =>
      new Promise((resolve) => resolve(search ? [{ value: 1, label: search }] : [])),
    // TODO: Put an actual api fetch here
  },
  {
    name: 'endPoint',
    type: 'select',
    label: 'Конечный пункт',
    options: { required: 'Это обязательное поле' },
    getOptions: (search) =>
      new Promise((resolve) => resolve(search ? [{ value: 1, label: search }] : [])),
    // TODO: Put an actual api fetch here
  },
  {
    name: 'transportType',
    type: 'select',
    label: 'Тип транспорта',
    options: { required: 'Это обязательное поле' },
    getOptions: () =>
      new Promise((resolve) =>
        resolve(
          ['car', 'railway', 'air', 'sea', 'river'].map((type) => ({ value: type, label: type })),
        ),
      ),
  },
  {
    name: 'time',
    type: 'time',
    label: 'Время в пути',
    options: { required: 'Это обязательное поле' },
  },
  {
    name: 'cost',
    type: 'number',
    label: 'Стоимость',
    options: { required: 'Это обязательное поле' },
  },
  {
    name: 'distance',
    type: 'number',
    label: 'Расстояние',
    options: { required: 'Это обязательное поле' },
  },
];

const AddRoadForm = () => {
  const user = useUser();
  const queryClient = useQueryClient();

  const onSubmit = useCallback(
    (data: FormFields) => {
      if (!user.data) return;
      addCompanyRoad(user.data.id, {
        id: 0,
        startId: +data.startPoint,
        endId: +data.endPoint,
        transportType: data.transportType,
        time: data.time,
        cost: +data.cost,
        distance: +data.distance,
      });
      setTimeout(() => queryClient.invalidateQueries({ queryKey: ['companyRoads'] }), 100);
    },
    [user.data, queryClient],
  );

  if (!user.data) return null;

  return <Form formFieldData={formFieldData} submitTitle="Добавить путь" onSubmit={onSubmit} />;
};
export default AddRoadForm;
