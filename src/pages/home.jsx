import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-3">
      <div className="w-full max-w-[400px] h-[95vh] bg-gray-50 border border-gray-300 rounded-2xl p-2 overflow-hidden flex flex-col">

        {/* Image Section - 70% */}
        <div className="flex-[7]">
          <img
            src="https://plus.unsplash.com/premium_photo-1727197587817-6be08db433f9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Welcome"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Content Section - 30% */}
        <div className="flex-[3] flex flex-col justify-center pt-2 ">
          <h1 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Welcome to PopX
          </h1>

          <p className="text-sm sm:text-sm md:text-md  text-gray-500 mb-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, cupiditate!
          </p>

          <button className="w-full text-sm bg-violet-600 text-white py-2 rounded-md font-semibold cursor-pointer">
            Create Account
          </button>

          <button className="w-full mt-3 text-sm bg-violet-200 text-gray-900 py-2 rounded-md font-semibold cursor-pointer">
            Already Registered? Login
          </button>
        </div>

      </div>
    </div>
  );
}


