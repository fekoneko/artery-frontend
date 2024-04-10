import { FieldValues, Path, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import { useId } from 'react';
import FormSelect, { GetOptionsFunction } from './FormSelect';

export interface FormFieldInfo<FormFields extends FieldValues> {
  name: Path<FormFields>;
  type: React.HTMLInputTypeAttribute | 'select' | 'textarea';
  label: string;
  options?: RegisterOptions<FormFields>;
  getOptions?: GetOptionsFunction;
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
  const { register, handleSubmit, reset, control } = useForm<FormFields>({ mode: 'onChange' });

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
          <label htmlFor={`${formId}-${fieldInfo.name}`} className="w-min leading-5">
            {fieldInfo.label}
            {fieldInfo.options?.required !== undefined && (
              <span className="px-0.5 text-rose-400">*</span>
            )}
            :
          </label>

          {fieldInfo.type === 'select' ? (
            <FormSelect
              control={control}
              id={`${formId}-${fieldInfo.name}`}
              name={fieldInfo.name}
              getOptions={fieldInfo.getOptions}
            />
          ) : fieldInfo.type === 'textarea' ? (
            <textarea
              id={`${formId}-${fieldInfo.name}`}
              className="h-28 resize-none"
              {...register(fieldInfo.name, fieldInfo.options)}
            />
          ) : (
            <input
              id={`${formId}-${fieldInfo.name}`}
              type={fieldInfo.type}
              {...register(fieldInfo.name, fieldInfo.options)}
            />
          )}
        </div>
      ))}
      <button type="submit">{submitTitle}</button>
    </form>
  );
};
export default Form;
