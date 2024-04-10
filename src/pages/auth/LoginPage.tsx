import { Link } from 'react-router-dom';
import LoginForm from '../../components/Forms/LoginForm';
import LeaveFormButton from '../../components/Forms/LeaveFormButton';
import { useState } from 'react';
import ChoiceButtons, { Choice } from '../../components/Forms/ChoiceButtons';

const whoChoices: Choice<'client' | 'company'>[] = [
  { label: 'Я – клиент', value: 'client' },
  { label: 'Я – огранизация', value: 'company' },
];

const LoginPage = () => {
  const [who, setWho] = useState<'client' | 'company'>('client');
  return (
    <main className="flex size-full items-center justify-center">
      <LeaveFormButton />

      <div className="flex min-w-[50%] max-w-[80%] flex-col gap-4 rounded-lg border-2 border-slate-200 p-4 shadow-xl">
        <h1 className="text-center text-2xl font-bold text-white">Вход</h1>
        <ChoiceButtons state={who} setState={setWho} choices={whoChoices} />
        <LoginForm who={who} />
        <p className="rounded-lg text-center">
          Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
