import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserRegistrationForm from '../components/Forms/UserRegistrationForm';
import CompanyRegistrationForm from '../components/Forms/CompanyRegistrationForm';

const RegistrationPage = () => {
  const [registrationMode, setRegistrationMode] = useState<'user' | 'company'>('user');

  return (
    <div className="bg-slate-800">
      <button onClick={() => setRegistrationMode((prev) => (prev === 'user' ? 'company' : 'user'))}>
        {registrationMode}
      </button>
      {registrationMode === 'user' ? <UserRegistrationForm /> : <CompanyRegistrationForm />}
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default RegistrationPage;
