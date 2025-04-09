import { useContext } from "react";
import { BsFillBagPlusFill, BsBagCheckFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const AddToCartButton = ({ product, text }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const isAdded = cart.some((item) => item.id === product.id);

  const handleClick = (e) => {
    e.preventDefault();
    isAdded ? removeFromCart(product.id) : addToCart(product);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-200
        ${
          isAdded
            ? "bg-green-100 text-green-700 border border-green-400 hover:bg-green-200 hover:text-green-800"
            : "bg-pink-50 text-pink-600 border border-pink-300 hover:bg-pink-600 hover:text-white"
        }
        shadow-sm hover:shadow-md active:scale-95`}
    >
      {isAdded ? (
        <>
          <BsBagCheckFill className="text-lg sm:text-xl" />
          {text}
        </>
      ) : (
        <>
          <BsFillBagPlusFill className="text-lg sm:text-xl" />
          {text}
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
