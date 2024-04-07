import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserRegistrationForm from '../components/Forms/UserRegistrationForm';
import CompanyRegistrationForm from '../components/Forms/CompanyRegistrationForm';
import LeaveFormButton from '../components/Forms/LeaveFormButton';

const RegistrationPage = () => {
  const [registrationMode, setRegistrationMode] = useState<'user' | 'company'>('user');

  return (
    <div className="flex size-full items-center justify-center">
      <LeaveFormButton />

      <div className="flex min-w-[50%] max-w-[80%] flex-col gap-4 rounded-lg border-2 border-slate-200 p-4 shadow-xl">
        <h1 className="text-center text-2xl font-bold text-white">Регистрация</h1>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setRegistrationMode('user')}
            className={
              registrationMode === 'user' ? 'bg-slate-400 font-semibold text-slate-800' : ''
            }
          >
            Я – клиент
          </button>
          <button
            onClick={() => setRegistrationMode('company')}
            className={
              registrationMode === 'company' ? 'bg-slate-400 font-semibold text-slate-800' : ''
            }
          >
            Я – огранизация
          </button>
        </div>

        {registrationMode === 'user' ? <UserRegistrationForm /> : <CompanyRegistrationForm />}
        <p className="rounded-lg text-center">
          Уже зарегистрированы? <Link to="/login">Войдите</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
