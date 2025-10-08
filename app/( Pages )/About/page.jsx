'use client';
import React from "react";
import Image from "next/image";
// import aboutImg from "@/public/about.jpg"; // নিজের image রাখো /public ফোল্ডারে

const page = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FBEBB5] to-[#F5D491] py-16 px-5">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Image */}
        {/* <div className="md:w-1/2 w-full">
          <Image
            src={aboutImg}
            alt="About Us"
            className="w-full h-full object-cover"
            priority
          /> */}


        {/* Right Content */}
        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to <span className="font-semibold text-yellow-500">Our Store</span> — 
            where passion meets creativity. We believe in delivering high-quality 
            products that make your everyday life better, brighter, and more beautiful.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our journey started with a simple idea: to bring people closer to 
            unique designs that inspire happiness and style. Every product we offer 
            is chosen with care, made with love, and designed to make you feel special.
          </p>

          <button className="bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-xl hover:bg-yellow-500 transition w-fit">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
