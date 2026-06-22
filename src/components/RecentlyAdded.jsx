import React from 'react'
import BookCard from './BookCard'
import { useAppContext } from '../context/AppContext';

const RecentlyAdded = () => {

    const { homeBooks } = useAppContext();
    const books = homeBooks?.recentBooks || [];

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-semibold text-black-700'>Recently Added</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {books.map((book, index)=>(
            <BookCard key={index} book={book}/>
        ))}
        
      </div>
    </div>
  )
}

export default RecentlyAdded
