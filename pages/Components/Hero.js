import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
        <div className='.max-w-full .h-auto w-full h-full  bg-hero-pattern bg-fixed md:bg-right-top '>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
        </div>


       <div className='absolute top-0 left-0 flex flex-col justify-center w-full h-full p-24 text-white max-w-[650px]'>
        <p className='pb-4 text-xl md:text-2xl'>Welcome to TUTORium</p>
        <h1 className='text-xl md:text-3xl'> Best Tutorials Expertise</h1>
        <p className='text-xl md:text-2xl'> Best One-Stop-Shop Tutorial Experiences in the World</p>
        <div className='flex flex-row max-w-[480px] mt-4 justify-between'>
          <button className='w-3/6 duration-150 ease-in bg-regester hover:scale-110' type='submit'>Register</button>
          <button className='w-3/6 ml-2 duration-150 ease-in bg-login text-regester hover:scale-110' type='submit'>Login</button>
        </div>
        
       </div>
    
       
    </div>
  )
}


export default Hero