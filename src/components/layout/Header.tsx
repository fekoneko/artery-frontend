import { Link } from 'react-router-dom';
import { useLogout, useUser } from '../../lib/auth';

const Header = () => {
  const user = useUser({ retry: 1, retryDelay: 100 });
  const logout = useLogout();

  return (
    <header className="bg-gradient-green flex items-center justify-between px-[12%] py-2 text-white shadow-lg">
      <h1 className="text-3xl font-bold" role="banner">
        <Link to="/" className="text-inherit hover:no-underline">
          Артерия
        </Link>
      </h1>
      <button className="size-10 border-white/50" onClick={() => logout.mutate({})}>
        {user.data?.name[0]}
      </button>
    </header>
  );
};
export default Header;
