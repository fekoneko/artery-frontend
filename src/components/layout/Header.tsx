import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-green flex items-center justify-between px-[12%] py-2 text-white shadow-lg">
      <h1 className="text-3xl font-bold" role="banner">
        <Link to="/" className="text-inherit hover:no-underline">
          Артерия
        </Link>
      </h1>
      <button className="size-10 border-white/50"></button>
    </header>
  );
};
export default Header;
