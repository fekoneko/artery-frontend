import { FieldValues, Path, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import { useId } from 'react';

export interface FormFieldInfo<FormFields extends FieldValues> {
  name: Path<FormFields>;
  type: React.HTMLInputTypeAttribute;
  label: string;
  options?: RegisterOptions<FormFields>;
}

interface FormProps<FormFields extends FieldValues> {
  formFieldData: FormFieldInfo<FormFields>[];
  submitTitle?: string;
  onSubmit?: SubmitHandler<FormFields>;
}
const Form = <FormFields extends FieldValues>({
  formFieldData,
  submitTitle,
  onSubmit,
}: FormProps<FormFields>) => {
  const formId = useId();
  const { register, handleSubmit, reset } = useForm<FormFields>({ mode: 'onChange' });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit && onSubmit(data);
        reset();
      })}
      className="flex flex-col gap-2"
    >
      {formFieldData.map((fieldInfo) => (
        <div key={fieldInfo.name} className="grid grid-cols-[1fr_3fr] items-center gap-2">
          <label htmlFor={`${formId}-${fieldInfo.name}`} className="w-min">
            {fieldInfo.label}
          </label>
          <input
            id={`${formId}-${fieldInfo.name}`}
            type={fieldInfo.type}
            {...register(fieldInfo.name, fieldInfo.options)}
          />
        </div>
      ))}
      <button type="submit">{submitTitle}</button>
    </form>
  );
};
export default Form;
