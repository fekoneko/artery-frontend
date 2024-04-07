import { Link } from 'react-router-dom';
import LoginForm from '../components/Forms/UserLoginForm';

const LoginPage = () => {
  return (
    <div className="bg-slate-800">
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  );
};

export default LoginPage;
