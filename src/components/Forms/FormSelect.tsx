import { useCallback, useEffect, useRef, useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import ReactSelect, { GroupBase, OptionsOrGroups } from 'react-select';

export type GetOptionsFunction = (
  searchValue?: string,
  abortSignal?: AbortSignal,
) => Promise<OptionsOrGroups<any, GroupBase<string>>>;

interface FormSelectProps<TFieldValues extends FieldValues = FieldValues, TContext = any> {
  control: Control<TFieldValues, TContext>;
  id?: string;
  name: Path<TFieldValues>;
  getOptions?: GetOptionsFunction;
  className?: string;
}
const FormSelect = <TFieldValues extends FieldValues = FieldValues, TContext = any>({
  control,
  id,
  name,
  getOptions,
  className,
}: FormSelectProps<TFieldValues, TContext>) => {
  const [selectOptions, setSelectOptions] = useState<OptionsOrGroups<any, GroupBase<string>>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController>();

  const updateOptions = useCallback(
    (searchValue?: string) => {
      if (!getOptions) return;

      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);
      getOptions(searchValue, abortControllerRef.current?.signal).then((newOptions) => {
        setSelectOptions(newOptions);
        setIsLoading(false);
      });
    },
    [getOptions],
  );

  useEffect(() => {
    updateOptions();
  }, [updateOptions]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ref } }) => (
        <ReactSelect
          className={`focus:outline-none [&_*]:[color:theme('colors.slate.400')!important] [&_[class*="control"]]:rounded-lg [&_[class*="control"]]:border-2 [&_[class*="control"]]:border-slate-400 [&_[class*="control"]]:bg-transparent [&_[class*="control"]]:hover:border-slate-400 ${className}`}
          id={id}
          options={selectOptions}
          isLoading={isLoading}
          onChange={(newValue) => {
            onChange({ target: { value: newValue.value } });
          }}
          onInputChange={updateOptions}
          filterOption={() => true}
          ref={ref}
        />
      )}
    />
  );
};
export default FormSelect;
