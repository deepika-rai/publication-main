import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const PageBanner = () => {
    return (
        <div className="pagebanner px-0">
            <div className='relative shadow'>
                {/* Smaller Banner Image Height */}
                <img
                    src={assets.page_banner_bg}
                    alt="banner"
                    className='w-full hidden md:block h-[200px] object-cover'
                />
                <img
                    src={assets.page_banner_bg_sm}
                    alt="banner"
                    className='w-full md:hidden h-[150px] object-cover'
                />

                <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-16 md:pb-0 px-4 md:pl-18 lg:pl-24'>
                    {/* <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-left max-w-80 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
                    >Lear More About, Your Favourite — Destination <span className='text-primary'>ASI</span> </h1> */}

                    <div className='flex items-center mt-6 font-medium gap-4'>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBanner
