import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true; // cookie automatically bhejne/receive karne ke liye

export const SellerContext = createContext();

export const SellerContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const [books, setBooks] = useState([])
    const navigate = useNavigate();
    const [isSeller, setIsSeller] = useState(false)
    const [sellerRole, setSellerRole] = useState(null); // 2, 3, 4 - role-based UI ke liye
    const [authLoading, setAuthLoading] = useState(true); // pehli baar auth-check hone tak

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

    const fetchSeller = async () => {
        try {
            const { data } = await axios.get('/api/seller/is-auth');
            if (data.success) {
                setIsSeller(true);
                setSellerRole(data.user.role);
            } else {
                setIsSeller(false);
                setSellerRole(null);
            }
        } catch (error) {
            // 401 = simply not logged in yet, koi real error nahi
            setIsSeller(false);
            setSellerRole(null);
        } finally {
            setAuthLoading(false);
        }
    };

    useEffect(() => {
        fetchSeller();
        fetchBooks()
    }, []);

    // Logout helper - cookie clear karne ke liye backend call zaroori
    const logoutSeller = async () => {
        try {
            await axios.post('/api/seller/logout');
        } catch (error) {
            console.log("LOGOUT ERROR:", error.message);
        } finally {
            setIsSeller(false);
            setSellerRole(null);
            navigate('/seller/login', { replace: true });
        }
    }

    const value = {
        navigate, currency, setIsSeller, isSeller,
        sellerRole, setSellerRole,
        authLoading,
        axios, books, fetchBooks,
        logoutSeller
    }

    return <SellerContext.Provider value={value}>
        {children}
    </SellerContext.Provider>
}

export const useSellerContext = () => {
    return useContext(SellerContext)
}