import { useCallback } from 'react';
import Form, { FormFieldInfo } from './Form';
import { addCompanyProduct } from '../../lib/api';
import { useUser } from '../../lib/auth';
import { Product } from '../../@types/global';

interface FormFields {
  name: string;
  description: string;
  size: string;
  weight: string;
  price: string;
  imagePath?: string;
}
const requiredMessage = 'Это обязательное поле';
const formFieldData: FormFieldInfo<FormFields>[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Название товара',
    options: { required: requiredMessage },
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Описание товара',
    options: { required: requiredMessage },
  },
  {
    name: 'size',
    type: 'number',
    label: 'Размер товара',
    options: { required: requiredMessage },
  },
  {
    name: 'weight',
    type: 'number',
    label: 'Вес товара',
    options: { required: requiredMessage },
  },
  {
    name: 'price',
    type: 'number',
    label: 'Цена товара',
    options: { required: requiredMessage },
  },
  {
    name: 'imagePath',
    type: 'text',
    label: 'Фотография товара',
  },
];

const AddProductForm = () => {
  const user = useUser();

  const onSubmit = useCallback(
    (data: FormFields) => {
      if (!user.data) return;
      const newProduct: Product = {
        id: 0,
        name: data.name,
        description: data.description,
        price: +data.price,
        image: data.imagePath,
        size: +data.size,
        weight: +data.weight,
        companyId: user.data.id,
      };
      addCompanyProduct(user.data.id, newProduct);
    },
    [user.data],
  );

  return (
    <div>
      <Form formFieldData={formFieldData} submitTitle="Добавить товар" onSubmit={onSubmit} />
    </div>
  );
};

export default AddProductForm;
