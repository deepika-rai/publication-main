import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useSellerContext } from "../../context/SellerContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import axios from "axios";

const SellerLayout = () => {
    const { axios, setIsSeller, isSeller, token, setToken } = useSellerContext();
    const navigate = useNavigate();
    // console.log("SellerLayout= isSeller=======>", isSeller);
    // console.log("seller token========>", token);
    if (!token) {
        return <Navigate to="/login" replace />;
    }


    const logout = async () => {
        try {
            const { data } = await axios.get('/api/seller/logout');

            localStorage.removeItem("sellerToken");
            setToken(null); // IMPORTANT
            setIsSeller(false);

            if (data.success) {
                toast.success(data.message);
                navigate("/login", { replace: true });
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };


    const sidebarLinks = [
        { name: "Dashboard", path: "/seller/dashboard", icon: 'fa fa-dashboard' },
        { name: "Book Management", path: "/seller/book-list", icon: 'fa fa-list-alt' },
        { name: "Category Management", path: "/seller/category-list", icon: 'fa fa-tags' },
        { name: "User Management", path: "/seller/user-list", icon: 'fa fa-users' },
        { name: "Order Management", path: "/seller/orders", icon: 'fa fa-shopping-cart' },
        { name: "Payments", path: "/seller/payments", icon: 'fa fa-credit-card' },
        { name: "Account Setting", path: "/seller/setting", icon: 'fa fa-cog' },
        { name: "logout", action: logout, icon: 'fa fa-sign-out' }
    ];




    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        zIndex: 999999,
                    },
                }}
            />
            <header className="flex items-center justify-between px-4 md:px-8 py-3 bg-white shadow-sm">
                <Link to='/'>
                    <img src={assets.logo} alt="logo" className="cursor-pointer w-34 md:w-38" />
                </Link>
                <div className="flex items-center gap-5 text-gray-600">
                    <p className="font-medium">Hi! Admin</p>
                    <button
                        onClick={logout}
                        className='border border-gray-300 rounded-full text-sm px-4 py-1 hover:bg-gray-100 transition-colors'
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="md:w-64 w-16 bg-white shadow-sm h-[calc(100vh-60px)] sticky top-0 pt-6">
                    {sidebarLinks.map((item, index) => (
                        item.action ? (
                            <div
                                key={index}
                                onClick={item.action}
                                className="cursor-pointer flex items-center gap-2 p-2 hover:bg-gray-100"
                            >
                                <i className={item.icon}></i>
                                <span>{item.name}</span>
                            </div>
                        ) : (
                            <NavLink
                                key={index}
                                to={item.path}
                                className="flex items-center gap-2 p-2 hover:bg-gray-100"
                            >
                                <i className={item.icon}></i>
                                <span>{item.name}</span>
                            </NavLink>
                        )
                    ))}
                    {/* {sidebarLinks.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            end={item.path === "/seller"}
                            className={({ isActive }) => `
                                flex items-center py-3 px-4 gap-3 mx-2 rounded-lg
                                ${isActive
                                    ? "bg-primary/10 text-primary font-medium border-r-4 md:border-r-[6px] border-primary"
                                    : "hover:bg-gray-100/90"
                                }`
                            }
                        >
                            <i className={`${item.icon} w-4 h-4`}></i>
                            <span className="md:block hidden">{item.name}</span>
                        </NavLink>
                    ))} */}
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-6 bg-gray-50 min-h-[calc(100vh-60px)]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};



export default SellerLayout;