import './header.css'

import MenuIcon from '../icons/menu.svg?react';
import CS1AIcon from '../icons/cs1a.svg?react';
import CTA from './cta'
import CTAMin from './cta-mini'

export function Header() {
  return (
    <div className="sticky top-0 z-30 grid grid-cols-24 gap-2 md:gap-4 lg:gap-6 items-center justify-between w-full h-16 bg-primary-gray-100 px-6 py-3 shadow-lg/30 border-b-2 border-b-white">
      <span className='col-span-1 lg:col-span-3 xl:col-span-2' />
      <MenuIcon className="col-span-3 sm:col-span-2 xl:col-span-1 h-11/12 cursor-pointer stroke-3 stroke-white" />
      <CS1AIcon className="hidden sm:block sm:col-span-2 xl:col-span-1 h-10/12 xl:h-10/12 -mx-6 cursor-pointer stroke-3 fill-black" />
      <p className='col-span-6 hidden md:block lg:col-span-4 xl:col-span-10 md:-mx-4 lg:-mx-6 font-bold font-sans text-white text-sm lg:text-lg text-left'>react frfr</p>
      <span className='block col-span-1 sm:col-span-3 md:hidden'></span>
      <div className='col-span-6 md:col-span-4 gap-2 flex flex-row justify-end items-center'>
        <CTAMin className='' href={'https://github.com/i-duno/please-notice-me-ahh-website'}>Source</CTAMin>
        <CTAMin className='' href={'https://github.com/i-duno/please-notice-me-ahh-website/blob/main/README.md'}>Docs</CTAMin>
        <CTAMin className='' href={'https://en.wikipedia.org/wiki/Special:Random'}>Wiki</CTAMin>
      </div>
      <CTA className='col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2' href={'https://www.w3schools.com'}>Socials</CTA>
      <CTA className='col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2' >About Us</CTA>
      <span className='col-span-1 lg:col-span-3 xl:col-span-2' />
    </div>
  )
}

export default Header