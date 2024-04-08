import { PropsWithChildren } from 'react';
import Header from '../../components/layout/Header';
import Navigation from '../../components/layout/Navigation';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Navigation />
    </>
  );
};
export default MainLayout;
