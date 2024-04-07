import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div>404 Not Found</div>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFoundPage;
