import Header from '../../components/layout/Header';
import Navigation, { NavigationTab } from '../../components/layout/Navigation';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
  navigationTabs: NavigationTab[];
}
const MainLayout = ({ navigationTabs }: MainLayoutProps) => {
  return (
    <div className="flex size-full flex-col">
      <Header />
      <div className="grow overflow-hidden">
        <Outlet />
      </div>
      <Navigation navigationTabs={navigationTabs} />
    </div>
  );
};
export default MainLayout;
