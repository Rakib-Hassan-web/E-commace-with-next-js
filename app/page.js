import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import FeaturedProducts from './component/FeaturedProducts'
import LeatestProducts from './component/LeatestProducts'
import Offer from './component/Offer'
import UniqueProduct from './component/UniqueProduct'
import TreandingProduct from './component/TreandingProduct'

const page = () => {
  return (
    <>



    <Banner/>
    <FeaturedProducts/>
    <LeatestProducts/>
    <Offer/>
    <UniqueProduct/>
    <TreandingProduct/>
    
    </>
  )
}

export default page