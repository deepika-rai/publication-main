import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const FreeBookCard = ({ book }) => {
    const { currency, navigate } = useAppContext();
    const [pdf, setPdf] = useState([])

    // Fetch Book by Id
    // const fetchBookPdf = async () => {
    //     try {
    //         const { data } = await axios.get('/api/book/:bookPdf')
    //         if (data.success) {
    //             setPdf(data.books)
    //         } else {
    //             toast.error(data.message)
    //         }
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // }

    //  useEffect(() => {
    //     fetchBookPdf()
    // }, [])


    return book && (
        <div
            // onClick={() => {
            //     window.open(`${baseURL}/api/book/pdf/${book.id}`, '_blank');
            // }}

            onClick={() => { 
                navigate(`/book-reader/${book.id}`); 
                window.scrollTo(0, 0); 
            }} 

            className="rounded-lg overflow-hidden bg-white shadow-lg min-w-[200px] max-w-[246px] w-full cursor-pointer group-hover:scale-110 transition-transform duration-300"
        >
            {/* Book Image with Hover Effect */}
            <div className="group relative overflow-hidden h-55 flex items-center justify-center bg-gray-50">
                <img
                    className="group-hover:scale-110 transition-transform duration-300 w-full h-full object-contain p-4"
                    src={`${baseURL}${book.image[0]}`}
                    alt={book.name}
                />
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-[#106412] px-3 py-1 rounded-full text-xs font-medium">
                        View
                    </span>
                </div>
            </div>

            {/* Book Details */}
            <div className="p-4">
                <div className="text-gray-500 text-xs uppercase mb-1"></div>
                <h3 className="text-gray-800 font-medium text-base mb-2">{book.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    {Array(5).fill('').map((_, i) => (
                        <img
                            key={i}
                            className="w-3.5"
                            src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                            alt=""
                        />

                    ))}
                    <span className="text-gray-500 text-xs">(4)</span>
                </div>


            </div>
        </div>
    );
};

export default FreeBookCard;