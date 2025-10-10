import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

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
          <li><Link href="/"  className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Home</Link></li>
          <li><Link href="/shop" className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Products</Link></li>
          <li><Link href="/contact" className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Blog</Link></li>
          <li><Link href="/about" className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Shop</Link></li>
          <li><Link href="/contact" className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Contact</Link></li>
          <li><Link href="/Login" className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Login</Link></li>
        </ul>

   


{/* -----search bar------- */}

<div className="flex items-center">
    <input type="text" className="w-[250px] py-2.5 text-base font-lato font-normal text-[#0D0E43] border-2 border-[#E7E6EF] outline-none border-r-0"  />

    <div className="w-[50px] bg-[#FB2E86] py-[9px] text-3xl   font-extrabold text-[#fff] flex items-center justify-center ">
     <CiSearch/>


    </div>
</div>




      </div>
    </nav>
  );
};

export default Navbar;
