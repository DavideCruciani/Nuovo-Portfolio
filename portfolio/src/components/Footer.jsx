import React from 'react'
import Arrow from '../assets/arrow-up-solid.svg'
import Linkedin from '../assets/linkedin.svg'
import { Github } from '../assets/skillsIcon'

const Footer = () => {
  return (
    <footer className='w-full h-32 relative'>
      <div className="container w-full h-full flex flex-col md:flex-row items-center justify-between mx-auto p-4">
        <div>
          <p className='text-black text-sm md:text-lg font-typewriter'>Built and Designed by<br className='hidden md:block xl:hidden'/> <span className='text-red-600'>Davide Cruciani</span></p>
        </div>
        <div className='flex gap-3'>
          <a href="https://www.linkedin.com/in/davide-cruciani-7b696a270/" target='_blank'>
            <img className='w-6 h-6 md:w-8 md:h-8' src={Linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/DavideCruciani" target='_blank'>
            <img className='w-6 h-6 md:w-8 md:h-8' src={Github} alt="Github" />
          </a>
        </div>
      </div>
      <a href="#" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className='bg-red-600 rounded-full p-2'>
          <img className='w-4 h-4' src={Arrow} alt="up arrow" />
        </div>
      </a>
    </footer>
  )
}

export default Footer