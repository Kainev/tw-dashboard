import { useState } from 'react';
import { useRouter } from 'next/router';


import { FiChevronsLeft } from 'react-icons/fi';


export function DesktopSidebar({open, setOpen}) {

  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <aside 
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={`fixed top-0 left-0 z-10 flex-none ${open || hover ? 'w-60' : 'w-24'} ${hover && !open ? 'shadow-lg' : ''} shadow-black/25 transition-all`}
    >
      <div className='h-screen overflow-x-hidden backdrop-blur-lg flex flex-col p-4'>
        <button className={`fixed top-4 right-4 text-transparent outline`} onClick={() => setOpen(!open)}>
          <FiChevronsLeft className={`w-8 h-8 ${!open && !hover ? 'text-transparent' : 'text-gray-400'} ${!open ? 'rotate-180' : ''} hover:text-white transition cursor-pointer`}/>
        </button>
        <div className='grow mt-8 text-scheme'>Top ya </div>
        <button className='text-scheme' onClick={() => router.push('/test')}>Test Page</button>
        <div>Bottom</div>
      </div>
    </aside>
  );
}


