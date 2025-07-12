import React from 'react'
import img from '../assets/image.png'
import Card from '../components/Mainn.jsx'

const Abdurashid = () => {
  return (
    <div>
           <div className='bg-[#323946] w-100% h-[150vh]'>
      <h1 className='text-center text-white text-4xl pt-[50px]'>Latest <span className='text-[#00EEFF]'>Project</span></h1>
      <div className='flex flex-wrap justify-center gap-5 mt-[50px] pb-[150px]'> 
        <img className='w-[400px] rounded-4xl shadow-black shadow-2xl border-2xl border-black' src={img} alt="" />
        <img className='w-[400px] rounded-4xl shadow-black shadow-2xl border-2xl border-black' src={img} alt="" />
        <img className='w-[400px] rounded-4xl shadow-black shadow-2xl border-2xl border-black' src={img} alt="" />
        <img className='w-[400px] rounded-4xl shadow-black shadow-2xl border-2xl border-black' src={img} alt="" />
        <img className='w-[400px] rounded-4xl shadow-black shadow-2xl border-2xl border-black' src={img} alt="" />
        <img className='w-[400px] rounded-4xl shadow-black shadow-2xl border-2xl border-black' src={img} alt="" />
      </div>
      
      <div className='text-center pt-[150px] bg-[#1E242D] w-100% h-[800px]'>
        <h1 className='text-4xl text-white'>Contact <span className='text-[#00EEFF]'>Me!</span></h1>

        <div className='flex justify-center gap-5 mt-[50px]'>
          <input className='w-[220px] h-[40px] bg-[#323946] rounded-[10px] placeholder: text-gray-400 pl-[10px]' placeholder='Full Name' type="text" />
          <input className='w-[220px] h-[40px] bg-[#323946] rounded-[10px] placeholder: text-gray-400 pl-[10px]' placeholder='Email Address' type="text" />
        </div>

        <div className='flex justify-center gap-5 mt-[20px]'>
          <input className='w-[220px] h-[40px] bg-[#323946] rounded-[10px] placeholder: text-gray-400 pl-[10px]' placeholder='Mobile Number' type="text" />
          <input className='w-[220px] h-[40px] bg-[#323946] rounded-[10px] placeholder: text-gray-400 pl-[10px]' placeholder='Email Subject' type="text" />
        </div>

        <div className='mt-[20px]'>
          <input className='w-[460px] h-[300px] bg-[#323946] rounded-2xl' type="text" />
        </div>

        <button className='w-[150px] h-[30px] bg-[#00EEFF] rounded-4xl mt-[20px] shadow-2xl shadow-[#00EEFF] text-[13px]'>Send Message</button>
      </div>

      <div className='flex justify-between pl-[20px] pr-[20px] bg-[#323946] h-[50px] items-center'>
        <h2 className='text-white'>Copyright © 2023 by Codehal | All Rights Reserved.</h2>
        <button className='w-[30px] h-[30px] bg-[#00EEFF] rounded-[5px] shadow-2xl shadow-[#00EEFF] text-[20px] text-[#323946]'> <a href="<Card/>">↑</a></button>
      </div>
    </div>
    </div>
  )
}

export default Abdurashid
