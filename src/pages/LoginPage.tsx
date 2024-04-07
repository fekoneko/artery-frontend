import { Link } from 'react-router-dom';
import LoginForm from '../components/Forms/UserLoginForm';
import LeaveFormButton from '../components/Forms/LeaveFormButton';

const LoginPage = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <LeaveFormButton />

      <div className="flex min-w-[50%] max-w-[80%] flex-col gap-4 rounded-lg border-2 border-slate-200 p-4 shadow-xl">
        <h1 className="text-center text-2xl font-bold text-white">Вход</h1>
        <LoginForm />
        <p className="rounded-lg text-center">
          Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
