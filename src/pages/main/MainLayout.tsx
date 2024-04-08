import Header from '../../components/layout/Header';
import Navigation from '../../components/layout/Navigation';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
};
export default MainLayout;
