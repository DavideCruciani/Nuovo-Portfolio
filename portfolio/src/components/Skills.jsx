import React from 'react'
import Book from "../assets/book3.png"
import { Bootstrap, CSS, Github, HTML, JavaScript, ReactJS, Tailwind, TypeScript } from '../assets/skillsIcon'

const Skills = () => {
  return (
    <section className='container p-4 mx-auto pb-16 xs:pb-24 md:pb-32 2xl:pb-48 text-center md:text-start' id='skills'>
        <h1 className='font-typewriter text-5xl xl:text-7xl 2xl:text-8xl mb-20'>Le mie skills:</h1>
        <div className='flex flex-col-reverse col items-center xl:flex-row justify-between'>
          <div>
            <img src={Book} alt="" className='w-[500px] mt-10 xl:mt-0'/>
          </div>
          <div>
            <div className='grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 gap-20'>
              <div className='rotate-3'>
                <img src={ReactJS} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>React</p>
              </div>
              <div className='-rotate-3'>
                <img src={JavaScript} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>JavaScript</p>
              </div>
              <div className='rotate-3'>
                <img src={TypeScript} alt="" className='hover:scale-[1.05] '/>
                <p className='text-center font-typewriter text-xl mt-2'>TypeScript</p>
              </div>
              <div className='-rotate-3'>
                <img src={Github} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>Github</p>
              </div>
              <div className='rotate-3'>
                <img src={Tailwind} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>Tailwind</p>
              </div>
              <div className='-rotate-3'>
                <img src={Bootstrap} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>Bootstrap</p>
              </div>
              <div className='rotate-3'>
                <img src={HTML} alt="" className='hover:scale-[1.05] '/>
                <p className='text-center font-typewriter text-xl mt-2'>HTML</p>
              </div>
              <div className='-rotate-3'>
                <img src={CSS} alt="" className='hover:scale-[1.05] '/>
                <p className='text-center font-typewriter text-xl mt-2'>CSS</p>
              </div>
            </div>
            <p className='font-typewriter text-2xl md:text-3xl 2xl:text-4xl text-center mt-20'>E non solo...</p>
          </div>
        </div>
    </section>
  )
}

export default Skills