import React from 'react'
import Image from 'next/image'

const FeaturedProducts = () => {
  return (
    <>
    
    
    <section id='prodects' className='mt-[147px] '>
        <div className="container">
            <div>
                <h1 className=' font-aby font-normal text-[42px] text-[#1A0B5B] text-center'>Featured Products</h1>
            </div>

            <div className='w-[270px]'>
                <div className='w-[270px] h-[236px] bg-[#F6F7FB] flex justify-center items-center'>


                            <Image className='w-[200px] '


                                src={'/image 1168.png'}
                                width={100}
                                height={100}
                                alt='product image'



                            />

                </div>
                <div>
                    <h2 className='text-[18px] font-bold text-pink text-center mt-4 font-lato'>Cantilever chair</h2>
                    <p className='text-[14px] font-semibold text-[#151875] text-center mt-[28px] font-lato'>Code - Y523201</p>
                    <p className='text-[14px] font-semibold text-[#151875] text-center mt-[8px] font-lato'>$42.00</p>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default FeaturedProducts