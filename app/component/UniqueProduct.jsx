import React from 'react'
import Image from 'next/image'


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


                </div>
            </div>
        </div>
    </section>










</>
)
}

export default UniqueProduct