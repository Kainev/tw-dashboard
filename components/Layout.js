
import { MdMenu } from 'react-icons/md';
import { FiChevronsLeft } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';

import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';

import useDarkMode from '../hooks/useDarkMode';


import { DesktopSidebar } from './Layout/SideBar';
import { Header } from './Layout/Header';

export default function Layout({children}) {
  const [open, setOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  

  return (

    <div className=''>
      <DesktopSidebar open={open} setOpen={setOpen} /> 
      
        <div className={`${open ? 'ml-60' : 'ml-24'} transition-all`}>
          <Header scrolled={scrolled}/>
          <main className='mt-4 ml-4 mr-4'>
            {children}
          </main>
        </div>
    </div>
  )
}



