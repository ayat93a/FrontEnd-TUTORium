import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
        <div className='.max-w-full .h-auto w-full h-full  bg-hero-pattern bg-fixed md:bg-right-top '>
        </div>


       <div className='absolute top-0 left-0 flex flex-col justify-center w-full h-full p-4 text-white max-w-[650px]'>
        <p className='pb-4 text-xl md:text-2xl'>Welcome to TUTORium</p>
        <h1 className='text-xl md:text-3xl'> Best Tutorials Expertise</h1>
        <p className='text-xl md:text-2xl'> WE GUARANTEE THAT YOU WILL HAVE THE Most Amazing Experiences in the World</p>
        <div className='flex flex-row max-w-[400px] mt-4 justify-between'>
          <button className='w-3/6 ' type='submit'>Register</button>
          <button className='w-3/6 ml-2' type='submit'>Login</button>
        </div>
        
       </div>
    
       
    </div>
  )
}


export default Hero