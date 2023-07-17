import React from 'react'
import Typed from 'react-typed';
import Typewriter from "../assets/typewriter.png"

const Hero = () => {
  return (
    <section className='container p-4 mx-auto sm:py-24 md:py-32 2xl:py-48'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-2/4'>
          <h1 className='font-typewriter text-5xl h-[105px] sm:text-7xl sm:h-[158px] xl:text-8xl xl:h-[210px] 2xl:text-9xl 2xl:h-[280px]'>
            <Typed strings={['Frontend\nDeveloper', 'Fast\nLearner', 'Creative\nMind']} typeSpeed={90} backSpeed={90} showCursor={false} loop/>
          </h1>
          <p className='font-typewriter text-lg xl:text-xl'>Creativita' e codice si fondono per creare esperienze <br className='hidden 2xl:block' /> digitali coinvolgenti e innovative.</p>
          <button className='font-typewriter p-4 border-black border-[3px] mt-6 xl:mt-12 hover:bg-black hover:text-white'>Mettiamoci in contatto</button>
        </div>
        <div className='md:w-2/4'>
          <img className='w-full xl:-mt-20' src={Typewriter} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero