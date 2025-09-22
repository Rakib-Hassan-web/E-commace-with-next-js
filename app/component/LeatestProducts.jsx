import Link from 'next/link'
import React from 'react'

const LeatestProducts = () => {
return (
<>

    <section id='latestproduct' className='mt-[128px]'>


        <div className="container">
            <div>

                {/* ------heading part-------- */}

                <h1 className=' font-aby font-normal text-[42px] text-[#1A0B5B] text-center'>Leatest Products</h1>


                <div className='flex items-center justify-center gap-18 mt-2'>
                    <Link href={'#'} className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300 '>New Arrival</Link>
                    <Link href={'#'} className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300'>Best Seller</Link>
                    <Link href={'#'} className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300'>Featured</Link>
                    <Link href={'#'} className='font-normal text-[18px] font-lato text-[#151875] hover:underline hover:text-pink duration-300'>Special Offer</Link>
                </div>






            </div>
        </div>

    </section>





</>
)
}

export default LeatestProducts