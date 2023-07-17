import React from 'react'

const Hero = ({ immagine }) => {
  return (
    <section className='container p-4 mx-auto py-48'>
      <div className='flex'>
        <div>
          <h1 className='font-typewriter text-9xl'>Frontend Developer</h1>
          <p className='font-typewriter text-xl mt-8'>Creativita' e codice si fondono per creare esperienze <br /> digitali coinvolgenti e innovative.</p>
          <button className='font-typewriter p-4 border-black border-[3px] mt-12 hover:bg-black hover:text-white'>Mettiamoci in contatto</button>
        </div>
        <div>
          <img className='w-[800px]' src={immagine} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero