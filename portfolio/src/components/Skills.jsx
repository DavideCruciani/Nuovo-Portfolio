import React from 'react'

const Skills = ({ immagine }) => {
  return (
    <section className='container p-4 mx-auto'>
      <div className='h-[1000px]'>
        <h1 className='font-typewriter text-8xl mb-20'>Le mie skills:</h1>
        <div className=''>
          <div className=''>
            <img src={immagine} alt="" className='w-[600px]'/>
          </div>
          <div className=''>
            <img src="" alt="" />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Skills