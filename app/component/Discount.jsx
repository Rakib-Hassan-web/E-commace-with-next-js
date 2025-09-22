import Link from 'next/link'
import React from 'react'

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



    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Discount