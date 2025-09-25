import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    

    <footer className="bg-[#EEEFFB] ">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10  ">
        
        <div className='flex flex-row justify-between'>
        {/* Brand / Newsletter */}
        <div className="md:w-1/4 pt-20">
          <h2 className="text-2xl text-[38px] font-normal font-adaminaaa text-black  mb-4">Hekto</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-3 py-2 w-[250px] border-none bg-white rounded-l-md outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-normal text-base text-[#8A8FB9] font-lato ">Contact Info</p>
            <p className="font-normal text-[13px] mt-3 text-[#8A8FB9] font-lato ">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>

<div className='flex flex-row items-center justify-around'>
        {/* Categories */}
        <div className="md:w-1/4 pt-20">
          <h3 className=" text-[22px] font-normal font-adaminaaa text-black mb-8">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="md:w-1/4 pt-20">
          <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
          <ul className="space-y-2 text-gray-600">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div className="md:w-1/4 pt-20">
          <h3 className="font-semibold text-lg mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
        </div>
      </div>
      </div>
    </footer>



    
    
    
    
    
    </>
  )
}

export default Footer