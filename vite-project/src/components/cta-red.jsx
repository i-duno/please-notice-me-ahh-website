import { useState } from 'react'
import './header.css'

import LinkIcon from '../icons/external-link.svg?react';

export function CTA({className, children, href}) {
  const [count, setCount] = useState(0)

  return (
    <div className={`flex flex-col justify-center w-full h-full
     bg-red-500 hover:bg-red-500 border-2 border-red-500 hover:border-white rounded-xl transition-colors duration-300 
     linear shadow-xl/50 shadow-black group ${className}`}>
      
      
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