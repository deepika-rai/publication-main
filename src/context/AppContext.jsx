import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";



axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true);
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [books, setBooks] = useState([])
    const [users, setUsers] = useState([])
    // const [token, setToken] = useState(localStorage.getItem("userToken") || null);
    const [homeBooks, setHomeBooks] = useState([])
    const [bookCategory, setBookCategory] = useState([]);

    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})


    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/is-auth');
            if (data.success) {
                setUser(data.user);
                if (data.user.cartItems) {
                    setCartItems(data.user.cartItems);
                }
            } else {
                setUser(null);
            }
        } catch (error) {
            setUser(null);
        } finally {
            setAuthLoading(false);
        }
    }

    // Fetch All Books
    const fetchBooks = async () => {
        try {
            const { data } = await axios.get('/api/book/list')
            if (data.success) {
                setBooks(data.books)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }



    // Fetch Specific books 
    const fetchHomeBooks = async () => {
        try {
            const { data } = await axios.get('/api/book/homeBookList')
            if (data.success) {
                // console.log("fetchHomeBooks========>", data)
                setHomeBooks(data)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    // Fetch All Users
    const fetchUsers = async () => {
        try {
            const { data } = await axios.get('/api/user/list')
            if (data.success) {
                setUsers(data.users)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Add Book to Cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to Cart")
    }

    // Update Cart Item Quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")
    }

    // Remove Book from Cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        }
        toast.success("Removed from Cart")
        setCartItems(cartData)
    }

    // Get Cart Item Count
    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    // Get Cart Total Amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            // console.log("getCartAmount items======",items);
            // console.log("getCartAmount books======",books);
            let itemInfo = books.find((book) => book.id == items);
            // console.log("itemInfo======",itemInfo);
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    const fetchBookCategory = async () => {
        try {
            const { data } = await axios.get('/api/book/bookcategory')
            if (data.success) {
                setBookCategory(data.category)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    useEffect(() => {
        fetchUser()
        fetchHomeBooks()
        fetchBooks()
        fetchBookCategory()
    }, [])

    // Update Database Cart Items
    useEffect(() => {
        const updateCart = async () => {
            try {
                const { data } = await axios.post('/api/cart/update', { cartItems })
                if (!data.success) {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }

        if (user) {
            updateCart()
        }
    }, [cartItems])

    const value = {
        navigate,
        showUserLogin, setShowUserLogin, users,authLoading, currency, addToCart, updateCartItem, removeFromCart, cartItems, setCartItems, searchQuery, setSearchQuery, getCartAmount, getCartCount, fetchHomeBooks, homeBooks, axios, fetchBooks, books, fetchUsers, user, setUser, fetchBookCategory, bookCategory
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}
