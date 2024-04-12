import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../common/MainLayout';
import NotFoundPage from '../common/NotFoundPage';
import { NavigationTab } from '../../components/layout/Navigation';
import DashboardPage from './DashboardPage';
import ProfilePage from '../common/ProfilePage';
import ProductPage from '../common/ProductPage';

const navigationTabs: NavigationTab[] = [
  { title: 'Кабинет продавца', link: '/dashboard' },
  { title: 'Профиль', link: '/profile' },
];

const CompanyRoutine = () => {
  return (
    <Routes>
      <Route element={<MainLayout navigationTabs={navigationTabs} />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Navigate to="/dashboard" />} />
        <Route path="/register" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default CompanyRoutine;
