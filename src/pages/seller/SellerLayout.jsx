import { Link, NavLink, Outlet, Navigate, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useSellerContext } from "../../context/SellerContext";
import { toast, Toaster } from 'react-hot-toast';

const SellerLayout = () => {
    const { isSeller, sellerRole, authLoading, logoutSeller } = useSellerContext();
    const navigate = useNavigate();

    // Auth-check hone tak wait karo, warna premature redirect ho jayega
    if (authLoading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!isSeller) {
        return <Navigate to="/login" replace />;
    }

    const handleLogout = async () => {
        await logoutSeller(); 
        toast.success("Logged out successfully");
    };

    // role name for header greeting
    const ROLE_NAMES = { 2: "Parliament Admin", 3: "Author Admin", 4: "Super Admin" };

    const sidebarLinks = [
        { name: "Dashboard", path: "/seller/dashboard", icon: 'fa fa-dashboard', roles: [2, 3, 4] },

        { name: "Book Management", path: "/seller/book-list", icon: 'fa fa-list-alt', roles: [3, 4] },
        { name: "Category Management", path: "/seller/category-list", icon: 'fa fa-tags', roles: [3, 4] },
        { name: "Order Management", path: "/seller/orders", icon: 'fa fa-shopping-cart', roles: [3, 4] },
        { name: "User Management", path: "/seller/user-list", icon: 'fa fa-users', roles: [4] },
        { name: "Payments", path: "/seller/payments", icon: 'fa fa-credit-card', roles: [4] },

        { name: "Question Management", path: "/seller/question-list", icon: 'fa fa-tags', roles: [2] },
        
        { name: "Account Setting", path: "/seller/setting", icon: 'fa fa-cog', roles: [2, 3, 4] },
        { name: "logout", action: handleLogout, icon: 'fa fa-sign-out', roles: [2, 3, 4] }
    ];


    const visibleLinks = sidebarLinks.filter(item => item.roles.includes(sellerRole));

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
                    <p className="font-medium">Hi! {ROLE_NAMES[sellerRole] || "Admin"}</p>
                    <button
                        onClick={handleLogout}
                        className='border border-gray-300 rounded-full text-sm px-4 py-1 hover:bg-gray-100 transition-colors'
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className="md:w-64 w-16 bg-white shadow-sm h-[calc(100vh-60px)] sticky top-0 pt-6">
                    {visibleLinks.map((item, index) => (
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