'use client';
import React from "react";
import Image from "next/image";
import { FaTruck, FaMoneyCheckAlt, FaHeadset } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
// import aboutImg from ""; // নিজের ইমেজ রাখো public ফোল্ডারে

const AboutPage = () => {
return (
<main className="bg-white text-gray-800">
  {/* ---------- Hero / Intro Section ---------- */}
  <section className="container   flex  md:flex-row items-center  justify-center">
    {/* Left Image */}
    <div className="md:w-1/2 w-full ">
      <Image src='/Group 73.png' width={570} height={490} alt="Image"></Image>
    </div>

    {/* Right Text */}
    <div className="md:w-1/2 w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Know About Our Ecommerce Business, History
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mattis neque ultrices mattis aliquam, malesuada diam est.
        Mauris metus mattis varius et et egestas quis ipsum.
        Accumsan faucibus vitae lobortis quis bibendum quam.
      </p>
      <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">
        Contact Us
      </button>
    </div>
  </section>

  {/* ---------- Our Features Section ---------- */}
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-3xl font-semibold mb-12">Our Features</h3>

      {/* Flex-based feature layout */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Feature 1 */}
        <div className="bg-white w-[250px] p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <FaTruck className="text-4xl text-orange-500 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Free Delivery</h4>
          <p className="text-gray-600 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Massa purus gravida.
          </p>
        </div>

        {/* Feature 2 */}
        <div
          className="bg-white w-[250px] p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center border-b-4 border-yellow-400">
          <FaMoneyCheckAlt className="text-4xl text-yellow-400 mb-4" />
          <h4 className="text-lg font-semibold mb-2">100% Cash Back</h4>
          <p className="text-gray-600 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Massa purus gravida.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white w-[250px] p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <MdHighQuality className="text-4xl text-orange-400 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Quality Product</h4>
          <p className="text-gray-600 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Massa purus gravida.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white w-[250px] p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <FaHeadset className="text-4xl text-blue-400 mb-4" />
          <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
          <p className="text-gray-600 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Massa purus gravida.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* ---------- Client Testimonial Section ---------- */}
  <section className="py-20 bg-[#F9FAFB] text-center">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-semibold mb-12">Our Client Say!</h3>

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Client Images */}
        <div className="flex justify-center gap-4 mb-6">
          <Image src="/client1.jpg" alt="Client 1" width={50} height={50} className="rounded-full" />
          <Image src="/client2.jpg" alt="Client 2" width={50} height={50} className="rounded-full" />
          <Image src="/client3.jpg" alt="Client 3" width={50} height={50} className="rounded-full" />
        </div>

        <h4 className="font-semibold text-gray-800 mb-2">Selina Gomez</h4>
        <p className="text-gray-600 text-sm mb-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla ultrices quam vel elit tincidunt aliquet ac id eros.
          Nam vitae enim metus, sed dapibus sapien ac nunc.
        </p>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  </section>
</main>
);
};

export default AboutPage;