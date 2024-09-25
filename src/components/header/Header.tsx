"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SiTradingview } from "react-icons/si";
import { FaRegUser, FaSun, FaMoon } from "react-icons/fa";
import { useSelector } from 'react-redux';

const top_navigations = [
  { id: 1, name: "Home", path: "/spy/chart" },
  { id: 2, name: "Dashboard", path: "/dashboard" },
  { id: 3, name: "Orders", path: "/orders" },
]

const Header = () => {
  const router = useRouter()
  const getStore = useSelector((state) => state);
  const token = false
  console.log(getStore,"getStore")

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode =()=>{
    setDarkMode(!darkMode)
    alert(darkMode)
  }
  return (
    <div className={`flex items-center justify-between p-4 shadow-md font-semibold ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <button onClick={() => { router.push('/') }}>
        <SiTradingview className="w-8 h-8 md:w-12 md:h-12" />
      </button>

      {/* Navigation */}
      <ul className='hidden md:flex items-center gap-6 lg:gap-10'>
        {top_navigations.map((el) => (
          <li className='cursor-pointer hover:text-blue-500 transition-colors' key={el.id} onClick={() => router.push(el.path)}>
            {el.name}
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-4 lg:gap-5'>
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-xl hover:text-yellow-500 transition-colors">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        { token ?
          <button  onClick={() => { router.push('/profile') }} className="text-xl hover:text-blue-500 transition-colors"><FaRegUser /></button>

        :
        <button
          className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-1 px-3 lg:py-2 lg:px-4 rounded hover:from-blue-600 hover:to-indigo-600 transition-colors'
          onClick={() => { router.push('/auth/login') }}
        >
          Get started
        </button>}
      </div>
    </div>
  )
}

export default Header
