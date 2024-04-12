import { useNavigate } from 'react-router-dom';
import CompanyMap from '../../components/Map/CompanyMap';
import CompanyProducts from '../../components/Dashboard/ComapnyProducts';
import { isCompany, useUser } from '../../lib/auth';

const DashboardPage = () => {
  const user = useUser({ retry: 1, retryDelay: 100 });
  const navigate = useNavigate();

  if (!isCompany(user.data)) return null;

  return (
    <main className="flex size-full flex-col gap-4 overflow-x-hidden overflow-y-scroll pl-[12%] pr-[calc(12vw-0.5rem)]">
      <h1 className="py-4 text-3xl font-bold">Добро пожаловать, {user.data?.name}</h1>

      <section className="mr-[-12vw]">
        <h1>Ваши товары</h1>
        <CompanyProducts maxCount={3} />
        <div className="flex gap-2">
          <button onClick={() => navigate('/products')}>Все товары</button>
          <button onClick={() => navigate('/product/add')}>Добавить товар</button>
        </div>
      </section>

      <section>
        <h2>Склады и транзиты</h2>
        <CompanyMap companyIds={[user.data.id]} />
        <button onClick={() => navigate('/edit-map')}>Изменить / добавить</button>
      </section>
    </main>
  );
};
export default DashboardPage;
