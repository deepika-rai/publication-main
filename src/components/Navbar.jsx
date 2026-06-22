import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
    axios,
    setCartItems
  } = useAppContext();


  console.log("user===========>",user);

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout", {
        withCredentials: true
      });
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        setCartItems({});
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };



  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/books");
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white relative transition-all shadow-lg">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img src={assets.moc_logo} alt="moc_logo" width={200} />
      </NavLink>

      <div
        className="hidden sm:flex items-center gap-8"
        style={{ textTransform: "uppercase" }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
            }`
          }
        >
          <img src={assets.logo} alt="logo" width={200} />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="https://asi.nic.in/"
          className={({ isActive }) =>
            `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
            }`
          }
        >
          ASI
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
            }`
          }
        >
          ALl Books
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-blue-700 hover:font-bold ${
              isActive ? "text-blue-700 font-bold" : ""
            }`
          }
        >
          Contact
        </NavLink> */}

        {/* <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search books"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4" />
        </div> */}

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10" alt="" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={() => navigate("my-books")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Books
              </li>
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                My Profile
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6 sm:hidden">
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className=""
        >
          <img src={assets.menu_icon} alt="menu" />
        </button>
      </div>

      {open && (
        <div
          className={`${open ? "flex" : "hidden"
            } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="https://asi.nic.in/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
              }`
            }
          >
            ASI
          </NavLink>
          <NavLink
            to="/books"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
              }`
            }
          >
             ALl Books
          </NavLink>
          {user && (
            <NavLink
              to="my-orders"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
                }`
              }
            >
              My Orders
            </NavLink>
          )}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-blue-700 hover:font-bold ${isActive ? "text-blue-700 font-bold" : ""
              }`
            }
          >
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
