import './header.css'

import LinkIcon from '../icons/external-link.svg?react';

export function CTA({className, children, href}) {

  return (
    <div className={`flex flex-col justify-center w-full h-full
    from-red-500 to-red-600 bg-linear-180 hover:bg-red-500 border-2 border-red-500 hover:border-white rounded-xl transition-colors duration-300 
     linear shadow-xl/50 shadow-black group cursor-pointer inset-shadow-xl${className}`}>
      
      
      <a href={href} className='transition-colors duration-300 linear grid grid-cols-6 justify-between items-center px-2 text-white!'>
        <p className='flex flex-col items-center col-span-5 text-center text-white text-lg font-medium
        transition-colors duration-300 linear group-hover:under'>

          {children}
        </p>
        <LinkIcon className='col-span-1 justify-self-end' />
      </a>
    </div>
  )
}

export default CTA