import React from 'react'
import { Project1, Project2, Project3, Project4 } from '../assets/projects/projectsScreen'
import { ReactJS, Tailwind, TypeScript } from '../assets/skillsIcon'
import { useInView } from 'react-intersection-observer';

const Progetti = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section ref={myRef} className={myElementIsVisible ? 'container p-4 mx-auto pb-16 xs:pb-24 md:pb-32 2xl:pb-48 text-center md:text-start opacity-100 duration-1000 blur-0 -translate-x-0' : 'container p-4 mx-auto pb-16 xs:pb-24 md:pb-32 2xl:pb-48 text-center md:text-start opacity-0 duration-300 blur-[5px] -translate-x-full'} id='progetti'>
      <h1 className='font-typewriter text-5xl xl:text-7xl 2xl:text-8xl mb-20'>I miei progetti:</h1>

      <div className='mb-32 flex-col'>
        <img src={Project3} alt="" className='border-4 border-black'/>
        <div className='py-4'>
          <h2 className='font-typewriter text-4xl'>HOOBANK</h2>
          <p className='font-typewriter my-3'>Questo progetto è un'applicazione web sviluppata utilizzando React e Tailwind con l'obiettivo di creare una pagina di ingresso accattivante e moderna una banca. L'applicazione si basa su un design figma e mira a fornire un'esperienza visiva coinvolgente e informativa per gli utenti interessati ai servizi offerti da HooBank.</p>
          <div className='flex gap-6 mb-3 justify-center md:justify-start'>
            <img src={ReactJS} alt="TypeScript" className='w-[50px]'/>
            <img src={Tailwind} alt="Tailwind" className='w-[50px]'/>
          </div>
          <div className='flex justify-center md:justify-start'>
            <a href='https://hoobankdc.netlify.app/' target='_blank'>
              <button className='font-typewriter p-4 border-black border-[3px] mt-3 hover:bg-black hover:text-white mr-3'>Live Demo</button>
            </a>
            <a href='https://github.com/DavideCruciani/bank_modern_app' target='_blank'>
              <button className='font-typewriter bg-black text-white p-4 border-black border-[3px] mt-3 hover:bg-transparent hover:text-black'>Code</button>
            </a>
          </div>
        </div>
      </div>

      <div className='mb-32 flex-col'>
        <img src={Project1} alt="" className='border-4 border-black'/>
        <div className='py-4'>
          <h2 className='font-typewriter text-4xl'>IP ADDRESS TRACKER (API)</h2>
          <p className='font-typewriter my-3'>Questo progetto è un'applicazione web che consente agli utenti di inserire un indirizzo IP e ottenere la sua localizzazione sulla mappa. L'applicazione utilizza la libreria Leaflet per visualizzare la mappa interattiva e l'API di Ipify per recuperare le informazioni sulla localizzazione corrispondenti all'indirizzo IP inserito.</p>
          <div className='flex gap-6 mb-3 justify-center md:justify-start'>
            <img src={TypeScript} alt="TypeScript" className='w-[50px]'/>
            <img src={Tailwind} alt="Tailwind" className='w-[50px]'/>
          </div>
          <div className='flex justify-center md:justify-start'>
            <a href='https://ipify-geolocator.netlify.app/' target='_blank'>
              <button className='font-typewriter p-4 border-black border-[3px] mt-3 hover:bg-black hover:text-white mr-3'>Live Demo</button>
            </a>
            <a href='https://github.com/DavideCruciani/address-tracker' target='_blank'>
              <button className='font-typewriter bg-black text-white p-4 border-black border-[3px] mt-3 hover:bg-transparent hover:text-black'>Code</button>
            </a>
          </div>
        </div>
      </div>

      <div className='mb-32 flex-col'>
        <img src={Project2} alt="" className='border-4 border-black'/>
        <div className='py-4'>
          <h2 className='font-typewriter text-4xl'>BMW CLONE</h2>
          <p className='font-typewriter my-3'>Questo progetto è un'applicazione web sviluppata utilizzando React e Tailwind con l'obiettivo di ricreare fedelmente la pagina di ingresso del sito web ufficiale di BMW. La replica è completamente responsiva per dispositivi mobile. </p>
          <div className='flex gap-6 mb-3 justify-center md:justify-start'>
            <img src={ReactJS} alt="TypeScript" className='w-[50px]'/>
            <img src={Tailwind} alt="Tailwind" className='w-[50px]'/>
          </div>
          <div className='flex justify-center md:justify-start'>
            <a href='https://bmw-landingpage-clone.netlify.app/' target='_blank'>
              <button className='font-typewriter p-4 border-black border-[3px] mt-3 hover:bg-black hover:text-white mr-3'>Live Demo</button>
            </a>
            <a href='https://github.com/DavideCruciani/BMW-LANDING-PAGE-CLONE' target='_blank'>
              <button className='font-typewriter bg-black text-white p-4 border-black border-[3px] mt-3 hover:bg-transparent hover:text-black'>Code</button>
            </a>
          </div>
        </div>
      </div>

      <div className='flex-col'>
        <img src={Project4} alt="" className='border-4 border-black'/>
        <div className='py-4'>
          <h2 className='font-typewriter text-4xl'>SPACE TOURISM</h2>
          <p className='font-typewriter my-3'>Questo progetto è una challenge del sito Frontend Mentor, consiste nel sviluppare un sito web di turismo spaziale multi-pagina e farlo apparire il più fedele possibile al design messo a disposizione dal sito utilizzando tecnologie a tua scelta, per questo progetto ho utilizzato React, Tailwind e React Router per la navigazione multi-pagina.</p>
          <div className='flex gap-6 mb-3 justify-center md:justify-start'>
            <img src={ReactJS} alt="TypeScript" className='w-[50px]'/>
            <img src={Tailwind} alt="Tailwind" className='w-[50px]'/>
          </div>
          <div className='flex justify-center md:justify-start'>
            <a href='https://space-tourism-dc.netlify.app/' target='_blank'>
              <button className='font-typewriter p-4 border-black border-[3px] mt-3 hover:bg-black hover:text-white mr-3'>Live Demo</button>
            </a>
            <a href='https://github.com/DavideCruciani/Space-tourism-multi-page-website' target='_blank'>
              <button className='font-typewriter bg-black text-white p-4 border-black border-[3px] mt-3 hover:bg-transparent hover:text-black'>Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progetti