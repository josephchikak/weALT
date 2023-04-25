import React from 'react'
import '../App.css'

const Navigation = () => {
  return (
    <div
    className='w-full bg-white h-[50px] flex justify-center gap-4 items-center  border-y-2 border-black cursor-pointer'>
        <nav className=''>
            <ul className='flex flex-row'>
                <li className='nav'>Home</li>
                <li className='nav'>About</li>
                <li id='contact' className='nav'>Contact us</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation