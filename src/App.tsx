import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingPage from './pages/LandingPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative h-dvh w-screen overflow-hidden bg-slate-800 text-slate-500">
        <LandingPage />
      </div>
    </QueryClientProvider>
  );
};
export default App;
