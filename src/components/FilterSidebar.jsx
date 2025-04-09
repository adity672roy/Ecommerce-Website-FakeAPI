import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const FilterSidebar = ({
  isMobile,
  open,
  onClose,
  search,
  setSearch,
  categories,
  selectedCategories,
  handleCategoryChange,
}) => {
  const sidebarContent = (
    <div className="space-y-6">
      {/* Close Button for Mobile */}
      {isMobile && (
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl   sm:text-3xl font-bold text-pink-600 tracking-wide"
          >
            FAKE
            <span className="text-gray-800 dark:text-white">STORE</span>
          </Link>
          <button
            className="  text-gray-600 dark:text-white hover:text-red-500 transition"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>
        </div>
      )}

      {/* Search */}

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Search
        </h2>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 dark:text-gray-300">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-[1px] focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Categories
        </h2>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 capitalize text-gray-700 dark:text-white cursor-pointer hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="accent-pink-600 w-4 h-4"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile sidebar
  if (isMobile && open) {
    return (
      <div className="fixed inset-0 z-50 flex md:hidden">
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          onClick={onClose}
        />
        <div className="relative p-4 z-50 w-3/5 h-full bg-white dark:bg-gray-900 shadow-lg  overflow-y-auto">
          {sidebarContent}
        </div>
      </div>
    );
  }

  //   Desktop sidebar
  if (!isMobile) {
    return (
      <div className="relative">
        <div className="hidden md:block   bg-white dark:bg-gray-800 min-h-full h-screen w-60 p-4 border-r border-gray-200 dark:border-gray-700 shadow-lg z-40 overflow-y-auto">
          {sidebarContent}
        </div>
      </div>
    );
  }

  return null;
};

export default FilterSidebar;
