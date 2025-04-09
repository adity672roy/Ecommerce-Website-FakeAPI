import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const location = useLocation();
  const from = location.state?.from || "/";

  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        navigate(from, { replace: true });
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow-md dark:bg-gray-900 dark:text-white">
    
      

      <h2 className="text-xl mb-4 font-semibold text-center">Login</h2>
      {error && <p className="text-red-500 text-center mb-3">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border rounded mb-3 text-black"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded mb-4 text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 transition-colors text-white py-2 rounded-full font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
