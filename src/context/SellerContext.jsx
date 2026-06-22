import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("sellerToken");
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});



axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const SellerContext = createContext();

export const SellerContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const [books, setBooks] = useState([])
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("sellerToken") || null);
    const [isSeller, setIsSeller] = useState(false)

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
            } else {
                setIsSeller(false);
                localStorage.removeItem("sellerToken");
            }

        } catch (error) {
            setIsSeller(false);
            localStorage.removeItem("sellerToken");
            console.log("SELLER AUTH ERROR:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("sellerToken")) {
            fetchSeller();
        }
        fetchBooks()

    }, []);


    const value = {
        navigate, currency, setIsSeller, isSeller, token, setToken, axios, books, fetchBooks
    }

    return <SellerContext.Provider value={value}>
        {children}
    </SellerContext.Provider>
}

export const useSellerContext = () => {
    return useContext(SellerContext)
}
