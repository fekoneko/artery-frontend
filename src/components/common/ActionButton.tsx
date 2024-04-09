import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const ActionButton = (
  buttonProps: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => {
  return (
    <button
      {...buttonProps}
      className={
        'bg-right bg-no-repeat transition-[background-position,color,shadow,margin] duration-300 [background-image:linear-gradient(45deg,#6ced93,#4ea1e1_30%,transparent_60%)] [background-size:500%] hover:-mt-1 hover:mb-1 hover:bg-left hover:text-white hover:shadow-xl ' +
        (buttonProps.className ??
          'rounded-xl border-emerald-400 px-24 py-3 text-xl text-emerald-400 hover:bg-transparent')
      }
    />
  );
};
export default ActionButton;
