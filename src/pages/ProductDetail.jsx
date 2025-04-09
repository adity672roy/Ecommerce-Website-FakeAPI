import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import AddToCartButton from "../components/AddToCartButton";
import { FaStar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-start">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 md:w-[400px] object-contain border rounded-lg shadow-sm"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold">
            {product.title}
          </h3>

          <div className="flex items-center text-yellow-500">
            {Array(Math.round(product.rating?.rate || 0))
              .fill()
              .map((_, idx) => (
                <FaStar key={idx} />
              ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              {product.rating?.rate} | {product.rating?.count} Ratings
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
            <MdCategory />
            <span className="capitalize">{product.category}</span>
          </div>

            {/* Converted to INR from Dollar */}
          <p className="text-xl font-bold text-pink-600 dark:text-pink-400">
            ₹{(product.price * 83).toFixed(0)} 
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-200">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-4">
            <AddToCartButton product={product}  text={"Add to Bag"}/>

            
          </div>

          <p className="text-green-600 text-sm font-medium mt-2">
            100% Original Products | Easy 14-day returns
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
