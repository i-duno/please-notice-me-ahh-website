import { useState } from 'react'
import './card.css'
import CTA from './cta.jsx'

export function Card({className, children, href}) {
  const [count, setCount] = useState(0)

  return (
    <div className="shadow-lg/50 flex-1 w-full flex flex-col justify-around h-86 p-3 gap-2 bg-primary-gray-100 rounded-2xl border-2 border-white">
      <div className="flex-3 w-full bg-primary-gray-100 rounded-md border-2 border-white"></div>
      <div className="flex-4 flex flex-col justify-start w-full">
        <p className="text-white text-xl">Lorem ipsum dolor sit</p>
        <p className="text-primary-gray-200 text-sm">Lorem ipsum dolor sit amet</p>
        <p className="text-gray-200 text-md">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        <span className='flex-1'></span>
        <div className="flex flex-row flex-1">
          <span className='flex-1'></span>
          <span className='flex-2'>
            <CTA>Learn More</CTA>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card