import React from 'react'
import Image from 'next/image'
import logoImg from './img/image.png'
import { Icon } from '@iconify/react';

function Navbar() {
  return (
    <div>
      <section className='fixed w-full shadow-sm bg-[#fff] p-4 md:p-6 px-6 z-50 blur-sm'>
        <div className='md:max-w-[85%] m-auto flex items-center justify-between'>
          <header className='flex justify-between items-center w-full'>
            <div className="logo-img">
              <Image src={logoImg} alt="tkMotive" className='w-[81px] h-[30.24px] cursor-pointer'/>
            </div>

            <div className="toggle md:hidden">
              <Icon icon="ic:sharp-menu" className='text-[33px] cursor-pointer'></Icon>
            </div>
          </header>

          <nav className='hidden md:flex'>
            <ul className='text-[14px] text-[#5D5D5D] font-[400] flex items-center gap-9'>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PRICING</li>
              <li>PRODUCT</li>
              <li>
                <button className='text-[#fff] bg-[#E09427] rounded-[20px] p-2 px-3'>CONTACT</button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Navbar