import React from 'react'

const Navbar = () => {
  return (
    
      <nav className=' bg-slate-900 flex flex-col md:justify-between items-center md:flex-row py-4 '>
          <div className="logo mx-auto md:mx-0">
            <span className='text-gray-50 text-2xl mx-9 font-bold'>TODO</span>
          </div>
            <ul className='text-white space-x-10 justify-center md:justify-normal flex mx-9 '>
                <li className='cursor-pointer hover:font-bold'>Home</li>
                <li className='cursor-pointer hover:font-bold'>Contact</li>
                <li className='cursor-pointer hover:font-bold'>About us</li>
            </ul>
      </nav>
  )
}

export default Navbar
