import { PropsWithChildren } from 'react';

const LandingTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative h-36 w-full">
      <h1 className="bg-gradient-cyan absolute left-0 top-3 w-full bg-clip-text text-center text-[6rem] font-bold opacity-40 blur-md">
        {children}
      </h1>

      <h1
        role="banner"
        className="bg-gradient-cyan absolute left-0 top-0 w-full bg-clip-text text-center text-[6rem] font-bold"
      >
        {children}
      </h1>
    </div>
  );
};
export default LandingTitle;
