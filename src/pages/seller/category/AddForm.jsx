import React, { useEffect, useState } from 'react'
import { assets, categories } from '../../../assets/assets';
import { useSellerContext } from '../../../context/SellerContext';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useParams, useNavigate } from 'react-router-dom';
const baseURL = import.meta.env.VITE_BACKEND_URL;


const AddCategory = () => {
  const navigate = useNavigate();
  const { catId } = useParams();
  const [category, setCategory] = useState('');
  const [files, setFiles] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { axios, fetchBooks } = useSellerContext();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const categoryData = {
        name,
        description,
        category,
        ...(catId && { id: catId })
      };

      const formData = new FormData();
      formData.append("categoryData", JSON.stringify(categoryData));

      if (files && files[0] instanceof File) {
        formData.append("image", files[0]); // single image
      }

      const url = catId
        ? `/api/book/updateBookCategory/${catId}`
        : `/api/book/addBookCategory`;

      const method = catId ? axios.put : axios.post;

      const { data } = await method(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.success) {
        toast.success(data.message);
        navigate("/seller/book-category-list");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchCategory = async () => {
    try {
      const { data } = await axios.get('/api/book/bookcategory')
      if (data.success) {
        setName(data.book.name);
        setDescription(data.book.description);
        setFiles(data.book.image || []);
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  useEffect(() => {
    if (catId && catId > 0) {
      fetchCategory();
    }
  }, [catId]);



  return (
    <div className="flex-1 min-h-[95vh] overflow-y-auto">
      <div className="container mx-auto px-4">

        {/* Heading and View All in the same row OUTSIDE the form card */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl text-primary"> {catId && catId > 0 ? "Edit" : "Add"} Category</h2>

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
                Category Image
                <p className="text-xs text-gray-500">
                  Upload category images (Main display for category)
                </p>
              </label>
              <div className="flex items-center gap-4">
                <label htmlFor="categoryImage" className="cursor-pointer">
                  <input
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFiles(file ? [file] : []);
                    }}
                    type="file"
                    id="categoryImage"
                    className="hidden"
                    accept="image/*"
                  />
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                    {files[0] ? (
                      <img
                        src={
                          files[0] instanceof File
                            ? URL.createObjectURL(files[0])
                            : `${baseURL}${files[0]}`
                        }
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-400 text-center p-2">
                        <img src={assets.upload_area} alt="Upload" className="mx-auto w-8 h-8" />
                        <span className="text-xs block mt-1">Upload Image</span>
                      </div>
                    )}
                  </div>
                </label>
              </div>
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


            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
              >
                {catId && catId > 0 ? "Update" : "Add"} Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );


}

export default AddCategory