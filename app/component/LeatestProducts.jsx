import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";



const LeatestProducts = () => {
return (
<>

    <section id='latestproduct' className='mt-[128px]'>


        <div className="container">
            <div>

                {/* ------heading part-------- */}

                <h1 className=' font-aby font-normal text-[42px] text-[#1A0B5B] text-center'>Leatest Products</h1>


                <div className='flex items-center justify-center gap-18 mt-2'>
                    <Link href={'#'}
                        className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300 '>
                    New Arrival</Link>
                    <Link href={'#'}
                        className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300'>
                    Best Seller</Link>
                    <Link href={'#'}
                        className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300'>
                    Featured</Link>
                    <Link href={'#'}
                        className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300'>
                    Special Offer</Link>
                </div>

                {/* ----------1st row of products------------ */}

                <div className='mt-[62px]'>

                    {/* ------siingle product----- */}
                    <div className='relative group w-[360px] h-[306px]'>

                        <img src="#" alt="Product Image" className='w-full h-[270px] bg-gray-100 rounded-md' />

                        {/* hover cart icon */}
                        <div
                            className="absolute top-20 left-4    opacity-0 group-hover:opacity-100 transition duration-300">
                            <button
                                className="bg-white p-2 rounded-full shadow hover:bg-[#FB2448] hover:text-white duration-300">
                                <AiOutlineShoppingCart />

                            </button>
                           
                        </div>
                          <div
                            className="absolute top-30 left-4 opacity-0 group-hover:opacity-100 transition duration-300 ">
                            <button
                                className="bg-white p-2 rounded-full shadow hover:bg-[#FB2448] hover:text-white duration-300">
                                <GiSelfLove />

                            </button>
                           
                        </div>

                        <div className=' mt-4 flex items-center justify-between '>
                            <h2 className='  font-adaminaaa font-medium text-base text-[#151875]'>Comfort Handy Craft
                            </h2>
                            <div className='flex gap-3.5'>
                                <p className=' font-adaminaaa font-bold text-[14px] text-[#151875]'>$42.00</p>
                                <p className=' font-adaminaaa font-bold text-[12px] text-[#FB2448] line-through'> $65.00
                                </p>
                            </div>
                        </div>

                    </div>







                </div>





            </div>
        </div>

    </section>





</>
)
}

export default LeatestProducts