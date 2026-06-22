import React from 'react'
import FreeBookCard from './FreeBookCard';
import BookCard from './BookCard';
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  const { homeBooks } = useAppContext();
  const books = homeBooks?.books || [];
  // console.log("BestSeller========>",homeBooks)
  // console.log("BestSeller========>",books)

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-semibold text-black-700'>Top Selling</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-6 mt-6'>
        {books.map((book, index) => (
          book.isPaid == false ? <FreeBookCard key={index} book={book} /> : <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
