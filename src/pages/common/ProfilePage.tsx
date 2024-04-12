import { Navigate, useNavigate } from 'react-router-dom';
import { isClient, isCompany, useUser } from '../../lib/auth';

interface Button {
  title: string;
  link: string;
}
const clientButtons: Button[] = [
  { title: 'Корзина', link: '/cart' },
  { title: 'Мои заказы', link: '/orders' },
  { title: 'Пункты выдачи', link: '/pickpoints' },
];

const companyButtons: Button[] = [];

const ProfilePage = () => {
  const user = useUser({ retry: 1, retryDelay: 100 });
  const navigate = useNavigate();

  if (!user.data) return <Navigate to="/" />;

  return (
    <main className="flex size-full justify-center px-[12%] py-6">
      <div className="flex w-2/3 max-w-[30rem] flex-col gap-4">
        <section className="flex items-center gap-6 rounded-xl border-2 border-emerald-500 p-3">
          <div className="aspect-square w-24 overflow-hidden rounded-lg border-2 border-slate-600">
            <img className="w-full" />
          </div>

          <div>
            {isClient(user.data) && (
              <h1 className="text-3xl font-bold">
                {user.data.name} {user.data.surname} {user.data.patronymic}
              </h1>
            )}
            {isCompany(user.data) && <h1 className="text-3xl font-bold">{user.data.name}</h1>}
            <p>{isClient(user.data) ? 'Покупатель' : 'Организация'}</p>
          </div>
        </section>

        <section className="grow">
          <ul className="flex size-full flex-col gap-4">
            {(isClient(user.data) ? clientButtons : companyButtons).map((button) => (
              <li key={button.title}>
                <button onClick={() => navigate(button.link)} className="size-full rounded-xl py-3">
                  {button.title}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
export default ProfilePage;
