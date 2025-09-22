import Link from 'next/link'
import React from 'react'

import Image from "next/image";


const Banner = () => {
return (
<>


    <section id='banner' className='bg-[#F2F0FF] pb-[236px] pt-[203px] w-full relative'>

        {/* ------position image----- */}

        <div className='a absolute top-10 right-25'> 
            <Image
            src={'/bannerSofa.png'}
            width={706}
            height={689}
            alt='sofa'
            
            
            />
            
        </div>

        <div className="container">
            <div className="div">
                {/* -----text---- */}
                <h2 className='font-lato text-base font-bold text-pink'>Best Furniture For Your Castle....</h2>


                <h1 className='mt-3  font-lato text-[54px] font-bold w-[644px]'>New Furniture Collection Trends In 2020
                </h1>

                <p className='font-lato font-bold text-base text-[#8A8FB9] w-[560px]  mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p>

                    <div className='mt-[43px] '>
                        <Link href={'#'} className='py-[15px] px-[43px] bg-pink rounded-[5px] text-white font-lato font-medium text-base  hover:bg-[#2F1AC4]  duration-300'>
                        Shop Now
                        </Link>
                    </div>
            </div>
        </div>

    </section>






</>
)
}

export default Banner