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

<p className='w-[523px] font-lato font-normal text-base text-[#B7BACB] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>

<div className='mt-7 flex items-center gap-10'>
    <div className='flex items-center gap-1'>
        <MdDone className='text-xl text-[#7569B2]'/>

        <p className='font-lato font-normal text-base text-[#B8B8DC] '>Material expose like metals</p>

    </div>
       <div className='flex items-center gap-1'>
        <MdDone className='text-xl text-[#7569B2]'/>

        <p className='font-lato font-normal text-base text-[#B8B8DC] '>Clear lines and geomatric figures</p>

    </div>
</div>

</div>












                </div>



    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Discount