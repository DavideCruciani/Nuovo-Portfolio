import React from 'react'
import Typed from 'react-typed';

const Hero = ({ immagine }) => {
  return (
    <section className='container p-4 mx-auto sm:py-24 md:py-32 2xl:py-48'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-2/4'>
          <h1 className='font-typewriter text-8xl h-[210px] 2xl:text-9xl 2xl:h-[280px]'>
            <Typed strings={['Frontend\nDeveloper', 'Fast\nLearner', 'Creative\nMind']} typeSpeed={90} backSpeed={90} showCursor={false} loop/>
          </h1>
          <p className='font-typewriter text-xl'>Creativita' e codice si fondono per creare esperienze <br className='hidden 2xl:block' /> digitali coinvolgenti e innovative.</p>
          <button className='font-typewriter p-4 border-black border-[3px] mt-12 hover:bg-black hover:text-white'>Mettiamoci in contatto</button>
        </div>
        <div className='md:w-2/4'>
          <img className='w-full xl:-mt-20' src={immagine} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero