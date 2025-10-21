"use client";   // 👉 এটা প্রথম লাইনে থাকতে হবে

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">

        {/* ----- Logo ----- */}
        <Link href="/" passHref>
          <Image
            src="/Hekto.png"
            alt="Logo"
            width={98}
            height={34}
            priority
          />
        </Link>

        {/* ----- Desktop Menu ----- */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" passHref>
              <span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/shop" passHref>
              <span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Products</span>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Shop</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/login" passHref>
              <span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Login</span>
            </Link>
          </li>
        </ul>

        {/* ----- Search Bar (Desktop) ----- */}
        <div className="hidden md:flex items-center ml-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-[250px] py-2.5 px-3 text-base font-lato text-[#0D0E43] border-2 border-[#E7E6EF] outline-none border-r-0 rounded-l-md"
          />
          <div className="w-[50px] bg-[#FB2E86] rounded-r-md flex items-center justify-center text-2xl text-white">
            <CiSearch />
          </div>
        </div>

        {/* ----- Hamburger Menu Button ----- */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* ----- Mobile Menu ----- */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li><Link href="/" passHref><span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Home</span></Link></li>
            <li><Link href="/shop" passHref><span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Products</span></Link></li>
            <li><Link href="/blog" passHref><span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Blog</span></Link></li>
            <li><Link href="/about" passHref><span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Shop</span></Link></li>
            <li><Link href="/contact" passHref><span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Contact</span></Link></li>
            <li><Link href="/login" passHref><span className="text-[#0D0E43] font-lato text-base font-semibold hover:text-[#FB2E86] duration-300">Login</span></Link></li>

            {/* Mobile Search */}
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2.5 px-3 text-base font-lato text-[#0D0E43] border-2 border-[#E7E6EF] outline-none border-r-0 rounded-l-md"
              />
              <div className="w-[50px] py-5 bg-[#FB2E86] rounded-r-md flex items-center justify-center text-2xl text-white">
                <CiSearch />
              </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
