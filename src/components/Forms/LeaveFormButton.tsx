import { useNavigate } from 'react-router-dom';

const LeaveFormButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="absolute left-6 top-4 flex size-12 items-center justify-center rounded-full border-none bg-slate-700 text-2xl hover:bg-slate-600"
    >
      ←
    </button>
  );
};
export default LeaveFormButton;
