import React, { useState } from 'react';
import logo from '../../images/logo-light.png'
import { Link } from 'react-router-dom';
import { MenuAlt3Icon, PhoneIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-slate-900 px-2 sm:px-16 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between'>
                  {/* nav logo  */}
              <div className='md:pr-20'>
                  <Link to='/'>
                     <img className='w-24 md:w-56' src={logo} alt="" />
                  </Link>
              </div>
                {/* nav contact  */}
              <div className='invisible md:visible flex items-center  md:px-8 md:border-solid md:border-x-2 md:border-blue-300 '>
                 <div>
                 <PhoneIcon className="h-12 w-12 text-blue-400 pr-4"/>
                 </div>
                 <div className='text-white'>
                     <p className='font-normal text-sm'>Call Us Today!</p>
                     <p className='font-semibold text-2xl tracking-wide hover:text-blue-400 duration-150 cursor-pointer'>01711123456</p>
                 </div>
              </div>
            </div>
              {/* nav menu */}
              <div className='md:pl-8'>
                  <div onClick={()=> setOpen(!open)}>
                     {
                         open? <XIcon className='h-7 w-7 md:hidden text-blue-500'/> :  <MenuAlt3Icon className='h-7 w-7 md:hidden text-blue-500'/>
                     }
                  </div>
                  <ul className={`md:flex justify-end md:space-x-8 text-white font-bold ${open ? "mt-6 absolute block w-full left-0 bg-slate-900 py-2 text-center duration-500 ease-in " :"hidden"} `}>
                      <li><Link className='hover:text-blue-500 duration-300' to='/home'>HOME</Link></li>
                      <li><Link className='hover:text-blue-500 duration-300' to='/about'>ABOUT</Link></li>
                      <li><Link className='hover:text-blue-500 duration-300' to='/boats' >BOATS BOOKING</Link></li>
                      <li><Link className='hover:text-blue-500 duration-300' to='/contact' >CONTACT</Link></li>
                  </ul>
              </div>
          </div>
        </nav>
    );
};

export default Header;