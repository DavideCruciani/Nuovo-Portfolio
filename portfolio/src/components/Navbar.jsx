import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 container mx-auto font-typewriter'>
      <div>
        <p className='text-xl'>Davide Cruciani.</p>
      </div>
      <div>
        <ul className='flex gap-12 text-xl'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Skills</li>
          <li className='cursor-pointer'>Progetti</li>
          <li className='cursor-pointer'>Contattami</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar