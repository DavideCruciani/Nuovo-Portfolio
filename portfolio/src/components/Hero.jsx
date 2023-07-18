import React from 'react'
import Typed from 'react-typed';
import Typewriter from "../assets/typewriter.png"
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className='container p-4 mx-auto py-16 xs:py-24 md:py-32 2xl:py-48 text-center md:text-start'>
      <div className='flex flex-col md:flex-row'>
        <div ref={myRef} className={myElementIsVisible ? 'md:w-2/4 opacity-100 duration-1000 -translate-y-0 blur-0' : 'md:w-2/4 opacity-0 duration-300 translate-y-32 blur-[5px]'}>
          <h1 className='font-typewriter text-5xl h-[101px] w-[350px] xs:w-auto mx-auto xs:text-7xl xs:h-[158px] xl:text-8xl xl:h-[210px] 2xl:text-9xl 2xl:h-[280px]'>
            <Typed strings={['Frontend\nDeveloper', 'Quick\nLearner', 'Creative\nMind']} typeSpeed={90} backSpeed={90} backDelay={1000} startDelay={1000} showCursor={false} loop/>
          </h1>
          <p className='font-typewriter sm:text-lg xl:text-xl mt-2'>Creativita' e codice si fondono per creare esperienze <br className='hidden 2xl:block' /> digitali coinvolgenti e innovative.</p>
          <a href="#contattami">
            <button className='font-typewriter p-4 border-black border-[3px] mt-6 xl:mt-12 hover:bg-black hover:text-white'>Mettiamoci in contatto</button>
          </a>
        </div>
        <div className='md:w-2/4 mt-6 xl:mt-0'>
          <img ref={myRef} className={myElementIsVisible ? 'w-full xl:-mt-20 opacity-100 duration-1000 -translate-x-0 blur-0' : 'w-full xl:-mt-20 opacity-0 duration-300 translate-x-full blur-[5px]'} src={Typewriter} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero