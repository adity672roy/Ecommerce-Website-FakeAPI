import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-4">404</h1>
      <p className="text-xl font-semibold mb-2">Oops! Page Not Found 😔</p>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
