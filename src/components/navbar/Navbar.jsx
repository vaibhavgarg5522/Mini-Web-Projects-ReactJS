import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full'>
      <nav className='flex justify-between bg-green-900 text-white p-3'>
      <div className="logo"><span className='font-bold text-xl mx-8'>iTask</span></div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all duration-500'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-500 '>Your Task</li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar