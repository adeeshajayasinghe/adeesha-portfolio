import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'
import { FaKaggle } from 'react-icons/fa'
import { FiAlignJustify } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react'
import { NAV_LINKS } from '../constants'
import {Link} from 'react-scroll'
import NavLink from './NavLink'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='mb-2 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          {/* <img className='mx-2 w-10' src={logo} alt='logo'/> */}
          <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {NAV_LINKS.map((nav, index) => (
              <li key={nav.id} className={'font-sans font-normal cursor-pointer text-[16px] text-white mr-5'}>
                <NavLink href={nav.id} title={nav.title}/>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center text-2xl'>
            {toggle ? (
              <TfiClose onClick={() => setToggle((prev) => !prev)} />
            ) : (
              <FiAlignJustify onClick={() => setToggle((prev) => !prev)} />
            )}

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gray-800 absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-start items-start flex-1'>
              {NAV_LINKS.map((nav, index) => (
                <li key={nav.id} className='font-sans font-normal cursor-pointer text-[16px] text-white mb-4'>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          </div>
        </div>
       
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href='https://www.linkedin.com/in/adeesha-jayasinghe/' target='_blank' rel='noopener noreferrer' className='hover:text-gray-700'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/adeeshajayasinghe' target='_blank' rel='noopener noreferrer' className='hover:text-gray-700'>
            <FaGithub />
          </a>
          <a href='https://medium.com/@adeeshaiduwara99' target='_blank' rel='noopener noreferrer' className='hover:text-gray-700'>
            <FaMedium />
          </a>
          <a href='https://www.kaggle.com/adeeshajayasinghe' target='_blank' rel='noopener noreferrer' className='hover:text-gray-700'>
            <FaKaggle />
          </a>
        </div>

    </nav>
  )
}
