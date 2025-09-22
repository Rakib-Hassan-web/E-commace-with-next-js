import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import FeaturedProducts from './component/FeaturedProducts'
import LeatestProducts from './component/LeatestProducts'
import Offer from './component/Offer'
import UniqueProduct from './component/UniqueProduct'
import TreandingProduct from './component/TreandingProduct'
import Discount from './component/Discount'
import Subscribe from './component/Subscribe'

const page = () => {
  return (
    <>



    <Banner/>
    <FeaturedProducts/>
    <LeatestProducts/>
    <Offer/>
    <UniqueProduct/>
    <TreandingProduct/>
    <Discount/>
    <Subscribe/>
    
    </>
  )
}

export default page