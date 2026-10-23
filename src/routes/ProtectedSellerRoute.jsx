import { Navigate, Outlet } from "react-router-dom";
import { useSellerContext } from "../context/SellerContext";

const ProtectedSellerRoute = () => {
    const { isSeller, authLoading } = useSellerContext();

    if (authLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    return isSeller ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedSellerRoute;
