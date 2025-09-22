import Link from 'next/link'
import React from 'react'
import { MdDone } from "react-icons/md";


const Discount = () => {
return (
<>


    <section id='discount' className='pt-[126px] bg-white'></section>


    <div className="container">

        {/* ------heading part-------- */}

        <h1 className=' font-aby font-normal text-[42px] text-[#1A0B5B] text-center'>Discount Item</h1>


        <div className='flex items-center justify-center gap-12 mt-2'>
            <Link href={'#'}
                className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300 '>
            Wood Chair</Link>
            <Link href={'#'}
                className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300'>
            Plastic Chair</Link>
            <Link href={'#'}
                className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300'>
            Sofa Colletion</Link>

        </div>



        {/* -------botom part------ */}

        <div>



            {/* ---------text------- */}
            <div>

                <h2 className='text-primany text-[35px] font-medium font-adaminaaa'>20% Discount Of All Products</h2>
                <p className='text-[21px] font-adaminaaa font-medium text-pink'>Eams Sofa Compact</p>

                <p className='w-[523px] font-lato font-normal text-base text-[#B7BACB] mt-5'>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                {/* ----------1st row------- */}
                <div className='mt-7 flex items-center gap-10'>
                    <div className='flex items-center gap-1'>
                        <MdDone className='text-xl text-[#7569B2]' />

                        <p className='font-lato font-normal text-base text-[#B8B8DC] '>Material expose like metals</p>

                    </div>
                    <div className='flex items-center gap-1'>
                        <MdDone className='text-xl text-[#7569B2]' />

                        <p className='font-lato font-normal text-base text-[#B8B8DC] '>Clear lines and geomatric figures
                        </p>

                    </div>
                </div>


                {/* --------2nd row------ */}
                <div className='mt-2.5 flex items-center gap-17'>
                    <div className='flex items-center gap-1'>
                        <MdDone className='text-xl text-[#7569B2]' />

                        <p className='font-lato font-normal text-base text-[#B8B8DC] '>Simple neutral colours.</p>

                    </div>
                    <div className='flex items-center gap-1'>
                        <MdDone className='text-xl text-[#7569B2]' />

                        <p className='font-lato font-normal text-base text-[#B8B8DC] '>Material expose like metals</p>

                    </div>
                </div>


                <div className='mt-[43px]'>
                    <Link href={'#'}
                        className='py-[15px] px-[43px] bg-pink rounded-[5px] text-white font-lato font-medium text-base hover:bg-[#2F1AC4] duration-300'>
                    Shop Now
                    </Link>
                </div>

            </div>


            {/* -----imnage------ */}












        </div>



    </div>







</>
)
}

export default Discount