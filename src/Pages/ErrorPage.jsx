import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-7xl font-bold text-indigo-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 text-center">
        The page you are looking for does not exist or was moved.
      </p>

      <Link
        to="/"
        className="mt-6 flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
      >
        <FaHome /> Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
