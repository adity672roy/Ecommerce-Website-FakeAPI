import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <Header
        onLogout={handleLogout}
         
        token={token}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute token={token}>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={ <ProtectedRoute token={token}>
          <Cart />
        </ProtectedRoute>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
