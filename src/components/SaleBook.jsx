import React from 'react'
import BookCard from './BookCard'
import { useAppContext } from '../context/AppContext';

const SaleBook = () => {
    const { books } = useAppContext();
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-semibold text-black-700'>Sale Books</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {books.filter((book)=> book.inStock).slice(0,5).map((book, index)=>(
            <BookCard key={index} book={book}/>
        ))}
        
      </div>
    </div>
  )
}

export default SaleBook
