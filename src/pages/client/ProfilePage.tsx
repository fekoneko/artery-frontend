import { useNavigate } from 'react-router-dom';
import { useUser } from '../../lib/auth';

interface Button {
  title: string;
  link: string;
}
const buttons: Button[] = [
  { title: 'Корзина', link: '/cart' },
  { title: 'Мои заказы', link: '/orders' },
  { title: 'Пункты выдачи', link: '/pickpoints' },
];

const ProfilePage = () => {
  const user = useUser();
  const navigate = useNavigate();

  return (
    <main className="flex size-full justify-center px-[12%] py-6">
      <div className="flex w-2/3 max-w-[30rem] flex-col gap-4">
        <section className="flex items-center gap-6 rounded-xl border-2 border-emerald-500 p-3">
          <div className="aspect-square w-24 overflow-hidden rounded-lg border-2 border-slate-600">
            <img className="w-full" />
          </div>
          <h1 className="text-3xl font-bold">{user.data?.name}</h1>
        </section>

        <section className="grow">
          <ul className="flex size-full flex-col gap-4">
            {buttons.map((button) => (
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
