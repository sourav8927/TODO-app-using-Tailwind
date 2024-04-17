import React from 'react'

const Navbar = () => {
  return (
    
      <nav className=' bg-slate-900  justify-between flex py-4'>
          <div className="logo">
            <span className='text-gray-50 text-2xl mx-9 font-bold'>TODO</span>
          </div>
            <ul className='text-white gap-[6vh] flex mx-9'>
                <li className='cursor-pointer hover:font-bold'>Home</li>
                <li className='cursor-pointer hover:font-bold'>Contact</li>
                <li className='cursor-pointer hover:font-bold'>About us</li>
            </ul>
      </nav>
  )
}

export default Navbar
