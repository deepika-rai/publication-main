import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { PDFViewer } from "@embedpdf/react-pdf-viewer";


const baseURL = import.meta.env.VITE_BACKEND_URL;

const BookReader = () => {
    const { id } = useParams();

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);

    const readerRootRef = useRef(null);

    const fetchBook = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/book/bookReader/${id}`);

            if (data.success) {
                console.log("Book=============>", data.book)

                setBook(data.book);
                console.log("book.pdf =", book?.pdf);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchBook();
    }, [fetchBook]);

    useEffect(() => {
        const blockActions = (e) => {
            if (readerRootRef.current?.contains(e.target)) {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", blockActions);

        return () => {
            document.removeEventListener("contextmenu", blockActions);
        };
    }, []);



    const pdfUrl = book?.pdf
        ? `${baseURL}${book.pdf}`
        : null;

        console.log("pdfUrl =", pdfUrl);

    return (
        <div
            ref={readerRootRef}
            className="min-h-screen bg-gray-100"
        >
            <div className="px-4 py-6">

                <p>
                    <Link to="/">Home</Link> /
                    <Link to="/books"> Books</Link> /
                    <span className="text-primary"> {book?.name}</span>
                </p>

                <div className="bg-white mt-4 p-4 rounded shadow">
                    <h1 className="text-2xl font-semibold">
                        {book?.name}
                    </h1>
                </div>

                <div className="mt-5 h-[85vh] bg-white border border-gray-300 rounded overflow-hidden" >

                    {loading ? (
                        <div className="h-full flex items-center justify-center">
                            Loading...
                        </div>
                    ) : pdfUrl ? (
                        <PDFViewer
                            key={pdfUrl}
                            config={{
                                src: pdfUrl,
                                theme: {
                                    preference: "light",
                                },
                                permissions: {
                                    overrides: {
                                        print: false,
                                        printHighQuality: false,
                                    },
                                },
                                // Optional
                                tabBar: "never",

                                // Hide unwanted tools
                                disabledCategories: [
                                    "document-print",
                                    "document-export",
                                    "document-capture",
                                    "capture-screenshot",
                                    "document-fullscreen",
                                ],
                            }}
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                        />
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            PDF not available
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookReader;
