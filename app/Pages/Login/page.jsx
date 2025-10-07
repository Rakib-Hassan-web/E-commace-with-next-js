import Link from 'next/link'
import React from 'react'
import { FaLock, FaUser } from 'react-icons/fa'

const page = () => {
  return (
    <>
    
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[400px] bg-white shadow-lg rounded-md p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please login using account detail bellow.
        </p>

        {/* Email */}
        <div className="flex items-center border rounded mb-4 px-3 py-2">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Password */}
        <div className="flex items-center border rounded mb-2 px-3 py-2">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none text-sm"
          />
        </div>

        <div className="text-right text-sm mb-4">
          <Link href="#" className="text-blue-500 hover:underline">
            Forgot your password?
          </Link>
        </div>

        {/* Button */}
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded mb-4">
          Sign In
        </button>

        <p className="text-sm text-center text-gray-500">
          Don&apos;t have an Account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
    
    
    </>
  )
}

export default page