import React from 'react'

const main = () => {
  return (
    <div>
      <nav className='flex items-center justify-between mr-[32px] ml-[32px] mt-[32px]'>
          <h1>Portfolio</h1>

          <ul className='flex items-center gap-[32px]'>
            <li className='hover:text-blue-400'>Home</li>
            <li className='hover:text-blue-400'>About</li>
            <li className='hover:text-blue-400'>Services</li>
            <li className='hover:text-blue-400'>Portfolio</li>
            <li className='hover:text-blue-400'>Contact</li>
          </ul>
      </nav>
    </div>
  )
}

export default main