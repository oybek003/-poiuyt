import React from 'react'
import indus from '../assets/indus.png'

const main = () => {
  return (
    <div className='header bg-[#323946] text-white'>
      <nav className='flex items-center justify-between pr-[32px] pl-[32px] pt-[32px] pb-[32px] bg-[#323946] text-white'>
          <h1>Portfolio</h1>

          <ul className='flex items-center gap-[32px]'>
            <li className='hover:text-blue-400'>Home</li>
            <li className='hover:text-blue-400'>About</li>
            <li className='hover:text-blue-400'>Services</li>
            <li className='hover:text-blue-400'>Portfolio</li>
            <li className='hover:text-blue-400'>Contact</li>
          </ul>
      </nav>


    <div className="main flex items-center justify-around mt-[200px] pb-[40px]">
      <div className="text">
          <h1 className='text-[56px]'>John Kendric <br /> And I'm a <span className='text-[#00EEFF]'>Frontend Develo|</span></h1>
          <p className='pt-[32px] pb-[32px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla libero labore <br />exercitationem, iste iusto unde eos.</p>
            <button className='w-[150px] h-[50px] bg-[#00EEFF] hover:bg-transparent hover:border-1 rounded-[32px]'>Download CV</button>
      </div>

      <div className="img">
        <img src={indus} alt="" />
      </div>
    </div>
    </div>
  )
}

export default main