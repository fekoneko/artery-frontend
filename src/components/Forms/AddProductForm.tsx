import Form, { FormFieldInfo } from './Form';

interface FormFields {
  name: string;
  description: string;
  size: number;
  weight: number;
  price: number;
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
    type: 'text',
    label: 'Описание товара',
    options: { required: requiredMessage },
  },
  {
    name: 'size',
    type: 'text',
    label: 'Размер товара',
    options: { required: requiredMessage },
  },
  {
    name: 'weight',
    type: 'text',
    label: 'Вес товара',
    options: { required: requiredMessage },
  },
  {
    name: 'price',
    type: 'text',
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
  return (
    <div>
      <Form formFieldData={formFieldData} submitTitle="Добавить товар" />
    </div>
  );
};

export default AddProductForm;
