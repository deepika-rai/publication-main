import { Navigate, Outlet } from 'react-router-dom';

const ProtectedSellerRoute = () => {
  const getToken = localStorage.getItem("sellerToken");
  const isAuthenticated = !getToken ? false : true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedSellerRoute;
