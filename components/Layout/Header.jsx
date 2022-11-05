// React
import { useState, useEffect, Fragment } from 'react';

// Headless
import { Popover, RadioGroup, Transition } from '@headlessui/react';

// Icons
import { BsMoonStars} from 'react-icons/bs';
import { MdOutlineManageAccounts, MdOutlineNotificationsNone, MdAutoAwesome, MdOutlineFilterCenterFocus, MdBorderTop, MdBorderClear, MdOutlinePushPin } from 'react-icons/md';
import { BiSun, BiMoon } from 'react-icons/bi';
import { RiBrushLine } from 'react-icons/ri';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';

// Hooks
import useDarkMode from '../../hooks/useDarkMode';

export function Header() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log(window.pageYOffset);
      setScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    setScrolled(window.pageYOffset > 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <header className={`sticky top-0 px-8 h-16 flex justify-end items-center ${ scrolled ? 'dark:bg-darkground-lighter/50 shadow-lg mx-2 rounded-b-xl bg-lightground-lighter/80' : 'dark:bg-darkground' } shadow-gray-900/5 dark:shadow-gray-900/30 backdrop-blur-lg transition-all duration-300`}>
      <div className='flex gap-6'>
        <SettingsPopover />

        <NotificationsPopover />
        <button> 
          <MdOutlineManageAccounts className='w-7 h-7 text-scheme opacity-80'/>
        </button>

      </div>
    </header>
  );
}

function SettingsPopover() {
  const [theme, setTheme] = useState('system');
  const [content, setContent] = useState('stretch');
  const [header, setHeader] = useState('pinned');

  return (
    <Popover>
      <Popover.Button className='flex focus:outline-0'>
          <RiBrushLine className='w-7 h-7 text-scheme opacity-80'/>
      </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute right-20 top-14 z-10">
            <div className='flex flex-col bg-scheme-lighter py-4 rounded-xl shadow-lg'>
              {/* THEME */}
              <span className='opacity-80 text-scheme px-4 font-bold'>Theme</span>
              <RadioGroup value={theme} onChange={setTheme}>
                <RadioGroup.Option value='light'>
                  {({checked}) => (
                    <div className={`flex items-center gap-4 opacity-80 px-4 py-2 cursor-pointer transition duration-100 ${ checked ? 'text-[#787eff]' : 'hover:bg-[#787eff]/20'}`}>
                      <BiSun className='w-5 h-5'/>
                      <span>Light</span>
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value='dark'>
                  {({checked}) => (
                    <div className={`flex items-center gap-4 opacity-80 px-4 py-2 cursor-pointer transition duration-100 ${ checked ? 'text-[#787eff]' : 'hover:bg-[#787eff]/20'}`}>
                      <BiMoon className='w-5 h-5'/>
                      <span>Dark</span>
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value='system'>
                  {({checked}) => (
                    <button className={`flex items-center gap-4 opacity-80 px-4 py-2 cursor-pointer transition duration-100 ${ checked ? 'text-[#787eff]' : 'hover:bg-[#787eff]/20'}`}>
                      <MdAutoAwesome className='w-5 h-5' />
                      <span>System</span>
                    </button>
                  )}
                </RadioGroup.Option>
              </RadioGroup>

              <div className='border border-dashed text-scheme opacity-0 dark:opacity-10 mx-4 my-2'/>
            
              {/* CONTENT */}
              <span className='opacity-80 text-scheme px-4 py-2 font-bold'>Content</span>

              <RadioGroup value={content} onChange={setContent}>
                <RadioGroup.Option value='focus'>
                  {({checked}) => (
                    <div className={`flex items-center gap-4 opacity-80 px-4 py-2 cursor-pointer transition duration-100 ${ checked ? 'text-[#787eff]' : 'hover:bg-[#787eff]/20'}`}>
                      <MdOutlineFilterCenterFocus className='w-5 h-5' />
                      <span>Focus</span>
                    </div>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value='stretch'>
                  {({checked}) => (
                    <button className={`flex items-center gap-4 opacity-80 px-4 py-2 cursor-pointer transition duration-100 ${ checked ? 'text-[#787eff]' : 'hover:bg-[#787eff]/20'}`}>
                      <HiOutlineArrowsExpand className='w-5 h-5' />
                      <span>Stretch</span>
                    </button>
                  )}
                </RadioGroup.Option>
              </RadioGroup>

              <div className='border border-dashed text-scheme opacity-0 dark:opacity-10 mx-4 my-2'/>

              {/* HEADER */}
              <span className='opacity-80 text-scheme px-4 py-2 font-bold'>Header</span>

              <RadioGroup value={header} onChange={setHeader}>
                <RadioGroup.Option value='pinned'>
                  {({checked}) => (
                    <div className={`flex items-center gap-4 opacity-80 px-4 py-2 cursor-pointer transition duration-100 ${ checked ? 'text-[#787eff]' : 'hover:bg-[#787eff]/20'}`}>
                      <MdOutlinePushPin className='w-5 h-5' />
                      <span>Pinned</span>
                    </div>
                  )}
                </RadioGroup.Option>

                <RadioGroup.Option value='static'>
                  {({checked}) => (
                    <div className={`flex items-center gap-4 opacity-80 px-4 py-2 cursor-pointer transition duration-100 ${ checked ? 'text-[#787eff]' : 'hover:bg-[#787eff]/20'}`}>
                      <TbLayoutSidebarLeftCollapse className='w-5 h-5 rotate-90' />
                      <span>Static</span>
                    </div>
                  )}
                </RadioGroup.Option>
              </RadioGroup>

            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
  );
}

function NotificationsPopover() {
  return (
    <Popover>
      <Popover.Button className='flex focus:outline-0'>
          <MdOutlineNotificationsNone className='w-7 h-7 text-scheme opacity-80'/>
      </Popover.Button>
        <Popover.Panel className="absolute z-10">
          <div className='bg-scheme'>
        hi
        </div>
        </Popover.Panel>
      </Popover>
  );
}
