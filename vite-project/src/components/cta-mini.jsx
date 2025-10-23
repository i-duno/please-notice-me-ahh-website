import { useState } from 'react'
import './cta-mini.css'
export function CTA({className, children, href}) {
  const [count, setCount] = useState(0)

  return (
    <a href={href} className= {`group transition-colors duration-300 linear grid
    grid-cols-6 justify-between items-center px-2 text-white! ${className}`}>
      <p className='relative flex flex-col items-center col-span-6 text-center text-white font-normal
      transition-colors duration-300 linear group-hover:under text-xs md:text-sm'>

        {children}
        <span className='absolute w-0 h-0.5 bottom-0 -mb-1 rounded-full group-hover:w-10/12 bg-white transition-all duration-300 linear'></span>
      </p>
    </a>
  )
}

export default CTA