import DashboardMap from '../../components/Dashboard/DashboardMapSection';
import DashboardProducts from '../../components/Dashboard/DashboardProducts';
import { isCompany, useUser } from '../../lib/auth';

const DashboardPage = () => {
  const user = useUser({ retry: 1, retryDelay: 100 });

  if (!isCompany(user.data)) return null;

  return (
    <main className="flex size-full flex-col gap-4 overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
      <h1 className="py-4 text-3xl font-bold">Добро пожаловать, {user.data?.name}</h1>

      <section>
        <h1>Ваши товары</h1>
        <DashboardProducts />
      </section>

      <section>
        <h2>Склады и транзиты</h2>
        <DashboardMap />
      </section>
    </main>
  );
};
export default DashboardPage;
