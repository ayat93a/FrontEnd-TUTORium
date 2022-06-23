import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenu} from 'react-icons/hi'
import { AiOutlineClose} from 'react-icons/ai'
import {BsSuitHeart , BsCart} from 'react-icons/bs'

const Header = () => {
  const [nav , setNav] = useState(false)
  const [logo , setLogo] = useState(false)
  const handelNav= () =>{
    setNav(!nav)
    setLogo(!logo)
  }
  
  return (
      <div className='absolute z-10 flex items-center justify-between w-full h-20 px-4 text-white bg-'>
      <div>
      <h1 onClick={handelNav} className={logo ? 'hidden' : 'block'}>TUTORium.</h1>
      </div>
      
      <ul className='hidden md:flex'>
        <li className='duration-150 ease-in hover:scale-110'>Home</li>
        <li className='duration-150 ease-in hover:scale-110'>Categories</li>
        <li className='duration-150 ease-in hover:scale-110'>Our-Vision</li>
        <li className='duration-150 ease-in hover:scale-110'>About-Us</li>
        <li className='duration-150 ease-in hover:scale-110'>Book</li>
      </ul>
      
      <div className='hidden md:flex '>
        {/* <AiOutlineSearch size={20} className = 'mr-4' /> */}
        <BsPerson  size={20} className = 'mr-4 duration-150 ease-in cursor-pointer hover:scale-150 shadow-gray-500' />
        <BsSuitHeart  size={20} className = 'mr-4 duration-150 ease-in cursor-pointer hover:scale-150 shadow-gray-500' />
        <BsCart size={20} className = 'mr-4 duration-150 ease-in cursor-pointer hover:scale-150 shadow-gray-500' />
      </div>
     
     
   
       
      {/* small devices */}
      <div className='z-20 md:hidden' onClick={handelNav} >
        {/* Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the z-{index} utilities. */}
        {nav? <AiOutlineClose size={20} className='-my-4 text-black cursor-pointer hover:scale-125 ' /> : <HiOutlineMenu size={20} className='cursor-pointer hover:scale-125'  />}
       
      </div>
      <div onClick={handelNav} className={nav ? 'absolute top-0 left-0 flex flex-col w-full px-4 text-black bg-gray-100/90 py-7 md:hidden z-10 ' : 'text-black z-10 md:hidden absolute left-[-100%] '}>
        
      <ul>
        <h1 className='-my-2 border-b '>TUTORium.</h1>
        <li className='my-4 duration-300 ease-in border-b hover:scale-105'>Home</li>
        <li className='my-4 duration-300 ease-in border-b hover:scale-105'>Categories</li>
        <li className='my-4 duration-300 ease-in border-b hover:scale-105'>Our-Vision</li>
        <li className='my-4 duration-300 ease-in border-b hover:scale-105'>About-Us</li>
        <li className='my-4 duration-300 ease-in border-b hover:scale-105'>Book</li>

        <div className='flex justify-between pb-0 mb-0 cursor-pointer max-w-[250px] ml-20 ' >
          <BsPerson  className='duration-150 ease-in cursor-pointer hover:scale-150 icon shadow-gray-500 ' size={25} />
          <BsSuitHeart  className='duration-150 ease-in cursor-pointer icon shadow-gray-500 hover:scale-150 'size={25} />
          <BsCart className='duration-150 ease-in cursor-pointer icon shadow-gray-500 hover:scale-150 ' size={25} />
          
        </div>
      </ul>
      </div>
      
    </div>
    
    
  )
}

export default Header