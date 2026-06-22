import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative shadow'>
  {/* Smaller Banner Image Height */}
  <img 
    src={assets.main_banner_bg} 
    alt="banner" 
    className='w-full hidden md:block h-[400px] object-cover' 
  />
  <img 
    src={assets.main_banner_bg_sm} 
    alt="banner" 
    className='w-full md:hidden h-[250px] object-cover' 
  />

  <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-16 md:pb-0 px-4 md:pl-18 lg:pl-24'>
    <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-left max-w-80 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
        >Lear More About, Your Favourite — Destination <span className='text-primary'>ASI</span> </h1>

    <div className='flex items-center mt-6 font-medium gap-4'>
      {/* Shop Now Button */}
      {/* <Link 
        to={"/books"} 
        className='group flex items-center gap-2 px-6 md:px-8 py-3 bg-primary hover:bg-primary-dull transition rounded-full text-white shadow-md hover:scale-105 duration-200'
      >
        Buy now
        <img 
          className='md:hidden transition-transform group-hover:translate-x-1' 
          src={assets.white_arrow_icon} 
          alt="arrow" 
        />
      </Link> */}

      {/* Contact Us Button */}
      <Link 
        to={"/contact"} 
        className='group hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-primary border border-primary hover:bg-primary hover:text-white transition shadow-sm hover:scale-105 duration-200'
      >
        Contact Us
        <img 
          className='transition-transform group-hover:translate-x-1' 
          src={assets.black_arrow_icon} 
          alt="arrow" 
        />
      </Link>
    </div>
  </div>
</div>
  )
}

export default MainBanner
