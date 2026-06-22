import React, { useState } from "react";
import { useSellerContext } from "../../../context/SellerContext";
import ConfirmationDialog from "./ConfirmDialog";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const BookList = () => {
  const { books, currency, axios, fetchBooks } = useSellerContext();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  const toggleStock = async (id, inStock) => {
    try {
      const { data } = await axios.post("/api/book/stock", { id, inStock });
      if (data.success) {
        fetchBooks();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const { data } = await axios.put('/api/book/updateStatus', { id, status });
      if (data.success) {
        fetchBooks();
        toast.success(data.message);
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const updatePaidStatus = async (id, paidstatus) => {
    try {
      const { data } = await axios.put('/api/book/updatePaidStatus', { id, paidstatus });
      if (data.success) {
        fetchBooks();
        toast.success(data.message);
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  const handleDelete = (bookId) => {
    setBookToDelete(bookId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/book/delete/${bookToDelete}`);
      if (data.success) {
        fetchBooks();
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete book');
    } finally {
      setShowDeleteDialog(false);
      setBookToDelete(null);
    }
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(books.length / itemsPerPage);

  // Get current books
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex-1 min-h-[95vh] overflow-y-auto">
      <div className="container mx-auto px-4">
        {/* Header with Add Book button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h2 className="text-2xl" style={{ color: "#0aad0a" }}>
            Books List
          </h2>
          <Link
            to="/seller/add-book"
            className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Add New
          </Link>
        </div>

        {/* Books Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Book
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider hidden md:table-cell">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Paid
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Active
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentBooks.map((book, index) => (
                  <tr key={book.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 capitalize">{index + 1}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16 border border-gray-200 rounded-md overflow-hidden">
                          <a href={`${baseURL}${book.pdf}`} target="blank">
                            <img
                              className="h-full w-full object-cover"
                              src={`${baseURL}${book.image[0]}`}
                              alt={book.name}
                            />
                          </a>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {book.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 capitalize">
                        {book.cat_name?.catName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <div className="text-sm text-gray-500">
                        {currency}
                        {book.offerPrice}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={book.isPaid}
                          onChange={() =>
                            updatePaidStatus(book.id, !book.isPaid)
                          }
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={book.status}
                          onChange={() =>
                            updateStatus(book.id, !book.status)
                          }
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <div className="flex space-x-2">
                        <Link
                          to={`/seller/edit-book/${book.id}`}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors"
                          state={{ bookData: book }}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {books.length > itemsPerPage && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastItem, books.length)}
                </span>{" "}
                of <span className="font-medium">{books.length}</span>{" "}
                books
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Confirmation Dialog */}
        <ConfirmationDialog
          isOpen={showDeleteDialog}
          onClose={() => setShowDeleteDialog(false)}
          onConfirm={confirmDelete}
          title="Delete Book"
          message="Are you sure you want to delete this book? This action cannot be undone."
          confirmText="Delete"
        />
      </div>
    </div>
  );
};

export default BookList;