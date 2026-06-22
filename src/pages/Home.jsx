import React, { useEffect } from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import RecentlyAdded from '../components/RecentlyAdded'
const Home = () => {
  return (
    <>
      <div className="mainbanner px-0"><MainBanner /></div>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className='mt-10'>

          <Categories />
          <BestSeller />
          {/* <SaleBook /> */}
          {/* <RecentlyAdded /> */}
          <BottomBanner />
        </div>
      </div>
    </>
  )
}

export default Home
