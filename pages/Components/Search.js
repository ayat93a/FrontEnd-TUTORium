import React from 'react'

const Search = () => {
  return (
    <div>
        <div className='absolute top-0 left-0 flex flex-col justify-center w-full h-full p-4 text-center text-white'>
        <h1 className='text-xl md:text-3xl'> First Class Tutor </h1>
        <h2 className='text-xl md:text-3xl'> Most Amazing Experiences in the World</h2>
        <form className='flex justify-between max-w-[700px] items-center mx-auto w-full p-2 border rounded-md mt-2 bg-gray-100/90 text-black'>
            <div>
                <input className='bg-transparent w-[400px] sm:w-[630px] focus:outline-none' type='text' placeholder='What type of tutorials would you like to see?'></input>
            </div>
            <div>
                <button className='duration-150 ease-in icons hover:scale-110'>
                    <RiSearchLine className='ease-in duration-125 icons hover:scale-125' size={20} />
                </button>
            </div>
        </form>
       </div>
    </div>
  )
}

export default Search