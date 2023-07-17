import React from 'react'
import Book from "../assets/book3.png"
import { Bootstrap, CSS, Github, HTML, JavaScript, ReactJS, Tailwind, TypeScript } from '../assets/skillsIcon'

const Skills = () => {
  return (
    <section className='container p-4 mx-auto sm:pb-24 md:pb-32 2xl:pb-48'>
        <h1 className='font-typewriter text-8xl mb-20'>Le mie skills:</h1>
        <div className='flex justify-between'>
          <div>
            <img src={Book} alt="" className='w-[500px]'/>
          </div>
          <div className='grid grid-cols-4 grid-rows-2 gap-20'>
            <div className='rotate-3'>
              <img src={ReactJS} alt="" className='w-[150px] hover:scale-[1.05]'/>
              <p className='text-center font-typewriter text-xl mt-2'>React</p>
            </div>
            <div className='rotate-3'>
              <img src={JavaScript} alt="" className='w-[150px] hover:scale-[1.05]'/>
              <p className='text-center font-typewriter text-xl mt-2'>JavaScript</p>
            </div>
            <div className='-rotate-3'>
              <img src={TypeScript} alt="" className='w-[150px] hover:scale-[1.05] '/>
              <p className='text-center font-typewriter text-xl mt-2'>TypeScript</p>
            </div>
            <div className='rotate-3'>
              <img src={Github} alt="" className='w-[150px] hover:scale-[1.05]'/>
              <p className='text-center font-typewriter text-xl mt-2'>Github</p>
            </div>
            <div className='-rotate-3'>
              <img src={Tailwind} alt="" className='w-[150px] hover:scale-[1.05]'/>
              <p className='text-center font-typewriter text-xl mt-2'>Tailwind</p>
            </div>
            <div className='rotate-3'>
              <img src={Bootstrap} alt="" className='w-[150px] hover:scale-[1.05]'/>
              <p className='text-center font-typewriter text-xl mt-2'>Bootstrap</p>
            </div>
            <div className='rotate-3'>
              <img src={HTML} alt="" className='w-[150px] hover:scale-[1.05] '/>
              <p className='text-center font-typewriter text-xl mt-2'>HTML</p>
            </div>
            <div className='-rotate-3'>
              <img src={CSS} alt="" className='w-[150px] hover:scale-[1.05] '/>
              <p className='text-center font-typewriter text-xl mt-2'>CSS</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills