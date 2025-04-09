import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;
