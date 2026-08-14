import { Navigate, Outlet } from "react-router-dom";
import { useSellerContext } from "../context/SellerContext";

const RequireRole = ({ allowedRoles }) => {
    const { isSeller, sellerRole, authLoading } = useSellerContext();

    if (authLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    if (!isSeller) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(sellerRole)) {
        return <Navigate to="/seller/dashboard" replace />;
    }

    return <Outlet />;
};

export default RequireRole;