import { FormFieldInfo } from '../Forms/Form';

interface FormFields {
  city: string
}

export const formFieldData: FormFieldInfo<FormFields>[] = [
  {
    name: 'city',
    type: 'select',
    label: 'Ваш город',
    options: { required: 'Choose the city' },
    getOptions: (search) =>
      new Promise((resolve) => resolve(search ? [{ value: 1, label: search }] : [])),
    // TODO: Put an actual api fetch here
  },
]
