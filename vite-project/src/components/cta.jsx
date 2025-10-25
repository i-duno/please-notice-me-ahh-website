import './cta.css'

import LinkIcon from '../icons/arrow-up-right.svg?react';

export function CTA({className, children, href}) {
  return (
    <div className={`flex flex-col justify-center w-full h-full
     bg-primary-gray-100 hover:bg-white rounded-xl transition-colors duration-300 
     linear border-2 border-white group cursor-pointer ${className}`}>
      
      <a href={href} className=' group-hover:text-black! transition-colors duration-300 linear grid grid-cols-6 justify-between items-center px-2 text-white!'>
        <p className='relative flex flex-col items-center col-span-5 text-center text-white font-normal group-hover:text-black
        transition-colors duration-300 linear group-hover:under text-xs md:text-sm'>

          {children}
          <span className='absolute w-0 h-0.5 bottom-0 -mb-1 rounded-full group-hover:w-10/12 bg-black transition-all duration-300 linear'></span>
        </p>
        <LinkIcon className='col-span-1 justify-self-end' />
      </a>
      
    </div>
  )
}

export default CTA