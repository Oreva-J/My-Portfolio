import React from 'react'
import { navLinks, socialIcons } from '../constants'
import DIcon from './DIcon'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-slate-800 relative flex flex-col  sm:items-around justify-center'>
        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#050816" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,192C640,203,800,181,960,170.7C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

      <div className=''>
        <div className='flex flex-col sm:flex-row sm:justify-around '>
            <div>
                <p className=''> Quick Links </p>
                <ul className='list-none flex flex-row gap-5 my-5'>
                    {navLinks.map((nav) => (
                        <li
                        key={nav.id}
                        className={` text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
                        >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=' hidden sm:block max-h-[70px] w-1 bg-slate-500 '></div>
            <div >
                <p>Social Media Links</p>
                <div className='flex gap-5 my-5'>
                    <a href="">
                        <FaFacebook size={40} className=' text-white' />
                    </a>
                    <a href="/" className='bg-white p-0 rounded-md'>
                        <FaLinkedin size={40} className=' text-blue-600' />
                    </a>
                    <a href="/">
                        <FaInstagram size={40} className=' text-orange-700' />
                    </a>
                    <a href="/">
                        <FaX size={40} className=' text-white'/>
                    </a>
                </div>
            </div>
        </div>
        <p className='text-center'>All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
