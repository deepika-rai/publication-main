import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const BookCard = ({ book }) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();
    //  console.log("paid book card========>",book)

    return book && (
        <div 
            onClick={() => { 
                navigate(`/books/${book.id}`); 
                window.scrollTo(0, 0); 
            }} 
            className="rounded-lg overflow-hidden bg-white shadow-lg min-w-[200px] max-w-[246px] w-full cursor-pointer group-hover:scale-110 transition-transform duration-300"
        >
            {/* Book Image with Hover Effect */}
            <div className="group relative overflow-hidden h-48 flex items-center justify-center bg-gray-50">
                <img 
                    className="group-hover:scale-110 transition-transform duration-300 w-full h-full object-contain p-4" 
                    src={`${baseURL}${book.image[0]}`}
                    alt={book.name} 
                />
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-[#106412] px-3 py-1 rounded-full text-xs font-medium">
                        Quick View
                    </span>
                </div>
            </div>

            {/* Book Details */}
            <div className="p-4">
                {/* <div className="text-gray-500 text-xs uppercase mb-1">{book.cat_name}</div> */}
                {/* <h3 className="text-gray-800 font-medium text-base truncate mb-2">{book.name}</h3> */}
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

                {/* Price and Add to Cart */}
                <div className="flex items-end justify-between mt-4">
                    <div>
                        <span className="text-lg font-bold text-[#02027c]">
                            {currency}{book.offerPrice}
                        </span>
                        <span className="text-gray-400 text-sm line-through mx-2">
                            {currency}{book.price}
                        </span>
                    </div>
                    
                    <div 
                        onClick={(e) => e.stopPropagation()} 
                        className="relative z-10"
                    >
                        {!cartItems[book._id] ? (
                            <button 
                                onClick={() => addToCart(book.id)}
                                className="flex items-center justify-center gap-1 bg-[#0000CC] hover:bg-[#02027c] text-white w-20 h-8 rounded-full transition-colors duration-200 font-medium text-sm cursor-pointer"
                            >
                                <img src={assets.cart_icon} alt="cart" className="w-3 filter brightness-0 invert" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-between bg-[#106412] text-white rounded-full w-20 h-8 px-2">
                                <button 
                                    onClick={() => removeFromCart(book.id)}
                                    className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#0aad0a] transition-colors"
                                >
                                    -
                                </button>
                                <span className="text-sm font-medium">{cartItems[book.id]}</span>
                                <button 
                                    onClick={() => addToCart(book.id)}
                                    className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#0aad0a] transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;