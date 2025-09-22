import React from 'react'
import Image from 'next/image'

const FeaturedProducts = () => {
  return (
    <>
    
    
    <section id='prodects' className='mt-[147px]  mb-111'>
        <div className="container">
            <div>
                <h1 className=' font-aby font-normal text-[42px] text-[#1A0B5B] text-center'>Featured Products</h1>
            </div>

            <div className='w-[270px]   shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] rounded-md'>
                <div className='w-[270px]  bg-[#F6F7FB] flex justify-center items-center'>


                            <Image className='w-[200px] '


                                src={'/image 1168.png'}
                                width={100}
                                height={100}
                                alt='product image'



                            />

                </div>
                <div className='pb-5'>
         
                    <h2 className='text-[18px] font-bold text-pink text-center mt-4 font-lato'>Cantilever chair</h2>
                    <div className='flex  justify-center items-center gap-2 mt-5'>
                                   <button className='w-5 h-1.5 bg-red-500 rounded-4xl  cursor-pointer  '></button>
                                   <button className='w-5 h-1.5 bg-blue-500 rounded-4xl  cursor-pointer '></button>
                                    <button className='w-5 h-1.5 bg-green-500 rounded-4xl  cursor-pointer '></button>
                    </div>
                    <p className='text-[14px] font-semibold text-[#151875] text-center mt-[15px] font-lato'>Code - Y523201</p>
                    <p className='text-[14px] font-semibold text-[#151875] text-center mt-[8px] font-lato'>$42.00</p>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default FeaturedProducts