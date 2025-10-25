import './image-gallery.css'

export function Gallery({className, children, href}) {

  var content = children==undefined?`Something whatever|Subtitle|Lorem ipsum dolor sit amet,
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`:children
  
  content = String(content).split("|")

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch justify-between gap-2 h-auto">
      <div className="flex-3 flex flex-col gap-2 h-auto">
        <div className="h-12 text-white font-light text-5xl">{content[0]}</div>
        <div className="h-8 text-primary-gray-300 text-xl">{content[1]}</div>
        <div className="flex-1 text-gray-200 text-xl">{content[2]}</div>
      </div>
      <div onClick={() => window.open('https://example.com', '_blank')} className="flex-5 flex flex-row gap-0 divide-none ">
        <div className="group cursor-pointer relative flex-1 transition-transform duration-500 ease-out hover:scale-110 hover:z-10">
          <img src="https://picsum.photos/650/400" className="object-cover w-full h-full z-0" />
          <div className="absolute top-0 w-full h-full z-10 bg-primary-gray-100 opacity-0 group-hover:opacity-60 transition-opacity duration-500 linear flex flex-row items-center">
            <p className='flex-1 text-center text-white text-lg'>heeey</p>
          </div>
        </div>
        <div onClick={() => window.open('https://example.com', '_blank')} className="group cursor-pointer relative flex-1 transition-transform duration-500 ease-out hover:scale-110 hover:z-10">
          <img src="https://picsum.photos/650/400" className="object-cover w-full h-full z-0" />
          <div className="absolute top-0 w-full h-full z-10 bg-primary-gray-100 opacity-0 group-hover:opacity-60 transition-opacity duration-500 linear flex flex-row items-center">
            <p className='flex-1 text-center text-white text-lg'>heeey</p>
          </div>
        </div>
        <div onClick={() => window.open('https://example.com', '_blank')} className="group cursor-pointer relative flex-1 transition-transform duration-500 ease-out hover:scale-110 hover:z-10">
          <img src="https://picsum.photos/650/400" className="object-cover w-full h-full z-0" />
          <div className="absolute top-0 w-full h-full z-10 bg-primary-gray-100 opacity-0 group-hover:opacity-60 transition-opacity duration-500 linear flex flex-row items-center">
            <p className='flex-1 text-center text-white text-lg'>heeey</p>
          </div>
        </div>
      </div>
    </div>
  )
  // Note: scale solution by chatgpt, not what i wanted but seems like flex isnt playing
}

export default Gallery