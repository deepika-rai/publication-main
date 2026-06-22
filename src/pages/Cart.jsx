import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const Cart = () => {
    const { books, currency, cartItems, removeFromCart, getCartCount, updateCartItem, navigate, getCartAmount, axios, user, setCartItems } = useAppContext()
    const [cartArray, setCartArray] = useState([])

    const getCart = () => {
        let tempArray = []
        for (const key in cartItems) {
            // console.log("getCart keys======",key);
            // console.log("getCart cartitems======",cartItems);
            const book = books.find((item) => item.id == key)
            if (book) {
                book.quantity = cartItems[key]
                tempArray.push(book)
            }
        }
        setCartArray(tempArray)
    }


    const placeOrder = async () => {
        navigate("/maintenance");
        return;
        try {
            const { data } = await axios.post('/api/order/stripe', {
                userId: user.id,
                items: cartArray.map(item => ({ book: item.id, quantity: item.quantity }))
            })

            if (data.success) {
                window.location.replace(data.url)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (books.length > 0 && cartItems) {
            getCart()
        }
    }, [books, cartItems])


    if (getCartCount() === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                    <img src={assets.empty_cart} alt="Empty cart" className="w-32 h-32 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                    <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
                    <button
                        onClick={() => navigate("/books")}
                        className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items Section */}
                <div className="lg:w-2/3">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-gray-600">
                                Shopping Cart <small className="text-primary"> ({getCartCount()} Items)</small>
                            </h1>
                            <button
                                onClick={() => { navigate("/books"); scrollTo(0, 0) }}
                                className="flex items-center text-primary hover:text-primary-dark transition cursor-pointer"
                            >
                                <span>Continue Shopping</span>
                                <img className="ml-2 w-4 h-4" src={assets.arrow_right_icon_colored} alt="arrow" />
                            </button>
                        </div>

                        <div className="border-b border-gray-200 pb-4 mb-4 hidden md:grid grid-cols-12">
                            <div className="col-span-6 font-bold text-black">PRODUCT</div>
                            <div className="col-span-3 font-bold text-black text-center">QUANTITY</div>
                            <div className="col-span-2 font-bold text-black text-center">PRICE</div>
                            <div className="col-span-1 font-bold text-black text-center">ACTION</div>
                        </div>

                        {cartArray.map((book, index) => (
                            <div key={index} className="border-b border-gray-200 py-6 flex flex-col md:flex-row md:items-center">
                                <div className="flex items-center md:w-6/12 mb-4 md:mb-0">
                                    <div
                                        onClick={() => {
                                            navigate(`/books/${book.category.toLowerCase()}/${book.id}`);
                                            scrollTo(0, 0)
                                        }}
                                        className="cursor-pointer w-20 h-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                                    >
                                        <img className="w-full h-full object-cover" src={`${baseURL}${book.image[0]}`} alt={book.name} />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-medium text-gray-900">{book.name}</h3>
                                        {/* <p className="mt-1 text-sm text-black">Weight: {book.id || "N/A"}</p> */}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between md:w-6/12">
                                    <div className="flex items-center md:justify-center md:w-2/12">
                                        <select
                                            onChange={e => updateCartItem(book.id, Number(e.target.value))}
                                            value={cartItems[book.id]}
                                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        >
                                            {Array(cartItems[book.id] > 9 ? cartItems[book.id] : 9).fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="text-center md:w-2/12 font-medium text-gray-900">
                                        {currency}{book.offerPrice * book.quantity}
                                    </div>

                                    <div className="flex md:w-2/12 justify-center">
                                        <button
                                            onClick={() => removeFromCart(book.id)}
                                            className="text-red-500 hover:text-red-700 transition"
                                        > Remove
                                            {/* <img src={assets.remove_icon} alt="remove" className="w-5 h-5" /> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>


                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Payment Method</h3>
                            Online Payment
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span>{currency}{getCartAmount()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Tax (2%)</span>
                                    <span>{currency}{(getCartAmount() * 0.02).toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between text-base font-medium text-gray-900 border-t border-gray-200 pt-4 mb-6">
                                <span>Total</span>
                                <span>{currency}{(getCartAmount() * 1.02).toFixed(2)}</span>
                            </div>

                            <button
                                onClick={placeOrder}
                                className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition cursor-pointer"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;