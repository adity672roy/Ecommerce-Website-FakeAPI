import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

const Header = ({ onLogout, token }) => {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="w-full flex items-center justify-between px-3 py-3">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold text-pink-600 tracking-wide"
        >
          FAKE
          <span className="text-gray-800 dark:text-white">STORE</span>
        </Link>

        <div className="flex items-center gap-5">
          <ThemeToggle />

          <Link to="/cart" className="relative">
            <FaCartShopping className="text-2xl text-gray-800 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition" />
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {count}
              </span>
            )}
          </Link>

          {!token ? (
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-pink-600"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={onLogout}
              className="flex items-center gap-1 text-sm text-gray-800 dark:text-gray-300 hover:text-pink-600 transition"
            >
              <MdAccountCircle className="text-2xl" />
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
