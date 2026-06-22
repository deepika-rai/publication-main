import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import BookCard from "../components/BookCard";
import toast from "react-hot-toast";
import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const BookDetails = () => {

    const { navigate, currency, addToCart } = useAppContext()
    const { id } = useParams()
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [books, setBooks] = useState([])
    // const [book, setBook] = useState([])
    const [book, setBook] = useState({ image: [] })


    console.log("book detail id======>", id)

    // Fetch Book by Id
    const fetchBook = async () => {
        try {
            const { data } = await axios.get(`/api/book/bookDetail/${id}`)
            if (data.success) {
                console.log("fetchBook data======>", data)
                setBook(data.book)
                if (data.book?.image?.length) {
                    setThumbnail(`${baseURL}${data.book.image[0]}`);
                }
                setRelatedBooks(data.relatedBooks)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }



    useEffect(() => {
        fetchBook()
    }, []);


    // if (!books.length || !book) {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="mt-12">
                <p>
                    <Link to={"/"}>Home</Link> /
                    <Link to={"/books"}> Books</Link> /
                    <Link to={`/books/${book?.cat_name?.catName}/${book.category}`}> {book?.cat_name?.catName}</Link> /
                    <span className="text-primary"> {book.name}</span>
                </p>

                <div className="flex flex-col md:flex-row gap-16 mt-4">
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3">
                            {Array.isArray(book?.image) && book.image.map((image, index) => (
                                <div key={index} onClick={() => setThumbnail(`${baseURL}${image}`)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                    <img src={`${baseURL}${image}`} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                            <img src={thumbnail} alt="Selected book" />
                        </div>
                    </div>

                    <div className="text-sm w-full md:w-1/2">
                        <h1 className="text-3xl font-medium">{book.name}</h1>

                        <div className="flex items-center gap-0.5 mt-1">
                            {Array(5).fill('').map((_, i) => (
                                <img src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt={i} className="md:w-4 w-3.5" />

                            ))}
                            <p className="text-base ml-2">(4)</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-gray-500/70 line-through">MRP: {currency}{book.price}</p>
                            <p className="text-2xl font-medium">MRP: {currency}{book.offerPrice}</p>
                            <span className="text-gray-500/70">(inclusive of all taxes)</span>
                        </div>

                        <p className="text-base font-medium mt-6">About Book</p>
                        <ul className="list-disc ml-4 text-gray-500/70">
                            {/* {book.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))} */}
                            {book.description}
                        </ul>

                        <div className="flex items-center mt-10 gap-4 text-base">
                            <button onClick={() => addToCart(book.id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                                Add to Cart
                            </button>
                            <button onClick={() => { addToCart(book.id); navigate("/cart") }} className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull transition" >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-20">
                    <div className="flex flex-col items-center w-max">
                        <p className="text-3xl font-medium">Related Books</p>
                        <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
                        {relatedBooks.map((book, index) => (
                            <BookCard key={index} book={book} />
                        ))}
                    </div>
                    <button onClick={() => { navigate('/books'); scrollTo(0, 0) }} className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition">See more</button>
                </div>
            </div>
        </div>
    );

};


export default BookDetails