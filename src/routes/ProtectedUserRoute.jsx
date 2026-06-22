import { Navigate, Outlet } from "react-router-dom";

const ProtectedUserRoute = () => {
  const getToken = localStorage.getItem("userToken");
  const isAuthenticated = !getToken ? false : true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedUserRoute;
