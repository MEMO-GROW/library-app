import React from 'react'
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[url('assets/images/hero.png')] ">
      <div className=' w-[70%] flex flex-col text-center justify-center gap-5 backdrop-blur-md bg-white/30 rounded-full shadow-2xl p-8 border border-white/20 shadow-amber-600'>
       <div className='w-[100%] text-center'>
       <h1 className='text-[70px] font-bold  text-white'>Endless Knowledge,</h1>
       <p className='text-[60px] font-medium'> One Click Away</p>
       </div>
        <div>
        <p className='text-xl md:text-2xl italic'>"The journey of a lifetime begins with the turning of a page"</p>
        <span className='text-right block font-semibold  mt-2 mr-29'>-Rachel Anders</span>
        </div>

      </div>
        <Link to={'/login'} className='px-8 py-3 mt-10 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition duration-300 transform hover:-translate-y-1 hover:shadow-lg'>Get Started</Link>
      

    </div>
  )
}

export default Hero;