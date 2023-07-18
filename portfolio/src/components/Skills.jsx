import React from 'react'
import Book from "../assets/book3.png"
import { Bootstrap, CSS, Github, HTML, JavaScript, ReactJS, Tailwind, TypeScript } from '../assets/skillsIcon'
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className='container p-4 mx-auto pb-16 xs:pb-24 md:pb-32 2xl:pb-48 text-center md:text-start' id='skills'>
        <h1 ref={myRef} className={myElementIsVisible ? 'font-typewriter text-5xl xl:text-7xl 2xl:text-8xl mb-20 opacity-100 duration-1000 -translate-x-0 blur-0' : 'font-typewriter text-5xl xl:text-7xl 2xl:text-8xl mb-20 opacity-0 duration-300 -translate-x-full blur-[5px]'}>Le mie skills:</h1>
        <div className='flex flex-col-reverse col items-center xl:flex-row justify-between'>
          <div>
            <img src={Book} alt="a Book" ref={myRef} className={myElementIsVisible ? 'w-[500px] mt-10 xl:mt-0 opacity-100 duration-1000 -translate-x-0 blur-0' : 'w-[500px] mt-10 xl:mt-0 opacity-0 duration-300 -translate-x-full blur-[5px]'}/>
          </div>
          <div>
            <div className='grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 gap-20'>
              <div ref={myRef} className={myElementIsVisible ? 'rotate-3 opacity-100 duration-1000 blur-0 delay-200' : 'opacity-0 duration-300 blur-[5px] rotate-3'}>
                <img src={ReactJS} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>React</p>
              </div>
              <div ref={myRef} className={myElementIsVisible ? '-rotate-3 opacity-100 duration-1000 blur-0 delay-[400ms]' : 'opacity-0 duration-300 blur-[5px] -rotate-3'}>
                <img src={JavaScript} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>JavaScript</p>
              </div>
              <div ref={myRef} className={myElementIsVisible ? 'rotate-3 opacity-100 duration-1000 blur-0 delay-[600ms]' : 'opacity-0 duration-300 blur-[5px] rotate-3'}>
                <img src={TypeScript} alt="" className='hover:scale-[1.05] '/>
                <p className='text-center font-typewriter text-xl mt-2'>TypeScript</p>
              </div>
              <div ref={myRef} className={myElementIsVisible ? '-rotate-3 opacity-100 duration-1000 blur-0 delay-[800ms]' : 'opacity-0 duration-300 blur-[5px] -rotate-3'}>
                <img src={Github} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>Github</p>
              </div>
              <div ref={myRef} className={myElementIsVisible ? 'rotate-3 opacity-100 duration-1000 blur-0 delay-[1000ms]' : 'opacity-0 duration-300 blur-[5px] rotate-3'}>
                <img src={Tailwind} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>Tailwind</p>
              </div>
              <div ref={myRef} className={myElementIsVisible ? '-rotate-3 opacity-100 duration-1000 blur-0 delay-[1200ms]' : 'opacity-0 duration-300 blur-[5px] -rotate-3'}>
                <img src={Bootstrap} alt="" className='hover:scale-[1.05]'/>
                <p className='text-center font-typewriter text-xl mt-2'>Bootstrap</p>
              </div>
              <div ref={myRef} className={myElementIsVisible ? 'rotate-3 opacity-100 duration-1000 blur-0 delay-[1400ms]' : 'opacity-0 duration-300 blur-[5px] rotate-3'}>
                <img src={HTML} alt="" className='hover:scale-[1.05] '/>
                <p className='text-center font-typewriter text-xl mt-2'>HTML</p>
              </div>
              <div ref={myRef} className={myElementIsVisible ? '-rotate-3 opacity-100 duration-1000 blur-0 delay-[1600ms]' : 'opacity-0 duration-300 blur-[5px] -rotate-3'}>
                <img src={CSS} alt="" className='hover:scale-[1.05] '/>
                <p className='text-center font-typewriter text-xl mt-2'>CSS</p>
              </div>
            </div>
            <p ref={myRef} className={myElementIsVisible ? 'font-typewriter text-2xl md:text-3xl 2xl:text-4xl text-center mt-20 opacity-100 duration-1000 blur-0 -translate-x-0' : 'font-typewriter text-2xl md:text-3xl 2xl:text-4xl text-center mt-20 opacity-0 duration-300 blur-[5px] translate-x-full'}>E non solo...</p>
          </div>
        </div>
    </section>
  )
}

export default Skills