import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const UniqueProduct = () => {
return (
<>

    <section id='unique' className='mt-[135px] bg-[#F1F0FF] py-10'>
        <div className="container">
            <div className='flex justify-around items-center'>

                {/* ------image---------- */}
                <div className=''>
                    <Image src={"/Group 153.png"} width={558} height={550} alt='Product' />
                </div>
                {/* -=text------------- */}
                <div>
                    <h2 className='text-[#151875] text-[35px] font-medium font-adaminaaa w-[493px]'>
                        Unique Features Of leatest &
                        Trending Poducts
                    </h2>
                    <div className='flex gap-2 items-center mt-8'>
                        <button className='w-2 h-2 rounded-full bg-red-500'></button>
                        <p className='font-lato font-medium text-[#ACABC3] text-base'>All frames constructed with
                            hardwood solids and laminates</p>
                    </div>


                    <div className='flex gap-2   items-center mt-8 w-[480px]'>
                        <button className='w-2 h-2 rounded-full bg-blue-500'></button>
                        <p className='font-lato font-medium text-[#ACABC3] text-base'>Reinforced with double wood
                            dowels, glue, screw - nails corner
                        </p>
                    </div>



                    <div className='flex gap-2   items-center mt-8 w-[480px]'>
                        <button className='w-2 h-2 rounded-full bg-green-500'></button>
                        <p className='font-lato font-medium text-[#ACABC3] text-base'>Arms, backs and seats are
                            structurally reinforced
                        </p>
                    </div>


                    {/* ---------last part------ */}
                    <div className='flex gap-10 items-center'>

                        <div className='mt-[40px]'>
                            <Link href={'#'}
                                className='py-[15px] px-[43px] bg-pink rounded-[5px] text-white font-adaminaaa font-medium text-base hover:bg-[#2F1AC4] duration-300'>
                            Add To Cart
                            </Link>
                        </div>

                        <div className='mt-8'>
                            <h2 className='text-[#151875] text-sm font-medium font-adaminaaa'>B&B Italian Sofa </h2>
                            <h2 className='text-[#151875] text-sm font-medium font-adaminaaa'>$32.00 </h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>










</>
)
}

export default UniqueProduct