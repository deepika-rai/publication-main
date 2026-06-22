import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import FreeBookCard from '../components/FreeBookCard';

const BookCategory = () => {

  const { books, bookCategory } = useAppContext()
  const { slug, id } = useParams()

  // console.log("category param==========",slug, id)
  // console.log("books==========",books)

  const searchCategory = categories.find((item) => item.path.toLowerCase() === slug)
  const filteredBooks = books.filter((book) => book.category == id)

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className='mt-16'>
        {searchCategory && (
          <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
            <div className="w-16 h-0.5 bg-primary rounded-full"></div>
          </div>
        )}
        {filteredBooks.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
            {filteredBooks.map((book, index) => (
              <FreeBookCard key={index} book={book} />
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center h-[60vh]'>
            <p className='text-2xl font-medium text-primary'>No book found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookCategory
