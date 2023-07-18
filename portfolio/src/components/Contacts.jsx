import React from 'react'
import { useInView } from 'react-intersection-observer';
import Firma from '../assets/firma.png'

const Contacts = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <section className='container p-4 mx-auto pb-16 xs:pb-24 md:pb-32 2xl:pb-48' id='contattami'>
          <form className='flex flex-col gap-3 mx-auto max-w-[600px] w-full' action="https://getform.io/f/8de1651c-4bc5-4435-9f7b-cc69853be0f6" method='POST'>
            <h1 className='text-black text-5xl xl:text-7xl 2xl:text-8xl text-center font-typewriter'>Contattami</h1>
            <p className='text-black mb-8 font-typewriter text-center'>// Compila questo modulo o contattami a questa email - <span className='font-bold italic text-red-600'>cruciani240203@gmail.com</span></p>
            <input className='p-2 bg-transparent placeholder-gray-700 rounded-md border-2 border-black' type="text" name="name" placeholder='Nome' required />
            <input className='p-2 bg-transparent placeholder-gray-700 rounded-md border-2 border-black' type="email" name="email" placeholder='Email' required />
            <textarea className='p-2 bg-transparent placeholder-gray-700 rounded-md resize-none border-2 border-black' name="message" cols="30" rows="10" placeholder='Messaggio' required></textarea>
            <button className='bg-transparent border-2 border-black text-black hover:bg-black hover:text-white  py-2 font-typewriter rounded-md active:bg-[#5e5e5e]' type="submit">INVIA</button>
          </form>
          <div className='flex justify-center mt-20'>
            <img src={Firma} alt="Davide Cruciani" />
          </div>
    </section>
  )
}

export default Contacts