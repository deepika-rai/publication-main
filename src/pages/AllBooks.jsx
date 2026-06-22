import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import PageBanner from '../components/PageBanner'
import FreeBookCard from '../components/FreeBookCard';
import BookCard from '../components/BookCard'

const AllBooks = () => {
  const { books, searchQuery } = useAppContext()
  const [filteredBooks, setFilteredBooks] = useState([])

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // console.log("all  bookssssssss",books)

  // Filter by search
  useEffect(() => {
    const searched = searchQuery.length > 0
      ? books.filter(book =>
          book.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : books;

    setFilteredBooks(searched);
    setCurrentPage(1);
  }, [books, searchQuery]);

  // Pagination logic
  const inStockBooks = filteredBooks.filter(book => book.inStock);
  const totalPages = Math.ceil(inStockBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBooks = inStockBooks.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  }

  return (
    <>
   <PageBanner/>
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
    <div className='mt-16 flex flex-col'>
      <div className='flex flex-col items-end w-max'>
        <p className='text-2xl font-medium uppercase'>All Books</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-6 mt-6'>
        {paginatedBooks.map((book, index) => (
          book.isPaid == false ? <FreeBookCard key={index} book={book} /> : <BookCard key={index} book={book} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center mt-8 gap-4 items-center'>
        <button
          className='group hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-primary border border-primary hover:bg-primary hover:text-white transition shadow-sm hover:scale-105 duration-200'
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='font-medium'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className='group hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-primary border border-primary hover:bg-primary hover:text-white transition shadow-sm hover:scale-105 duration-200'
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default AllBooks
