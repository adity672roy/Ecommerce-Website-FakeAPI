import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const [ordered, setOrdered] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleCheckout = () => {
    clearCart();
    setOrdered(true);
    setTimeout(() => setOrdered(false), 4000);
  };

  return (
    <div className=" min-h-screen bg-gray-50 dark:bg-gray-900 md:py-10 py-5 px-4 md:px-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Shopping Bag</h2>
      {cart.length === 0 ? (
        <p className="text-xl text-center mt-10">Your cart is empty 🛒</p>
      ) : (
        <div className="relative flex flex-col lg:flex-row justify-between gap-8">
          <button
            onClick={clearCart}
            className="absolute -top-14 right-4  bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded font-semibold text-sm transition"
          >
            Clear Cart
          </button>
          {/* Left side */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-28 object-contain"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-pink-600 font-bold">
                    ₹{(item.price * 83).toFixed(0)}
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-14 text-center border p-1 rounded text-black"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xl hover:text-red-700"
                      title="Remove"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-fit">
            <h3 className="text-xl font-semibold mb-4">Price Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>₹{(total * 83).toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">− ₹0</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-semibold">
                <span>Total Amount</span>
                <span>₹{(total * 83).toFixed(0)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 mt-6 rounded font-semibold flex justify-center items-center gap-2 text-sm transition"
            >
              Place Order <MdShoppingCartCheckout className="text-lg" />
            </button>
          </div>
        </div>
      )}

      {ordered && (
        <div className="flex flex-col items-center justify-center mt-10">
          <FaCheckCircle className="text-green-500 text-6xl mb-2 animate-pulse" />
          <p className="text-green-600 text-xl font-semibold text-center">
            Order placed successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
