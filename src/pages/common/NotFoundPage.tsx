import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main className="flex size-full flex-col items-center justify-center">
      <h1 className="-my-10 text-[8rem] font-bold">404</h1>
      <h2 className="mb-4 text-[2rem] font-bold">Страница не найдена</h2>
      <Link to="/">Перейти на главную</Link>
    </main>
  );
};

export default NotFoundPage;
