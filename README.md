# 🛒 FakeStore - E-commerce React App

FakeStore is a responsive and dynamic e-commerce web application built using React.js and TailwindCSS. It features product browsing, a shopping cart, login/logout functionality, and theme switching (light/dark). This project fetches product data from the Fake Store API and includes various features inspired by modern e-commerce sites.

## 🚀 Features

- User Authentication (via Fake Store API)
- Add to Cart / Remove from Cart functionality
- Product Listing & Detail Page
- Protected Routes for Cart 
- Logout functionality
- Dark Mode / Light Mode Toggle
- 404 Page Handling

## 🧰 Tech Stack

- React.js
- React Router DOM
- Tailwind CSS
- Fake Store API
- React Icons
 

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adity672roy/Ecommerce-Website-FakeAPI.git
   cd Ecommerce-Website-FakeAPI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔑 Login Credentials

Use the following credentials to log in (as provided by Fake Store API):

- **Username:** johnd
- **Password:** m38rmF$

## 📁 Folder Structure

```
/src
├── components
│   ├── AddToCartButton.jsx
│   ├── FilterSidebar.jsx
│   ├── Header.jsx
│   ├── ProtectedRoute.jsx
│   └── ThemeToggle.jsx
├── context
│   └── CartContext.js
├── pages
│   ├── Cart.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   └── ProductDetail.jsx
├── App.jsx
└── main.jsx
```

### 📁 Component & Page Overview for FakeStore

This document provides an overview of each component and page used in the FakeStore e-commerce React application.

## 📁 components

### `AddToCartButton.jsx`
- Reusable button for adding/removing products from the cart.
- Changes icon and style based on whether the item is in the cart.

### `FilterSidebar.jsx`
- Sidebar component for filtering products based on search and category.
- Responsive design: appears as a fixed drawer on mobile and a fixed sidebar on larger screens.
- Contains a search input with a search icon and a list of category checkboxes.
- Calls handler functions to manage filtering state based on user input.

### `Header.jsx`
- The main navigation bar.
- Contains logo, theme toggle, cart icon, and login/logout links.
- Updates based on user authentication status.

### `ProtectedRoute.jsx`
- HOC for guarding private routes like the cart.
- Redirects unauthenticated users to the login page.

### `ThemeToggle.jsx`
- UI control to toggle between light and dark modes.
- Uses icons and Tailwind dark mode classes.

## 📁 context

### `CartContext.js`
- Manages global cart state using React Context.
- Provides access and manipulation functions:  `cart`, `addToCart`, `updateQuantity`, `removeFromCart`, `clearCart`.

## 📁 pages

### `Cart.jsx`
- Displays all items added to the cart.
- Allows users to remove items and see total.
- converted the price to indian rupees (₹) from dollar ($)

### `Home.jsx`
- Main product listing page.
- Fetches products from Fake Store API.
- Includes category filtering and search.

### `Login.jsx`
- Login form that authenticates using Fake Store API credentials.
- Saves token and redirects users on success.

### `NotFound.jsx`
- Displays a 404 error message for unmatched routes.

### `ProductDetail.jsx`
- Shows detailed information of a selected product.
- Includes product image, price(₹), description, and cart actions.

## 📄 App.jsx
- Main component that sets up all routes using React Router.
- Wraps around all page components and context providers.

## 📄 main.jsx
- Entry point that renders the app into the DOM.
- Wraps the app with the `CartContext` provider.
- Sets up routing using `BrowserRouter`.

## 📦 API Used

- [Fake Store API](https://fakestoreapi.com/) — Free RESTful e-commerce API

---

💡 Contributions, forks, and learning explorations are always welcome! ✨

















