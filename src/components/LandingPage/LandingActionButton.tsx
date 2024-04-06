import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const LandingActionButton = (
  buttonProps: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => {
  return (
    <button
      {...buttonProps}
      className={
        'rounded-xl border-2 border-emerald-400 bg-no-repeat px-24 py-3 text-xl text-emerald-400 transition-[background-position,color,shadow,margin] [background-image:linear-gradient(45deg,#6ced93,#4ea1e1_30%,transparent_60%)] [background-position:-42rem] [background-size:500%] [transition-duration:0.4s] hover:-mt-1 hover:mb-1 hover:text-white hover:shadow-xl hover:[background-position:0] ' +
          buttonProps.className ?? ''
      }
    />
  );
};
export default LandingActionButton;
