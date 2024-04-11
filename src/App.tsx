import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { useUser } from './lib/auth';
import LoginPage from './pages/auth/LoginPage';
import RegistrationPage from './pages/auth/RegistrationPage';
import LoadingPage from './pages/LoadingPage';
import ClientRoutine from './pages/client/ClientRoutine';
import CompanyRoutine from './pages/company/CompanyRoutine';

const App = () => {
  const user = useUser({ retry: false });

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-slate-800 text-slate-400">
      <Routes>
        {user.isLoading && (
          <Route>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<LoadingPage />} />
          </Route>
        )}

        {user.isError && (
          <Route>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        )}

        {user.isSuccess && (
          <Route
            path="*"
            element={user.data.who === 'client' ? <ClientRoutine /> : <CompanyRoutine />}
          />
        )}
      </Routes>
    </div>
  );
};
export default App;
