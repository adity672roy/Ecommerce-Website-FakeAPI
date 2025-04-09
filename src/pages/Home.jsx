import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import AddToCartButton from "../components/AddToCartButton";
import FilterSidebar from "../components/FilterSidebar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFiltered(data);
    };

    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };

    fetchData();
    fetchCategories();
  }, []);

  useEffect(() => {
    let filteredData = [...products];

    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    if (search.trim()) {
      filteredData = filteredData.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(filteredData);
  }, [search, selectedCategories, products]);

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };
  return (
    <div className="sm:p-2 h-full w-full md:flex gap-2 relative bg-gray-50 dark:bg-gray-900 dark:text-white">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden absolute top-2 right-0 flex items-center gap-2 px-4 py-1 m-2 bg-pink-100 text-pink-600 font-semibold rounded-full shadow"
        >
          <FiFilter /> Filter
        </button>
      )}

      <FilterSidebar
        isMobile={true}
        open={open}
        onClose={() => setOpen(false)}
        search={search}
        setSearch={setSearch}
        categories={categories}
        selectedCategories={selectedCategories}
        handleCategoryChange={handleCategoryChange}
      />

      <FilterSidebar
        isMobile={false}
        search={search}
        setSearch={setSearch}
        categories={categories}
        selectedCategories={selectedCategories}
        handleCategoryChange={handleCategoryChange}
      />

      {/* Products */}
      <div className="flex-1 pt-4">
        <h1 className="md:text-3xl text-2xl font-bold mb-4 text-pink-600 pl-2">
          All Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-2 ">
          {filtered.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white dark:bg-gray-800 border dark:border-zinc-600 border-zinc-200 sm:rounded-md p-4 flex flex-col transition-shadow hover:shadow-lg"
            >
              <div className="w-full h-44 flex items-center justify-center mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 justify-between">
                <h2 className="text-sm font-medium text-gray-800 dark:text-white text-center line-clamp-2 mb-2">
                  {product.title}
                </h2>

                <div className="flex justify-between items-center mt-auto">
                  <p className="text-lg font-bold text-pink-600 dark:text-pink-400">
                    ₹{Math.round(product.price * 83)}
                  </p>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
