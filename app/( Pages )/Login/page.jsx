'use client';
import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FBEBB5] to-[#F5D491]">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h2>

        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-400">
              <FiMail className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>
          </div>
<h2>ljfiov</h2>
          {/* Password Field */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-400">
              <FiLock className="text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 ml-2 focus:outline-none"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="text-xl" />
                ) : (
                  <AiOutlineEye className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-yellow-400" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-yellow-500">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded-xl hover:bg-yellow-500 transition"
          >
            Login
          </button>

          {/* Signup Text */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="font-semibold text-yellow-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default page;
