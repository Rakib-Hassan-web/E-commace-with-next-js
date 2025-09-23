import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Subscribe = () => {
return (
<>

  <section id='subscribe' className=' relative mt-[170px]'>

    <div className=' absolute'>
      <Image src={'/Group 162.png'} width={1920} height={462} alt='bg' />

    </div>
    <div className="container z-20 ">
      <div className=' flex items-center justify-center text-center'>
        <h2 className=' relative z-10  font-adaminaaa text-[35px] text-primany font-medium w-[563px] mt-[170px] '>Get
          Leatest Update By Subscribe
          0ur Newslater</h2>
      </div>
            <div className='mt-[28px] relative z-10 flex items-center justify-center text-center'>
                    <Link href={'#'}
                        className='py-[15px] px-[43px] bg-pink rounded-[5px] text-white font-lato font-medium text-base hover:bg-[#2F1AC4] duration-300'>
                    Shop Now
                    </Link>
                </div>

    </div>
  </section>






</>
)
}

export default Subscribe