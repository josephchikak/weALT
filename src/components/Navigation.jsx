import React from 'react'
import '../App.css'

const Navigation = () => {
  return (
    <div
    className='w-full bg-black h-[50px] flex justify-center gap-4 items-center  border-y-2 border-black'>
        <nav className=' cursor-pointer'>
            <ul className='flex flex-row'>
                <li className='nav text-white'>Home</li>
                <li className='nav text-white'>About</li>
                <li id='contact' className='nav'>Contact us</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation