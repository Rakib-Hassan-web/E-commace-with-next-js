import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-[20px] bg-white">
      <div className="container  flex items-center justify-between  ">
        
        {/* ----- Logo ----- */}
        <Link href="/" >
          <Image
            src="/Hekto.png"  
            alt="Logo"
            width={98}        
           height={34}
            priority           
          />
        </Link>

        {/* -----  Items  ----- */}
        <ul className="flex gap-8 ">
          <li><Link href="/"  className="text-[#0D0E43] font-lato text-base font-normal hover:text-[#FB2E86] duration-300">Home</Link></li>
          <li><Link href="/about" className="text-[#0D0E43] font-lato text-base font-normal hover:text-[#FB2E86] duration-300">Pages</Link></li>
          <li><Link href="/shop" className="text-[#0D0E43] font-lato text-base font-normal hover:text-[#FB2E86] duration-300">Products</Link></li>
          <li><Link href="/contact" className="text-[#0D0E43] font-lato text-base font-normal hover:text-[#FB2E86] duration-300">Blog</Link></li>
          <li><Link href="/contact" className="text-[#0D0E43] font-lato text-base font-normal hover:text-[#FB2E86] duration-300">Shop</Link></li>
          <li><Link href="/contact" className="text-[#0D0E43] font-lato text-base font-normal hover:text-[#FB2E86] duration-300">Contact</Link></li>
        </ul>


{/* -----search bar------- */}

<div>
    <input type="text" className="w-[250px] py-2.5 text-base font-lato font-normal text-[#0D0E43] border-2 border-[#E7E6EF] outline-none"  />

    <div>
        {/* <CiSearch /> */}

    </div>
</div>




      </div>
    </nav>
  );
};

export default Navbar;
