import React, { useState, useEffect } from 'react'
import Menu from '../assets/menu/bars-solid.svg'
import Close from '../assets/menu/xmark-solid.svg'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  function ShowNavbar() {
    setShowNav(!showNav)
  }

  useEffect(() => {
    if (!showNav) {
      document.body.classList.toggle('overflow-hidden');
    } else {
      document.body.classList.toggle('overflow-hidden');
    }
  }, [showNav])

  return (
    <>
    <nav className='flex justify-between p-4 container mx-auto font-typewriter'>
      <div>
        <p className='text-lg lg:text-xl'>Davide Cruciani.</p>
      </div>
      <div>
        <ul className='gap-12 text-xl hidden lg:flex'>
          <li className='cursor-pointer'><a href="#">Home</a></li>
          <li className='cursor-pointer'><a href="#skills">Skills</a></li>
          <li className='cursor-pointer'><a href="#progetti">Progetti</a></li>
          <li className='cursor-pointer'><a href="#contattami">Contattami</a></li>
        </ul>
        <img src={Menu} alt="" className='w-[24px] h-[24px] block lg:hidden cursor-pointer' onClick={() => {ShowNavbar()}}/>
      </div>
    </nav>
    <div className={showNav ? 'w-full h-full fixed top-0 left-0 right-0 bg-[url(/src/assets/paper2.jpg)] block lg:hidden z-[100] -translate-x-0 duration-300' : 'w-full h-full fixed top-0 left-0 right-0 bg-[url(/src/assets/paper2.jpg)] z-[100] lg:hidden translate-x-full duration-200'}>
      <div className='container mx-auto p-4 h-full'>
        <div className='flex justify-between'>
          <div className='font-typewriter'>
            <p className='text-xl'>DC</p>
          </div>
          <div>
            <img src={Close} alt="" className='w-[30px] h-[30px] block lg:hidden cursor-pointer' onClick={() => {ShowNavbar()}}/>
          </div>
        </div>
        <div className='flex justify-center py-24 h-full'>
          <ul className='flex flex-col gap-y-20 text-3xl font-typewriter'>
            <li className='cursor-pointer'><a href="#" onClick={() => {ShowNavbar()}}>Home</a></li>
            <li className='cursor-pointer'><a href="#skills" onClick={() => {ShowNavbar()}}>Skills</a></li>
            <li className='cursor-pointer'><a href="#progetti" onClick={() => {ShowNavbar()}}>Progetti</a></li>
            <li className='cursor-pointer'><a href="#contattami" onClick={() => {ShowNavbar()}}>Contattami</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar