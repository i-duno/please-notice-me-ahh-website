import { useState } from 'react'
import './landing-banner.css'

import CTA from './cta-red'

export function Banner({ className, children, href }) {
  const [title, setTitle] = useState("abc 123")

  return (
    <div className="relative w-full h-162 bg-black border-t-2 border-b-2 border-white">
      <img className='absolute inset-0 object-cover w-full h-full z-0 blur-xs' src="https://picsum.photos/1440/600" alt="Landing banner" />
      <div className="relative w-full h-full flex flex-col gap-8 justify-center items-center z-10">
        <p className='font-bold text-9xl text-white text-center'>testing123</p>
        <div onClick={() => {window.open('https://example.com', '_blank')}} className="w-3xs h-12">
          <CTA>Take me there</CTA>
        </div>
      </div>
    </div>
  )
}

export default Banner