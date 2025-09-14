import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Error!</h1>
      <h2>Sorry!</h2>
      <p>The page is not Found.</p>
      <Link to="/">Back to the HomePage...</Link>
    </div>
  );
};

export default NotFound;
