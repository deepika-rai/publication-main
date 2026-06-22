import React, { useEffect, useState } from 'react'
import { assets, categories } from '../../../assets/assets';
import { useSellerContext } from '../../../context/SellerContext';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useParams, useNavigate } from 'react-router-dom';

// import * as pdfjsLib from "pdfjs-dist";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;


const baseURL = import.meta.env.VITE_BACKEND_URL;


const AddBook = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [bookCategory, setBookCategory] = useState([]);
  const [category, setCategory] = useState('');
  const [files, setFiles] = useState([]);
  const [autoSelectPages, setAutoSelectPages] = useState([]);
  const [pdf, setPdf] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');
  const { axios, fetchBooks } = useSellerContext();

  const onSubmitHandler = async (event) => {
    if (bookId && bookId > 0) {
      event.preventDefault();
      try {
        const bookData = {
          id: bookId,
          name,
          description,
          category,
          price,
          offerPrice,
          autoSelectPages
        };

        const formData = new FormData();
        formData.append('bookData', JSON.stringify(bookData));

        for (let i = 0; i < files.length; i++) {
          if (files[i] instanceof File) {
            formData.append('images', files[i]);
          }
        }

        if (pdf instanceof File) {
          formData.append("bookPdf", pdf);
        }

        const { data } = await axios.put(`/api/book/update`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (data.success) {
          toast.success(data.message);
          fetchBooks();
          navigate('/seller/book-list');
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        event.preventDefault();
        const bookData = {
          name,
          description: description,
          category,
          price,
          offerPrice,
          autoSelectPages
        }

        console.log("files1===",files);

        const formData = new FormData();
        formData.append('bookData', JSON.stringify(bookData));
        if (files.length && files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i])
          }
        }


        formData.append("bookPdf", pdf);

        const { data } = await axios.post("/api/book/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });


        if (data.success) {
          toast.success(data.message);
          fetchBooks() // Refresh book list
          navigate('/seller/book-list') // Redirect after successful update
        } else {
          toast.error(data.message)
        }

      } catch (error) {
        toast.error(error.message)
      }
    }

  }

  const fetchBook = async () => {
    try {
      const { data } = await axios.get(`/api/book/${bookId}`)
      if (data.success) {
        setName(data.book.name);
        setDescription(data.book.description);
        setCategory(data.book.category);
        setPrice(data.book.price);
        setOfferPrice(data.book.offerPrice);
        setFiles(data.book.image || []);
        setPdf(data.book.pdf);
      }
    } catch (error) {
      toast.error('Failed to fetch book data')
    }
  }

  const fetchCategory = async () => {
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


  const handlePdfChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;
      setPdf(file);
     
      const formData = new FormData();
      formData.append("file", file);


      const { data } = await axios.post("/api/book/pdfPageExtract", formData);
      setFiles(data.images);
      setAutoSelectPages(data.images);


    } catch (err) {
      console.error(err);
      toast.error("Failed to extract images from PDF");
    }
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);
  };

  const handlePdfChangeforsplitpdf = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;
      setPdf(file);

      console.log("handlePdfChange1====>", file)
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/api/book/pdfPageExtract", formData, {
        responseType: "blob",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });


      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      console.log("pdfBlob=======>", pdfBlob)
      const pdfUrl = URL.createObjectURL(pdfBlob);
      console.log("pdfUrl=======>", pdfUrl)

      setFiles([pdfUrl, pdfUrl, pdfUrl, pdfUrl]);
    } catch (err) {
      console.error(err);
      toast.error("Failed to extract images from PDF");
    }
  };

  useEffect(() => {
    if (bookId && bookId > 0) {
      fetchBook();
    }
    fetchCategory();
  }, [bookId]);





  return (
    <div className="flex-1 min-h-[95vh] overflow-y-auto">
      <div className="container mx-auto px-4">

        {/* Heading and View All in the same row OUTSIDE the form card */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl text-primary"> {bookId && bookId > 0 ? "Edit" : "Add"} Book</h2>

          <Link
            to="/seller/book-list"
            className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View All
          </Link>
        </div>
        <Toaster />

        {/* Form Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={onSubmitHandler} className="space-y-6">
            {/* Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Book Images
                <p className="text-xs text-gray-500">
                  Upload up to 4 images (First image will be the main display)
                </p>
              </label>

              <div className="flex flex-wrap items-center gap-4">
                {Array(4).fill('').map((_, index) => (
                  <label key={index} htmlFor={`image${index}`} className="cursor-pointer">
                    <input
                      onChange={(e) => {
                        const updatedFiles = [...files];
                        updatedFiles[index] = e.target.files[0];
                        setFiles(updatedFiles);
                      }}
                      type="file"
                      id={`image${index}`}
                      className="hidden"
                      accept="image/*"
                    />
                    <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                      {files[index] ? (
                        <img
                          src={
                            files[index] instanceof File
                              ? URL.createObjectURL(files[index])
                              : `${baseURL}${files[index]}`
                          }
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-gray-400 text-center p-2">
                          <img src={assets.upload_area} alt="Upload" className="mx-auto w-8 h-8" />
                          <span className="text-xs block mt-1">Image {index + 1}</span>
                        </div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label htmlFor="book-pdf" className="block text-sm font-medium text-gray-700 mb-1">Book Pdf</label>
              <input
                onChange={handlePdfChange}
                id="book-pdf"
                type="file"
                accept="application/pdf"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />

              {pdf && typeof pdf === "string" && (
                <a
                  href={`${baseURL}${pdf}`}
                  target="_blank"
                  className="text-blue-500 text-sm mt-1 block"
                >
                  View Existing PDF
                </a>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label htmlFor="book-name" className="block text-sm font-medium text-gray-700 mb-1">Book Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="book-name"
                  type="text"
                  placeholder="Enter book name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  id="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  required
                >
                  <option value="">Select a category</option>
                  {bookCategory.map((item, index) => (
                    <option key={index} value={item.id}>{item.catName}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="book-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                id="book-description"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder="Enter book description (use new lines for bullet points)"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="book-price" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  id="book-price"
                  type="number"
                  placeholder="0.00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label htmlFor="offer-price" className="block text-sm font-medium text-gray-700 mb-1">Offer Price ($)</label>
                <input
                  onChange={(e) => setOfferPrice(e.target.value)}
                  value={offerPrice}
                  id="offer-price"
                  type="number"
                  placeholder="0.00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
              >
                {bookId && bookId > 0 ? "Update" : "Add"} Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );


}

export default AddBook